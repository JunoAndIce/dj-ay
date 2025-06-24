import './App.css';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Scene from './scene';

const App = () => {
  return (


    <>
      <Canvas camera={{ fov: 10, position: [0, 0, -75] }}>
        <Suspense fallback={null}>
          <Scene />
          <EffectComposer>
            {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={0} height={480} /> */}
            <Bloom
              luminanceThreshold={2}     // Even faint light triggers bloom
              luminanceSmoothing={0.95}    // Smooth out bloom edges
              intensity={0.6}              // How bright the bloom is
              mipmapBlur                   // Adds better quality soft spread
              radius={0.9}                 // (If supported) how far bloom spreads
            />
            {/* <Noise opacity={0.02} /> */}
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <div className="info">
        <h1>Wave Shader</h1>
        <p>Click to play music</p>
        <p>Use the controls to adjust the wave color</p>
      </div>
    </>
  );
};

export default App;
