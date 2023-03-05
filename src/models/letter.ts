import { DoublyLinkedNode } from './linked_node';

/**Interface that describes the behaviour of a letter within in a sentence. */
export interface LetterNode extends DoublyLinkedNode {
  getIndexInWord(): number;
}
