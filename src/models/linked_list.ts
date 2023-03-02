// Import all items required to build the linked list data structure.
import { SinglyLinkedNode, DoublyLinkedNode } from "./linked_node";

/**Interface that desribes the singly linked list data structure. */
export interface SinglyList { head?: SinglyLinkedNode, getSize(): number,
    push(item: any): void, insert(item: any, index: number): boolean,
    getElementAt(index: number): SinglyLinkedNode | undefined,
    removeAt(index: number): any, remove(item: any): any, isEmpty(): boolean,
}