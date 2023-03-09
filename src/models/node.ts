import { SinglyLinkedNode, DoublyLinkedNode } from '../interfaces/node';

/**Data class that's used to build up and store data within the linked list. */
export class SinglyNode implements SinglyLinkedNode<any> {
  public next?: SinglyLinkedNode<any>;
  constructor(public value: any) {}
}

/**Data class that's used to build up and store data in doubly linked lists. */
export class DoublyNode extends SinglyNode implements SinglyLinkedNode<any> {
  public declare next?: DoublyLinkedNode<any>;
  public declare prev?: DoublyLinkedNode<any>;
}
