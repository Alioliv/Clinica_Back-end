
const saltRound = 10;
import bcrypt from "bcrypt"

export async function createHash(senha: string) {
    return await bcrypt.hash(senha, saltRound)
}

export async function compareHash(senha: string, hash: string) {
    return await bcrypt.compare(senha, hash)
}

