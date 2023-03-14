/**Abstract class that describes the behavior of a singly linked list node. */
export interface SinglyLinkedNode {
  /**The next value attached to the linked list */
  next?: SinglyLinkedNode;

  /**Stores the values and data inside the list */
  value: any;
}

/**Abstract class that describes the behavior of a doubly linked list node. */
export interface DoublyLinkedNode extends SinglyLinkedNode {
  /**The next value attached to the linked list */
  next?: DoublyLinkedNode;

  /**The previous value attached to the linked list */
  prev?: DoublyLinkedNode;

  /**Stores the values and data inside the list */
  value: any;
}
