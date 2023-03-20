/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { DoublyList } from "./models/linked_list";
import type { DoublyNode } from "./models/linked_node";

// import confetti from 'canvas-confetti';

// confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 200, spread: 200 });

const list = new DoublyList();
list.push("1");
list.push("2");
list.push("4");
list.push("5");

list.insert("3", 2);
list.removeAt(3);
console.log(list);

class TextController {
    constructor(view: TextView) {
        document.addEventListener("keydown", (e) => {
            console.log("-" + e.key + "-");
            
            if (e.key.toLowerCase() == "backspace"){
                view.moveCursorBackward();
            } else {
                view.moveCursorForward();
            }
        });
    }
}

class TextView {
    private sentence: DoublyList;
    private cursor?: DoublyNode;

    constructor() {
        const textContent = document.getElementById("text-content");
        textContent?.append(this.stringToSpan("this is the best of my abilities"));
        const snt = document.getElementsByClassName("text-letter");
        const lst = new DoublyList();
        for (let i = 0; i < snt.length; i++) { lst.push(snt[i]) }
        this.sentence = lst;
        this.cursor = this.sentence.head;
        this.renderCursor()
        // this.moveCursorForward()
    }
    
    stringToSpan(s: string) {
        const words = s.split(/(?<=\s)/);
        const sentence = new DocumentFragment();

        for (let i = 0; i < words.length; i++) {
            const word = document.createElement("span");
            for (let j = 0; j < words[i].length; j++) {
                const letter = document.createElement("span");
                letter.className = "text-letter";
                letter.textContent = words[i][j];
                word.appendChild(letter);
            }
            sentence.appendChild(word);
        }
        return sentence;
    }

    renderCursor() {
        let cursor = document.getElementById("text-cursor");
        if (cursor) cursor.id = "";
        cursor = this.cursor?.value;
        if(cursor) cursor.id = "text-cursor"
    }

    moveCursorForward(){
        if (this.cursor?.next != null) {
            this.cursor = this.cursor.next;
        }
        this.renderCursor()
    }

    moveCursorBackward() {
        if (this.cursor?.prev != null) {
            this.cursor = this.cursor.prev;
        }
        this.renderCursor()
    }
    
    getCursor() { this.cursor };
}

const controller = new TextController(new TextView());
