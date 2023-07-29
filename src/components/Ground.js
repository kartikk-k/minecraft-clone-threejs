import React from 'react';
import { usePlane } from "@react-three/cannon";
import { groundTexture } from '../textures'

const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [0, 0, 0],
        position: [0, 0, 0],
    }))


    return (
        <mesh ref={ref} >

            {/* creates a plane geometry for the ground mesh. */}
            <planeGeometry attach="geometry" args={[100, 100]} />

            {/* creates a material for the ground mesh. In this case, it is using the `meshStandardMaterial` which is a
                built-in material in Three.js. The `color` property is set to "green", so the ground will be rendered with a green color. */}
            <meshStandardMaterial attach="material" map={groundTexture} />

        </mesh>
    )
}

export default Ground;
