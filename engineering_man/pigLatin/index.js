/**
 * Pig latin translator
 * Take a sentence/phrase in pig latin, translate it to English.
 * @Instructions
 * Your input variable will contain a sentence/phrase in pig latin.
 * Your job is to translate it to english. You add "yay" if the word starts with a vowel.
 * Otherwise move the starting consonant sequence (w, wr, sch, ...)
 * to the end of the word and add "ay" plus a dash.
 * @Inputs
 * Sentence/phrase in pig latin.
 * 
 * Short phrase
 * @input ayay imple-say est-tay ase-cay
 * @output a simple test case
 * 
 * Long phrase
 * @input 
 * ig-pay atin-lay isyay usedyay inyay ools-schay o-tay each-tay anguage-lay onstructs-cay
 * 
 * @output
 * pig latin is used in schools to teach language constructs
 */
const value1 = 'ayay imple-say est-tay ase-cay'
const expectedShortPhraseOutput = 'a simple test case'
const longPhrase = 'ig-pay atin-lay isyay usedyay inyay ools-schay o-tay each-tay anguage-lay onstructs-cay'
const expectedLongPhraseOutput = 'pig latin is used in schools to teach language constructs'

const startsWithVowel = (str) => {
  const regex = /(\b[AaEeIiOoUu]+[\w]*\b)/g
  return regex.test(str)
}

const pigLatin = (input) => {
  const phrase = input.split(' ')
  return phrase.map((word) => {
    if (hasVowel(word) && word.includes('yay')) {
      return word.split('yay').join('')
    }
    const [end, first] = word.split('-')
    const beginning = first.split('ay').join('')
    return beginning + end
  }).join(' ')
}

console.log(pigLatin(value1))
console.log(pigLatin(longPhrase))
