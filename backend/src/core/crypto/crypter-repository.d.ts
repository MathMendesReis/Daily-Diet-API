export interface ICrypterRepository {
  crypt: (text: string) => Promise<string>
  compare: (text: string, hash: string) => Promise<boolean>
}