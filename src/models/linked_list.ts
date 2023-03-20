import type { DoublyLinkedList, SinglyLinkedList } from "src/interfaces/linked_list";
import { DoublyNode, SinglyNode } from "./linked_node";

/**Default comparison function for comparing the linked list node item value.*/
function defaultEquals(a: any, b: any) { return a === b; }

export class SinglyList implements SinglyLinkedList {
    // declare initial state properties
    public head?: SinglyNode;
    protected ln: number = 0;

    constructor(private equalsFn: Function = defaultEquals){}

    size(): number { return this.ln; }

    push(item: any): void {
        // create new node to store the value item
        const node = new SinglyNode(item);

        // checks whether the linked list is empty
        if (this.head == null) {
            this.head = node;
        } else {
            // append node to the end of the chain
            let current = this.head;
            while (current.next != null) current = current.next;
            current.next = node;
        }
        this.ln++;
    }

    indexOf(item: any): number {
        let currentNode = this.head;

        for (let i = 0; i < this.size(); i++) {
            if (this.equalsFn(item, currentNode?.value))
            return i;
            currentNode = currentNode?.next;
        }
        return -1;
    }

    getElementAt(index: number): SinglyNode | undefined {
        if (index > 0 && index < this.size()) {
            let current = this.head;

            for (let i = 0; i < index; i++)
            { current = current?.next; }

            return current;
        }
    }

    insert(item: any, index: number): boolean {
        // checks whether index is valid position
        if (index >= 0 && index <= this.size()) {
            const node = new SinglyNode(item);

            // check if index is the first index
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                let previous = this.getElementAt(index - 1);
                let current = previous?.next;
                // checks if previous movement is possible
                if (previous) {
                    node.next = current;
                    previous.next = node;
                }
            }
            this.ln++;
            return true;
        }
        return false;
    }

    removeAt(index: number) {
        // checks whether index is valid posiiton
        if (index >= 0 && index < this.size()) {
            let current = this.head;
            if (index === 0) {
                this.head = current?.next;
            } else {
                const previous = this.getElementAt(index - 1);

                if (previous) {
                    current = previous.next;
                    previous.next = current?.next;
                }
            }
            this.ln++;
            return current?.value;
        }
    }

    remove(item: any): void { 
        this.removeAt(this.indexOf(item));
    }

    isEmpty(): boolean {
        return this.head == null;
    }
}

export class DoublyList extends SinglyList implements DoublyLinkedList {
    public declare head?: DoublyNode;
    public declare tail?: DoublyNode;

    getElementAt(index: number): DoublyNode | undefined {
        if (index > 0 && index < this.size()) {
            let current = this.head;

            for (let i = 0; i < index; i++) {
                current = current?.next;
            }

            return current;
        }
    }

    insert(item: any, index: number): boolean {
        const node = new DoublyNode(item);
        if (index >= 0 && index <= this.size()) {
            let current = this.head;
            if(index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    this.head.prev = node;
                    node.next = current;
                    this.head = node;
                }
            } else if (index === this.size()) {
                current = this.tail;
                if (current) {
                    current.next = node;
                    node.prev = current;
                    this.tail = node;
                }
            } else {
                let previous = this.getElementAt(index - 1);
                
                let current = previous?.next;
                // checks if previous movement is possible
                node.next = current;
                node.prev = previous;

                if (current && previous)
                current.prev = previous.next = node;
            }
            this.ln++;
            return true;
        }
        return false;
    }

    push(item: any): void { this.insert(item, this.size()); }

    removeAt(index: number) {
        if (index >= 0 && index < this.size()) {
            let current = this.head;

            if (index === 0) {
                this.head = current?.next;
                if (this.size() === 1) {
                    this.tail = undefined;
                } else {
                    this.head = undefined;
                }
            } else if (index === this.size() - 1) {
                current = this.tail;
                this.tail = current?.prev;

                if (this.tail) { this.tail.next = undefined; }
            }
            else {
                const previous = this.getElementAt(index - 1);
                current = previous?.next;
                if  (previous != null && current?.next != null) {
                    previous.next = current?.next;
                    current.next.prev = previous;
                }
            }
            this.ln--;
            return current?.value;
        }
    }
}