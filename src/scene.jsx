import React from 'react';
import { OrbitControls } from '@react-three/drei';
import Wave from './Wave';

const Scene = () => {
  return (
    <>
      <Wave />
      {/* <OrbitControls enableZoom /> */}
    </>
  );
};

export default Scene;
