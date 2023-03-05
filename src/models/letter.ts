import { DoublyNode, DoublyLinkedNode } from './linked_node';

/**Interface that describes the behaviour of a letter within in a sentence. */
export interface LetterNode extends DoublyNode {
  getIndexInWord(): number;
}

export class Letter extends DoublyLinkedNode implements LetterNode {
  constructor(
    _data: any,
    private _index: number,
    public next?: DoublyLinkedNode,
    public prev?: DoublyLinkedNode,
  ) {
    super(_data, next, prev);
  }

  /**Returns the index value of the letter in relation to the word it is in. */
  getIndexInWord(): number {
    return this._index;
  }
}
