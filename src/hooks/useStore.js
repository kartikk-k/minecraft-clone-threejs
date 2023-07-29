import { create } from "zustand";
import { nanoid } from "nanoid";


export const useStore = create((set) => ({
    texture: 'dirt',
    cubes: [{
        key: nanoid(),
        position: [0, 0.5, 2],
        texture: 'dirt'
    }, {
        key: nanoid(),
        position: [0, 0.5, 3],
        texture: 'brick'
    }],
    removeCube: () => { },
    addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [...prev.cubes, {
                key: nanoid(),
                pos: [x, y, z],
                texture: prev.texture
            }]
        }))
    },
    setTexture: () => { },
    saveWorld: () => { },
    resetWorld: () => { },
}))