#include pnoise

precision mediump float;

uniform vec3 uColor; // base gold
uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;

vec3 hueToRGB(float h) {
    h = mod(h, 1.0);
    float r = abs(h * 6.0 - 3.0) - 1.0;
    float g = 2.0 - abs(h * 6.0 - 2.0);
    float b = 2.0 - abs(h * 6.0 - 4.0);
    return clamp(vec3(r, g, b), 0.0, 1.0);
}

void main() {
    float hue;

    // Organic flowing rainbow based on 3D noise
    vec3 flow = vPosition * 1.0 + vec3(uTime * 0.2); // scale flow
    float n = pnoise(flow, vec3(10.0)); // [-1, 1]
    hue = n * 0.5 + 0.5; // map to [0, 1]

    vec3 rainbow = hueToRGB(hue);

    // Blend with gold
    vec3 finalColor = uColor + rainbow * 0.5;
    finalColor *= 3.0; // trigger bloom

    gl_FragColor = vec4(finalColor, 1.0);
}


// void main() {
//   gl_FragColor = vec4(sin(vUv.x + uTime) * uColor, 1.0);
// }

