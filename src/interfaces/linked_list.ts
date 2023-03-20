import type { SinglyLinkedNode, DoublyLinkedNode } from "./linked_node";

/**Abstract class describing the behaviour of a singly linked list structure.*/ 
export interface SinglyLinkedList {
    /**The first node in the linked list chain sequence.*/
    head?: SinglyLinkedNode;

    /**Returns the number of node items in the linked list chain structure.*/
    size(): number;

    /**Appends the specified item to the end of the linked list node chain.*/
    push(item: any): void;

    /**Inserts the provided item within the specified valid index position.*/
    insert(item: any, index: number): boolean;

    /**Removes the node item located at the specified valid index position.*/
    removeAt(index: number): any;

    /**Removes any node item that matches the specified linked list values.*/
    remove(item: number): void;

    /**Returns the index of the provided item value within the linked list.*/
    indexOf(item: any): number;

    /**Returns boolean value that indicates whether or not a list is empty.*/
    isEmpty(): boolean;
    
    /**Returns the linked list node item loacated in the provided position.*/
    getElementAt(index: number): SinglyLinkedNode | undefined;
}

export interface DoublyLinkedList extends SinglyLinkedList {
    /**The first node in the linked list chain sequence.*/
    head?: DoublyLinkedNode;

    /**The last node in the linked list chain sequence. */
    tail?: DoublyLinkedNode;

    getElementAt(index: number): DoublyLinkedNode | undefined;
}