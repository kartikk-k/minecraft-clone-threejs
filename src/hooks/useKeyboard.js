import { useCallback, useEffect, useState } from "react";

function actionByKey(key) {
    const keyActionMap = {
        // wasd key controls
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyA: 'moveLeft',
        KeyD: 'moveRight',

        // arrow key controls
        ArrowUp: 'moveForward',
        ArrowDown: 'moveBackward',
        ArrowLeft: 'moveLeft',
        ArrowRight: 'moveRight',

        // jump
        Space: 'jump',

        // texture
        Digit1: 'dirt',
        Digit2: 'grass',
        Digit3: 'brick',
        Digit4: 'wood',
        Digit5: 'log'
    }

    return keyActionMap[key]
}

const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        grass: false,
        brick: false,
        log: false,
        wood: false,
    });


    const handleKeyDown = useCallback((e) => {
        const action = actionByKey(e.code)
        if (action) {
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: true
                })
            })
        }
    })

    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code)
        if (action) {
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: false
                })
            })
        }
    })


    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        // to avoid endless loop of event listeners
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [handleKeyDown, handleKeyUp])

    return actions

}

export default useKeyboard;