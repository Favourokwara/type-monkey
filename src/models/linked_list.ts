// Import all items required to build the linked list data structure.
import { SinglyLinkedNode, DoublyLinkedNode } from "./linked_node";

/**Interface that desribes the singly linked list data structure. */
export interface SinglyList {
    head?: SinglyLinkedNode,
    getSize(): number,
    push(item: any): void,
    insert(item: any, index: number): boolean,
    getElementAt(index: number): SinglyLinkedNode | undefined, 
    removeAt(index: number): any,
    remove(item: any): any,
    indexOf(item: any): number,
    isEmpty(): boolean,
}

function defaultEquals(a: any, b: any): boolean { return a === b; }

/**Class that represents the Singly Linked List data structure. */
export class SinglyLinkedList implements SinglyList {
    private size: number = 0;
    public head?: SinglyLinkedNode;
    constructor(private equalsFn: Function = defaultEquals) {}

    /**Returns the number of items within the linked list object. */
    getSize(): number { return this.size; }

    /**Removes the item in the linked list with the provided index.*/
    remove(item: any) { return this.removeAt(this.indexOf(item)); }

    /**Returns boolean indicating whether or not the list is empty.*/
    isEmpty(): boolean { return this.head == undefined; }

    /**Appends the specified element to the end of the linked list.*/
    push(item: any): void {
        let node = new SinglyLinkedNode(item), current = this.head;

        if (current === undefined) { this.head = node; }
        else {
            // get the last item within the list and ensure that its
            // link is pointed towards the newly created SinglyNode.
            while (current?.next != null) { current = current.next; }
            current.next = node;
        }
        this.size++;
    }

    /**Inserts the provided item into the specified index position.*/
    insert(item: any, index: number): boolean {
        // checks if the provided index is within the allowed ranges
        if (index >= 0 && index <= this.size) {
            const node = new SinglyLinkedNode(item);

            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                let current = this.head;
                if (previous) {
                    current = previous.next;
                    node.next = current;
                    previous.next = node;
                }
            }
            this.size++;
            return true;
        }
        return false;
    }

    /**Returns `SinglyLinkedNode` at the specified index position. */
    getElementAt(index: number): SinglyLinkedNode | undefined {
        if (index >= 0 && index < this.size) {
            let current = this.head;

            for (let i = 0; i < index && current != null; i++)
            current = current.next;

            return current;
        }
    }

    /**Removes the item in the linked list at the specified index. */
    removeAt(index: number) {
        if (index >= 0 && index < this.size) {
            let current = this.head;

            if (index === 0) this.head = current?.next;
            else {
                const previous = this.getElementAt(index -1);

                if (previous) {
                    current = previous.next;
                    previous.next = current?.next;
                }
            }
            this.size--;
            return current?.getValue();
        }
    }

    /**Returns the index of the specified item in the linked list. */
    indexOf(item: any): number {
        let current = this.head;

        for (let i = 0; i < this.size; i++) {
            if (this.equalsFn(item, current?.getValue())) return i;
            current = current?.next;
        }
        return -1;
    }
}
