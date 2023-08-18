import CharacterAI from 'node_characterai'


export const testing = async () => {
  const characterAI = new CharacterAI()
  await characterAI.auth
  const ai = new characterAI()
  const result = await ai.getCharacterAI()
  console.log(result)
}
