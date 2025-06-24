
precision mediump float;

uniform float uRed;
uniform float uGreen;
uniform float uBlue;
uniform vec3 uColor;
uniform float uTime;

varying vec2 vUv;

void main() {
    vec3 glowColor = uColor * 3.5; // boost intensity for Bloom
    gl_FragColor = vec4(glowColor, 1.0);
}

// void main() {
//   gl_FragColor = vec4(sin(vUv.x + uTime) * uColor, 1.0);
// }

