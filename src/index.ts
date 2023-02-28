/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { Letter } from "./models/letter";
import { DoublyLinkedList } from "./models/linked_list";

// import confetti from 'canvas-confetti';

// confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 200, spread: 200 });

function sentenceToDoublyLinkedList(sentence: string): DoublyLinkedList {
  const words: string[] = sentence.split(/(?<=\s)/);
  const doublyList = new DoublyLinkedList();

  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    for (let j = 0; j < words[i].length; j++) {
      doublyList.push(new Letter(words[i][j], j, i, wordLength));
    }
  } 
  return doublyList
}


class SentenceService {
  public reference: DoublyLinkedList;
  public typed_lst: DoublyLinkedList = new DoublyLinkedList();

  constructor(ref: string) {
    this.reference = sentenceToDoublyLinkedList(ref);
  }
  addCharacter(str: string) {
    if (str.length == 1 && this.typed_lst.size < this.reference.size) {
      const base: Letter = this.reference.getElementAt(this.typed_lst.size)?.getValue();
      base.character = str;
      this.typed_lst.push(base)
    }
  }
  removeCharacter(): Letter {
    return this.typed_lst.removeAt(this.typed_lst.size - 1);
  }
  removeWord(): Letter {
    const tail = this.typed_lst.tail;
    let current = tail
    const moves = current?.getValue().letterIndex;
    for (let i = 0; i < moves.length + 1 ; i++) {
      current = current?.prev;
    }
    console.log(current);
    
  }
}

const service = new SentenceService("this is what i do for a living.")
service.addCharacter("t")
service.addCharacter("h")
service.addCharacter("i")
service.addCharacter("s")
service.addCharacter(" ")
service.addCharacter("i")
service.addCharacter("s")
service.addCharacter(" ")
service.addCharacter("w")
service.addCharacter("h")
service.addCharacter("a")
service.addCharacter("t")
service.addCharacter(" ")
service.addCharacter("i")

// console.log(service.removeWord())
console.log(service.typed_lst);

