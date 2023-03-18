import { DoublyList } from "src/models/linked_list";

/**Split a string into substrings by the end space boundaries and return them as an array.*/
function stringToWords(s: String): String[] { return  s.split(/(?<=\s)/) }

/**Converts the provided string into a doubly linked list indexed by its words positions. */
function stringToWordList(s: String): DoublyList {
    const sentence = new DoublyList(), words = stringToWords(s);

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            sentence.push({ character: words[i][j], word: i, letter: j });
        }
    }
    return sentence;
}