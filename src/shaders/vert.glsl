
// #include snoise
#include pnoise

precision mediump float;

uniform float uTime;

uniform float uFrequency;

varying vec2 vUv;
varying vec3 vPosition;

//Pnoise
void main() {
  vUv = uv;
  vPosition = position; // for 3D noise in frag shader
  float noise = 2.0 * pnoise(position + uTime, vec3(10.0));
  float displacement = (uFrequency / 30.0) * (noise / 10.0);
  vec3 newPosition = position + normal * displacement;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}

// Snoise
// void main() {
//   vUv = uv;

//   vec3 pos = position;
//   float noiseFreq = 3.5;
//   float noiseAmp = 0.55;
//   vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
//   pos.z += snoise(noisePos) * noiseAmp;

//   gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
// }