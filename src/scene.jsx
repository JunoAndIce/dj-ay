import { forwardRef } from 'react';
import Wave from './wave';

const Scene = forwardRef((props, ref) => {
  return (
    <>
      <Wave ref={ref}/>
      {/* <OrbitControls enableZoom /> */}
    </>
  );
});

export default Scene;
