export const waveVertexShader = `
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uFrequency;
  uniform float uSpeed;

  varying float vElevation;
  varying vec2 vUv;

  void main() {
    vec3 newPosition = position;

    float waveX =
      sin(
        newPosition.x * uFrequency +
        uTime * uSpeed
      ) * uAmplitude;

    float waveY =
      cos(
        newPosition.y * uFrequency * 0.8 +
        uTime * uSpeed * 1.2
      ) * uAmplitude * 0.5;

    float elevation = waveX + waveY;

    newPosition.z += elevation;

    vElevation = elevation;
    vUv = uv;

    gl_Position =
      projectionMatrix *
      modelViewMatrix *
      vec4(newPosition, 1.0);
  }
`;

export const waveFragmentShader = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;

  varying float vElevation;
  varying vec2 vUv;

  void main() {
    float strength = smoothstep(
      -0.5,
      0.5,
      vElevation
    );

    vec3 color = mix(
      uColorA,
      uColorB,
      strength
    );

    gl_FragColor = vec4(color, 1.0);
  }
`;