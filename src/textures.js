import { TextureLoader } from 'three'
import {
    BrickImage,
    DirtImage,
    GrassImage,
    LogImage,
    WoodImage
} from './images'


const brickTexture = new TextureLoader(BrickImage)
const dirtTexture = new TextureLoader(DirtImage)
const grassTexture = new TextureLoader(GrassImage)
const logTexture = new TextureLoader(LogImage)
const woodTexture = new TextureLoader(WoodImage)
const groundTexture = new TextureLoader(GrassImage)

export {
    brickTexture,
    dirtTexture,
    grassTexture,
    logTexture,
    woodTexture,
    groundTexture
}