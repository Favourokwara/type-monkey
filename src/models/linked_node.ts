import type { SinglyLinkedNode, DoublyLinkedNode } from "src/interfaces/linked_node";

/**Data class used to store values inside a singly linked list data structure.*/
export class SinglyNode implements SinglyLinkedNode {
    public next?: SinglyNode;
    constructor(public value: any) {}
}

/**Data class used to store values inside a doubly linked list data structure.*/
export class DoublyNode extends SinglyNode implements DoublyLinkedNode {
    public declare next?: DoublyNode;
    public declare prev?: DoublyNode;
}