import { SinglyLinkedNode, DoublyLinkedNode } from './linked_nodes';

/**Abstract class describing the behavior of the linked list data structure. */
export interface SinglyLinkedList {
  /**The first node in the linked list sequence.*/
  head?: SinglyLinkedNode;

  /**Returns the number of node items within the linked list data structure. */
  getSize(): number;

  /**Appends the specified item to the last node of the of the linked list. */
  push(item: any): void;

  /**Inserts the provided item at the specified index position within range. */
  insert(item: any, index: number): boolean;

  /**Removes the node item in the specified index position thats in range. */
  removeAt(index: number): any;

  /** Removes any item that matches the specified item in the linked list. */
  remove(item: any): void;

  /**Returns the index of the specified item value within the linked list. */
  indexOf(item: any): number;

  /**Returns boolean that indicates whether or not the linked list is empty. */
  isEmpty(): boolean;

  /**Returns the linked list node item within the specified index position. */
  getElementAt(index: number): SinglyLinkedNode | undefined;
}

/**Abstract class describing the behavior of the doubly list data structure. */
export interface DoublyLinkedList extends SinglyLinkedList {
  /**The first node in the linked list sequence.*/
  head?: DoublyLinkedNode;

  /**The last node in the linked list sequence. */
  tail?: DoublyLinkedNode;

  /**Returns the linked list node item within the specified index position. */
  getElementAt(index: number): DoublyLinkedNode | undefined;
}
