// hooks/useMusicAnalyser.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function useMusicAnalyser(audioUrl = '/assets/music/rush.mp3', fftSize = 32) {
  const analyser = useRef(null);

  useEffect(() => {
    const listener = new THREE.AudioListener();
    const sound = new THREE.Audio(listener);
    analyser.current = new THREE.AudioAnalyser(sound, fftSize);
    const audioLoader = new THREE.AudioLoader();

    audioLoader.load(audioUrl, (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);

      const onClick = () => {
        sound.play();
        window.removeEventListener('click', onClick);
      };

      window.addEventListener('click', onClick);
    });

    return () => {
      sound.stop();
    };
  }, [audioUrl, fftSize]);

  return analyser;
}
