import { create } from "zustand";
import { nanoid } from "nanoid";


export const useStore = create((set) => ({
    texture: 'dirt',
    cubes: [
        //     {
        //     key: nanoid(),
        //     position: [0, 0.5, 2],
        //     texture: 'dirt'
        // }, {
        //     key: nanoid(),
        //     position: [0, 0.5, 3],
        //     texture: 'brick'
        // }
    ],
    removeCube: (x, y, z) => {
        set((prev) => ({
            cubes: prev.cubes.filter(cube => {
                const [cubeX, cubeY, cubeZ] = cube.position
                return cubeX !== x || cubeY !== y || cubeZ !== z
            })

        }))
    },
    addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    position: [x, y, z],
                    texture: prev.texture
                }
            ]
        }))
    },
    setTexture: () => { },
    saveWorld: () => { },
    resetWorld: () => { },
}))