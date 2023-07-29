import { Canvas } from '@react-three/fiber';
import './App.css';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Ground from './components/Ground';
import Player from './components/Player';
import FPV from './components/FPV';
import Cubes from './components/Cubes';
import TextureSelector from './components/TextureSelector';

function App() {
  return (
    <>
      <Canvas className='canvas'>

        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={1} />

        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>

      </Canvas>

      {/* fpv cursor */}
      <div className='fpv-cursor'>⌖</div>
      <TextureSelector />

    </>
  );
}

export default App;
