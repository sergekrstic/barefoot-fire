import { customAlphabet } from 'nanoid'

// Nano ID Collision Calculator: https://zelark.github.io/nano-id-cc/
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
export const nanoid = customAlphabet(alphabet, 20)
