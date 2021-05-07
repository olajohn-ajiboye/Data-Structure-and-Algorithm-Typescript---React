/* Elelement of Programming Interview 7.6
 Reverse all the words is a sentence
 eg "God is Good" => "Good is God"
*/
/**
 * Reveser all the sentence
 * Reverse indiovidual words
 */

export function reverseSentence(sentence: string) {
    const words = sentence.split(' ')
     reverse(words , 0, sentence.length - 1)
    let startIndex = 0, end=0
//     while ((end =sentence.indexOf(' ') )!== -1) {
//         reverse(words , startIndex, end)
//         startIndex = end+1
//    }

    reverse(words, startIndex, words.length)
    return
  
}

function reverse(array: string[], start: number, end: number) {
    let left =start, right = end
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]]
        left++
        right--
    }
}

export default reverseSentence