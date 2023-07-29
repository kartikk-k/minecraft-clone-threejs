import { useEffect } from "react"
import { useStore } from "../hooks/useStore"
import Cube from "./Cube"



const Cubes = () => {
    const [cubes, saveWorld] = useStore((state) => [
        state.cubes,
        state.saveWorld
    ])


    useEffect(() => {
        const handleEvent = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault()
                // saveWorld()
            }
        }

        window.addEventListener('keydown', handleEvent)

    }, [])


    return cubes.map(({ key, position, texture }) => (
        <Cube key={key} position={position} texture={texture} />
    ))
}

export default Cubes