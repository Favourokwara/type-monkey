import { SinglyLinkedNode, DoublyLinkedNode } from '../interfaces/linked_nodes';

/**Data class used for building up and storing data in a singly linked list. */
export class SinglyNode implements SinglyLinkedNode {
  public next?: SinglyNode;
  constructor(public value: any) {}
}

/**Data class used for building up and storing data in a doubly linked list. */
export class DoublyNode extends SinglyNode implements DoublyLinkedNode {
  public declare next?: DoublyNode;
  public declare prev?: DoublyNode;

  constructor(value: any) {
    super(value);
  }
}
