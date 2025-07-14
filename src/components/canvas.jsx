import { Suspense } from 'react';
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { Canvas } from '@react-three/fiber';
import Scene from '../scene';

const Canvas = () => {

    const meshRef = useRef()

    return (
        <>
            <div id="canvas-container">
                <Canvas camera={{ fov: 10, position: [0, 0, -75] }}>
                    <Suspense fallback={null}>
                        <Scene ref={meshRef} />
                        <EffectComposer>
                            <Bloom
                                luminanceThreshold={0.5}
                                luminanceSmoothing={0.95}
                                intensity={1.2}
                                mipmapBlur
                                radius={1}
                            />
                            <Vignette eskil={false} offset={0.1} darkness={1.1} />
                        </EffectComposer>
                    </Suspense>
                </Canvas>
            </div>
        </>
    )
}

export default Canvas;