// Import all items required to build the linked list data structure.
import { SinglyLinkedNode, DoublyLinkedNode } from "./linked_node";

/**Interface that desribes the singly linked list data structure. */
export interface SinglyList { head?: SinglyLinkedNode, getSize(): number,
    push(item: any): void, insert(item: any, index: number): boolean,
    getElementAt(index: number): SinglyLinkedNode | undefined,
    removeAt(index: number): any, remove(item: any): any, isEmpty(): boolean,
}

function defaultEquals(a: any, b: any): boolean { return a === b; }

export class SinglyLinkedList implements SinglyList {
    private size: number = 0;
    public head?: SinglyLinkedNode;
    constructor(private equalsFn: Function = defaultEquals) {}

    /**Returns the size of the linked list.*/
    getSize(): number { return this.size; }

    /**Appends the provided item to the end of the linked list. */
    push(item: any): void {
        const node = new SinglyLinkedNode(item);

        if (this.head == undefined) {
            this.head = node;
        } else {
            let current = this.head;

            // find the end of the linked list and append item to it
            while (current?.next != null) { current = current.next;}
            current.next = node;
        }
        this.size++;
    }
}