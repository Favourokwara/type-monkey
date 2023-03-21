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

class TextController {
    public textView: TextView;
    constructor(view: TextView) {
        this.textView = view;
        document.addEventListener("keypress", e => this._handleKeyPress(e));
        document.addEventListener("keydown", e => this._handleBackspace(e));
    }

    _handleKeyPress(event: KeyboardEvent) {
        if (event.key.length === 1) {
            const cursor = this.textView.getCursor();

            if (cursor?.value.node.textContent === event.key) {
                // const node = document.createElement("span");
                cursor.value.node.classList.add("valid-text")
                cursor.value.node.classList.remove("invalid-text")
            } else {
                if(cursor) {
                    cursor.value.node.classList.add("invalid-text");
                    cursor.value.node.classList.remove("valid-text")
                }
            }
            this.textView.moveCursorForward()
            if (cursor?.value.node.parentNode != cursor?.next?.value.node.parentNode) {
                // check if all letters are correct
                const collection = cursor?.value.node.parentNode.childNodes;
                for (let i = 0; i < collection.length; i++) {
                    const element = collection[i];
                    
                    if(!element.classList.contains("valid-text")) {
                        cursor?.value.node.parentNode.classList.add("error")
                    }
                }
            }
        }
    }

    _handleBackspace(event: KeyboardEvent) {
        const cursor = this.textView.getCursor();
        if (event.key.toLowerCase() === "backspace"){
            if (event.ctrlKey) {
                if (cursor){
                    const previous = cursor.prev?.value.indx || 0;
                    for (let i = 0; i < previous + 1; i++) {
                        this.textView.moveCursorBackward();
                        this.textView.getCursor()?.value.node.removeAttribute("class");
                    }
                }
                
            } else {
                if(cursor) {
                    cursor.value.node.classList.remove("text-cursor")
                    cursor.value.node.classList.remove("valid-text")
                    cursor.value.node.classList.remove("invalid-text")
                }
                this.textView.moveCursorBackward();
            }
        }
        const newCursor = this.textView.getCursor();
        if (newCursor?.value.node.parentNode.classList.contains("error")) {
            newCursor?.value.node.parentNode.classList.remove("error");
        }
    }
}

class TextView {
    private sentence: DoublyList;
    private cursor?: DoublyNode;

    constructor() {
        const textContent = document.getElementById("text-content");
        textContent?.append(this.stringToSpan("Just because you have the emotional range of a teaspoon doesn't mean we all have."));
        const snt = document.getElementsByClassName("word");
        const lst = new DoublyList();
        for (let i = 0; i < snt.length; i++) {
            const letters = snt[i].children;
            for (let j = 0; j < letters.length; j++) {
                lst.push({
                    node: letters[j],
                    indx: j,
                })
            } 
        }
        this.sentence = lst;
        this.cursor = this.sentence.head;
        this.renderCursor()
        // this.moveCursorForward()
    }
    
    stringToSpan(s: string) {
        const words = s.split(/(?<=\s)/);
        const sentence = new DocumentFragment();

        for (let i = 0; i < words.length; i++) {
            const word = document.createElement("div");
            word.className = "word"
            for (let j = 0; j < words[i].length; j++) {
                const letter = document.createElement("letter");
                letter.textContent = words[i][j];
                word.appendChild(letter);
            }
            sentence.appendChild(word);
        }
        return sentence;
    }

    renderCursor() {
        let cursor = document.getElementById("text-cursor");
        if (cursor) cursor.removeAttribute("id")
        if (this.cursor) this.cursor.value.node.id = "text-cursor";
    }

    moveCursorForward(){
        const current = this.cursor, next = current?.next;
        
        if (this.cursor) {
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
    
    getCursor() { return this.cursor };
}

const controller = new TextController(new TextView());
