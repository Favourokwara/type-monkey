// Interface describing a single letter within a sentence
export interface LetterNode { character: string, letterIndex: number, wordIndex: number, wordLength: number, }

export class Letter implements LetterNode { 
    constructor(public character: string, public letterIndex: number, public wordIndex: number, public wordLength: number) {}
}