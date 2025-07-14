import React, { forwardRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import Wave from './Wave';

const Scene = forwardRef((props, ref) => {
  return (
    <>
      <Wave ref={ref}/>
      {/* <OrbitControls enableZoom /> */}
    </>
  );
});

export default Scene;
