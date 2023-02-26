// interface describing properties of a single linked list item
export interface ListNode { next?: ListNode, getValue(): any };

// interface describing properties of a doubly linked list item
export interface DoublyListNode extends ListNode {
    prev?: DoublyListNode, next?: DoublyListNode };

export class LinkedNode implements ListNode {
    constructor(private value: any, public next?: LinkedNode){}
    getValue(): any { return this.value; }
};

export class DoublyNode extends LinkedNode implements DoublyListNode { 
    constructor(value: any, public prev?: DoublyNode, public next?: DoublyNode) { super(value, next) }
}