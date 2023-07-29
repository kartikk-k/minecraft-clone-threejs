import React from 'react';
import { usePlane } from "@react-three/cannon";
import { groundTexture } from '../textures'
import { NearestFilter, RepeatWrapping } from 'three'
import { useStore } from '../hooks/useStore'

const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0], // 90 degrees
        position: [0, -0.5, 0],
    }))

    groundTexture.wrapS = RepeatWrapping
    groundTexture.wrapT = RepeatWrapping
    groundTexture.repeat.set(100, 100)

    const [addCube] = useStore((state) => [state.addCube])

    return (
        <mesh ref={ref}
            onClick={(e) => {
                e.stopPropagation() // to avoid default click behavior
                const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val))
                addCube(x, y, z)

            }}>

            {/* creates a plane geometry for the ground mesh. */}
            <planeGeometry attach="geometry" args={[100, 100]} />

            {/* creates a material for the ground mesh. In this case, it is using the `meshStandardMaterial` which is a
                built-in material in Three.js. The `color` property is set to "green", so the ground will be rendered with a green color. */}
            <meshStandardMaterial attach="material" map={groundTexture} />

        </mesh>
    )
}

export default Ground;
