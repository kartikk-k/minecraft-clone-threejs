import { Canvas } from '@react-three/fiber';
import './App.css';
import { Sky } from '@react-three/drei';

function App() {
  return (
    <>
      <Canvas className='canvas'>
        <Sky sunPosition={[100, 100, 20]} />
      </Canvas>
    </>
  );
}

export default App;
