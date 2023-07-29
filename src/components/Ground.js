import React from 'react';
import { usePlane } from "@react-three/cannon";
import { groundTexture } from '../textures'
import { NearestFilter, RepeatWrapping } from 'three';

const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 4, 0, 0],
        position: [0, 0, 0],
    }))

    groundTexture.magFilter = NearestFilter

    groundTexture.wrapS = RepeatWrapping
    groundTexture.wrapT = RepeatWrapping
    groundTexture.repeat.set(100, 100)


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
