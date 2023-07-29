import { Canvas } from '@react-three/fiber';
import './App.css';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Ground from './components/Ground';

function App() {
  return (
    <>
      <Canvas className='canvas'>

        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1} />

        <Physics>
          <Ground />
        </Physics>

      </Canvas>
    </>
  );
}

export default App;
