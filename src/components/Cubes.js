import { useStore } from "../hooks/useStore"
import Block from "./Block"



const Cubes = () => {
    const [cubes] = useStore((state) => [
        state.cubes
    ])

    console.log("cubes: ", cubes)
    return cubes.map(({ key, position, texture }) => (
        <Block key={key} position={position} texture={texture} />
    ))
}

export default Cubes