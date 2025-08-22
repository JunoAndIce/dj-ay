import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import vertex from './shaders/vert.glsl';
import fragment from './shaders/frag.glsl';
import useMusicAnalyser from './hooks/audioAnalyser';

import { RenderPass } from 'three/examples/jsm/Addons.js';

// Define the shader material
const WaveShaderMaterial = shaderMaterial(
    {
        uTime: 0.0,
        uFrequency: 0.0,
        uRed: 1.0,
        uGreen: 1.0,
        uBlue: 1.0,
        uColor: new THREE.Color(1.0, 0.8, 0.0),
        uResolution: new THREE.Vector2(window.innerWidth, window.innerHeight),

    },
    vertex,
    fragment
);

// const initColor = new THREE.Color('hotpink');

// const params = {
//   red: initColor.r,
//   green: initColor.g,
//   blue: initColor.b,
// };

extend({ WaveShaderMaterial });

const Wave = forwardRef((props, ref) => {

    const materialRef = useRef();
    const meshRef = useRef();
    const lightRef = useRef();

    const analyser = useMusicAnalyser('src/assets/music/rush.mp3', 32);

    useImperativeHandle(ref, () => ({
        setColor: (color) => {
            materialRef.current.uColor.set(color)
        },
    }))

    // const gui = new GUI();
    // const colorsFolder = gui.addFolder('Colors');

    // function updateColor() {
    //     materialRef.current.uColor.setRGB(params.red, params.green, params.blue);
    // }

    // colorsFolder.add(params, 'red', 0, 1).step(0.001).onChange(updateColor);
    // colorsFolder.add(params, 'green', 0, 1).step(0.001).onChange(updateColor);
    // colorsFolder.add(params, 'blue', 0, 1).step(0.001).onChange(updateColor);



    // useHelper(lightRef, THREE.DirectionalLightHelper, 0.5, 'white')

    // Directional light controls (Leva)
    // const { lightColor, lightIntensity } = useControls({
    //     lightColor: 'white',
    //     lightIntensity: { value: 0.8, min: 0, max: 5, step: 0.01 },
    // });

    // Update shader each frame
    useFrame(({ clock }, delta) => {
        if (materialRef.current && analyser.current) {
            materialRef.current.uTime = clock.getElapsedTime();
            materialRef.current.uFrequency = analyser.current.getAverageFrequency();
        }

        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1;
        }
    });

    return (
        <>
            <directionalLight
                ref={lightRef}
                position={[0, 1, 5]}
                color={'white'}
                intensity={0.5}
            />

            <mesh ref={meshRef}>
                <icosahedronGeometry args={[4, 30]} />
                <waveShaderMaterial ref={materialRef} wireframe />
            </mesh>
        </>
    );
});

export default Wave;
