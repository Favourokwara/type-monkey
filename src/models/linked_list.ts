import { LinkedNode, DoublyNode } from "./linked_node";

export interface List {
    size: number, head?: LinkedNode, push(element: any): void, insert(element: any, index: number): boolean, indexOf(element: any): number,
    getElementAt(index: number): LinkedNode | undefined, remove(element: any): any, removeAt(index: number): any, isEmpty(): boolean }

export interface DoublyList extends List { head?: DoublyNode, tail?: DoublyNode, getElementAt(index: number): DoublyNode | undefined }

function defaultEquals(a: any, b: any): boolean { return a === b; }

export class LinkedList implements List { 

    public size: number = 0;
    public head?: LinkedNode;
    constructor(private equalsFn: Function = defaultEquals) {}

    /**
     * Appends the specified element to the end of the linked list.
     * @param element Item to append to the end of the linked list.
     */
    push(element: any): void {
        const node = new LinkedNode(element);

        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;

            // find the end of the linked list and append item to it.
            while (current?.next != null) { current = current.next; }
            current.next = node;
        }
    }

    /**
     * Inserts the specified item into the given index in the linked list.
     * @param element Item to insert into the specified index.
     * @param index Index to which the item should be inserted.
     * @returns Boolean indicating whether or not the item was inserted.
     */
    insert(element: any, index: number): boolean {
        // checks if the index is within range
        if (index >= 0 && index < this.size) {
            const node = new LinkedNode(element);
            let current = this.head;

            if (index === 0) {
                node.next = current;
                this.head = node;
            } else {
                const prev = this.getElementAt(index - 1);
                if (prev) {
                    current = prev.next;
                    node.next = current;
                    prev.next = node;
                }
            }
            this.size++;
            return true;
        }
        return false;
    }

    /**Returns the `LinkedNode` at the specified index position. */
    getElementAt(index: number): LinkedNode | undefined {
        if (index >= 0 && index < this.size) {
            let current = this.head;
            for (let i = 0; i < index && current != null; i++) {
                current = current.next;
            }
            return current;
        }
    }

    /**
     * Removes the specified item from the linked list.
     * @param element element to remove from the linked list.
     * @returns Item that was removed from the list.
     */
    remove(element: any): any { return this.removeAt(this.indexOf(element)); }

    /**
     * Removes the item at the specified index.
     * @param index Index of the item to remove from the list.
     * @returns The value of the node in the removed position.
     */
    removeAt(index: number) {
        if (index >= 0 && index < this.size) {
            let current = this.head;

            if (index === 0) {
                this.head = current?.next;
            }else {
                const prev = this.getElementAt(index - 1);
                if (prev) {
                    current = prev?.next;
                    prev.next = current?.next;
                }
            }
            this.size--;
            return current?.getValue();
        }
    }

    /**Returns the the index of the specified element in the list. */
    indexOf(element: any): number {
        let current = this.head;

        for (let i = 0; i < this.size; i++) {
            if (this.equalsFn(element, current?.getValue())) {
                return i;
            }
            current = current?.next;
        }
        return -1;
    }

    /**Returns boolean indicating whether or not the list is empty. */
    isEmpty(): boolean { return this.size === 0; }
}