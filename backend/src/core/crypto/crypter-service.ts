import bcrypt from 'bcrypt'
import type { ICrypterRepository } from './crypter-repository'

export class CrypterRepo implements ICrypterRepository {
  async crypt(text: string): Promise<string> {
    const hash = await bcrypt.hash(text, 10)
    return hash
  }

  async compare(text: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(text, hash)
  }
}