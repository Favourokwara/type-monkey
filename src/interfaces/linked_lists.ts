import { SinglyLinkedNode, DoublyLinkedNode } from './linked_nodes';

/**Abstract class describing a linked list data structures behaviour.*/
export interface SinglyLinkedList {
  head?: SinglyLinkedNode<any>;
  getSize: number;
  push(item: any): void;
  insert(item: any, index: number): boolean;
  remove(item: any): void;
  removeAt(index: number): any;
  indexOf(item: any): number;
  isEmpty(): boolean;
  getElementAt(index: number): SinglyLinkedNode<any> | undefined;
}

/**Abstract class describing a doubly list data structures behaviour.*/
export interface DoublyLinkedList extends SinglyLinkedList {
  head?: DoublyLinkedNode<any>;
  tail?: DoublyLinkedNode<any>;
  getElementAt(index: number): DoublyLinkedNode<any> | undefined;
}
