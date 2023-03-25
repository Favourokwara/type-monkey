import { DoublyList } from "./models/linked_list";
import { DoublyNode } from "./models/linked_node";

export default class TextView {
    // html div element used to display the text words
    private wrapper = document.getElementById('wordsWrapper');
    private _referenceText?: string;
    private _referenceSpan?: DoublyList;
    private _cursor?: DoublyNode;

    constructor() {
        this.setReference("If you ever looked at me once with what i know is in you, I would be your slave.")
        document.addEventListener("keydown", e => {
            // console.log(e.key);
            
            if (e.key.length == 1){
                if (this._cursor?.value.node.textContent == e.key) {
                    this.markCursorCorrect()
                }else {
                    this.markCursorWrong()
                }
                
                this.moveCursorForward()
            }
            else if (e.key.toLowerCase() == 'backspace')
            this.moveCursorBack()
            
        })
    }

    markCursorCorrect() {
        this._cursor?.value.node.classList.add('correct');
    }
    
    markCursorWrong() {
        this._cursor?.value.node.classList.add('incorrect');
    }

    setReference(s: string) {
        this._referenceText = s;
        this.wrapper?.append(this.stringToWords(this._referenceText));
        this._referenceSpan = this.getLetters();
        this._cursor = this._referenceSpan.head;
        this.displayCursor();
    }

    moveCursorForward() {
        if (this._cursor && this._cursor.next) {
            const word = this._cursor.value.node.parentNode;
            this._cursor = this._cursor.next;
            this.displayCursor()
            for (const letter of word.childNodes) {
                if (letter.classList.contains("incorrect")) {
                    word.classList.add("error");
                    break;
                }
            }
        }
    }

    moveCursorBack() {
        if (this._cursor?.prev) {
            const word = this._cursor.value.node.parentNode;
            this._cursor = this._cursor.prev;
            this.displayCursor()
        }
    }

    private displayCursor() {
        const current = document.getElementById('cursor');
        if (current) current.removeAttribute('id');
        if (this._cursor) this._cursor.value.node.id = 'cursor';
    }

    private getLetters(): DoublyList {
        const list = new DoublyList();

        const words = document.getElementsByClassName('word');
        for (let i = 0; i < words.length; i++) {
            const letters = words[i].children;

            for (let j = 0; j < letters.length; j++)
            list.push({ node: letters[j], index: j })
        }
        return list;
    }

    private stringToWords(s: string): HTMLElement {
        const element = document.createElement('div');
        element.id = 'words';
        const words = s.split(/(?<=\s)/);

        for (let i = 0; i < words.length; i++) {
            const word = document.createElement('div');
            word.className = 'word';
            for (let j = 0; j < words[i].length; j++) {
                const letter = document.createElement('letter');
                letter.innerText = words[i][j];
                word.appendChild(letter);
            }
            element.appendChild(word);
        }
        return element;
    }

}