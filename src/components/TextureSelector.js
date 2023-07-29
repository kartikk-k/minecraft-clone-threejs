import { useState, useEffect } from "react";
import { useStore } from "../hooks/useStore";
import useKeyboard from "../hooks/useKeyboard";
import { DirtImage, GrassImage, BrickImage, LogImage, WoodImage } from "../images";

const images = {
    dirt: DirtImage,
    grass: GrassImage,
    brick: BrickImage,
    wood: WoodImage,
    log: LogImage,
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {
        dirt,
        grass,
        brick,
        wood,
        log,
    } = useKeyboard()

    useEffect(() => {
        const textures = {
            dirt,
            grass,
            brick,
            wood,
            log
        }
        const pressedTexture = Object.entries(textures).find(([k, v]) => v)
        if (pressedTexture) {
            setTexture(pressedTexture[0])
        }
    }, [setTexture, dirt, grass, brick, wood, log])



    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)
        setVisible(true)
        return () => {
            clearTimeout(visibilityTimeout)
        }
    }, [activeTexture])

    return visible && (
        <div className='texture-selector'>
            {Object.entries(images).map(([k, src]) => {
                return (<img
                    key={k}
                    src={src}
                    alt={k}
                    className={`${k === activeTexture ? 'active' : ''}`}
                />)
            })}
        </div>
    )
}


export default TextureSelector