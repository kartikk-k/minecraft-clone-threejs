import { useBox } from "@react-three/cannon";
import * as Texture from '../textures'

const Block = ({ position, texture }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))

    const blockTexture = Texture[texture + 'Texture']
    console.log("blockTexture: ", blockTexture)

    return (
        <mesh ref={ref}>
            <boxGeometry attach="geometry" />
            <meshStandardMaterial attach="material" map={blockTexture} />
        </mesh>
    )
}

export default Block;