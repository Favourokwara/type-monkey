import { SinglyLinkedNode, DoublyLinkedNode } from '../interfaces/linked_nodes';

/**Data class used for building up and storing data in a singly linked list. */
export class SinglyNode implements SinglyLinkedNode {
  constructor(public value: any, public next?: SinglyNode) {}
}

/**Data class used for building up and storing data in a doubly linked list. */
export class DoublyNode extends SinglyNode implements DoublyLinkedNode {
  constructor(value: any, next?: DoublyNode, public prev?: DoublyNode) {
    super(value, next);
  }
}
