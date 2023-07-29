import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useKeyboard from "../hooks/useKeyboard";


const JUMP_VELOCITY = 5
const SPEED = 4

const Player = () => {

    const actions = useKeyboard()

    const { camera } = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 1, 0],
    }))


    // handles the position of the camera
    const pos = useRef([0, 0, 0])

    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])


    // handles the velocity
    const velocity = useRef([0, 0, 0])

    useEffect(() => {
        api.velocity.subscribe((v) => velocity.current = v)
    }, [api.velocity])



    useFrame(() => {
        /* this is updating the position of the camera where Vector3 means 3d object */
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))

        const direction = new Vector3()

        const frontVector = new Vector3(
            0, 0, (actions.moveBackward ? 1 : 0) - (actions.moveForward ? 1 : 0)
        )

        const sideVector = new Vector3(
            (actions.moveLeft ? 1 : 0) - (actions.moveRight ? 1 : 0),
            0,
            0
        )

        direction.subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation)

        api.velocity.set(direction.x, velocity.current[1], direction.z)

        // handles player jump by changing the y velocity
        if (actions.jump && Math.abs(velocity.current[1] < 0)) {
            api.velocity.set(velocity.current[0], JUMP_VELOCITY, velocity.current[2])
        }

    })

    return (
        <mesh ref={ref} />
    )
}

export default Player;