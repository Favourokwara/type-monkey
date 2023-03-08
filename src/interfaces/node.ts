/**Abstract class that describes the behavior of a singly linked list node. */
interface SinglyLinkedNode<Type> {
  /**The next value attached to the linked list */
  next?: SinglyLinkedNode<Type>;

  /**Stores the values and data inside the list */
  value: Type;
}

/**Abstract class that describes the behavior of a doubly linked list node. */
interface DoublyLinkedNode<Type> extends SinglyLinkedNode<Type> {
  /**The next value attached to the linked list */
  next?: SinglyLinkedNode<Type>;

  /**The previous value attached to the linked list */
  prev?: SinglyLinkedNode<Type>;

  /**Stores the values and data inside the list */
  value: Type;
}
