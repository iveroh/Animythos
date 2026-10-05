export const fragmentShader = `
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uAspect;
  uniform vec2 uPointer;

  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p = p * 2.0 + vec2(7.3, 1.7);
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {
    vec2 p = vec2((vUv.x - 0.5) * uAspect, vUv.y);
    p.x += uPointer.x * 0.08;

    float t = uTime * 0.12;

    // Deep night-sky base that lightens slightly toward the horizon.
    vec3 color = uColorA * (0.45 + 0.9 * (1.0 - vUv.y));

    for (int i = 0; i < 3; i++) {
      float fi = float(i);

      // Each ribbon drifts across the screen along a noisy path.
      float path = fbm(vec2(p.x * 0.9 + fi * 11.0, t + fi * 3.0));
      float center = 0.42 + fi * 0.1 + (path - 0.5) * 0.7 * uAmplitude;

      // Sharp lower edge, long soft fade upward.
      float d = vUv.y - center;
      float curtain = exp(-abs(d) * (d > 0.0 ? 3.5 : 22.0));

      // Vertical rays inside the curtain.
      float rays = 0.55 + 0.75 * fbm(vec2(p.x * 7.0 + fi * 5.0, t * 2.5));

      vec3 tint = mix(uColorB, uColorC, clamp(fi * 0.5 + d, 0.0, 1.0));
      color += tint * curtain * rays * 0.55;
    }

    // Soften the center so overlaid text stays readable.
    float centerDist = length((vUv - 0.5) * vec2(1.0, 1.2));
    color *= mix(0.65, 1.0, smoothstep(0.1, 0.6, centerDist));

    gl_FragColor = vec4(color, 1.0);

    #include <colorspace_fragment>
  }
`;
