import { TextureLoader } from 'three'
import {
    BrickImage,
    DirtImage,
    GrassImage,
    LogImage,
    WoodImage
} from './images'


const brickTexture = new TextureLoader().load(BrickImage)
const dirtTexture = new TextureLoader().load(DirtImage)
const grassTexture = new TextureLoader().load(GrassImage)
const logTexture = new TextureLoader().load(LogImage)
const woodTexture = new TextureLoader().load(WoodImage)
const groundTexture = new TextureLoader().load(GrassImage)

export {
    brickTexture,
    dirtTexture,
    grassTexture,
    logTexture,
    woodTexture,
    groundTexture
}