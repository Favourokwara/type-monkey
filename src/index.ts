/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { DoublyList } from './models/linked_list';
import { DoublyNode } from './models/linked_node';

/**Split a string into substrings by the end space boundaries and return them as an array.*/
function stringToWords(s: String): String[] {
  return s.split(/(?<=\s)/);
}

/**Converts the provided string into a doubly linked list indexed by its words positions. */
function stringToWordList(s: String): DoublyList {
  const sentence = new DoublyList(),
    words = stringToWords(s);

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      sentence.push({ character: words[i][j], word: i, letter: j });
    }
  }
  return sentence;
}

class TextController {
  private reference: DoublyList = stringToWordList(
    "something fishy is going on and i don't know what it is",
  );
  // private actual: DoublyList;

  constructor(private view: TextView) {
    view.render("something fishy is going on and i don't know what it is");
  }
}

class TextView {
  private sentence?: DoublyList;
  private cursor?: DoublyNode;

  constructor() {
    this.sentence = new DoublyList();
    const letters = document.getElementsByClassName('text-letter');

    for (let i = 0; i < letters.length; i++) {
      this.sentence.push(letters[i]);
    }

    this.cursor = this.sentence.head;
    if (this.cursor) this.cursor.value.id = 'text-cursor';
  }

  incrementCursor() {
    const current = this.cursor;
    if (current != null) current.value.id = '';
    this.cursor = current?.next;
    if (this.cursor != null) this.cursor.value.id = 'text-cursor';
  }

  render(s: String) {
    const textContainer = document.getElementById('text-cnt');
    const sentence = new DocumentFragment(),
      words = stringToWords(s);

    for (let i = 0; i < words.length; i++) {
      const word = document.createElement('span');
      for (let j = 0; j < words[i].length; j++) {
        const letter = document.createElement('span');
        letter.innerHTML = words[i][j];
        word.append(letter);
      }
      sentence.append(word);
    }
    textContainer?.appendChild(sentence);
  }
}

const controller = new TextController(new TextView());
