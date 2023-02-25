// interface describing properties of a single linked list item
export interface ListNode { next?: ListNode, getValue(): any };

// interface describing properties of a doubly linked list item
export interface DoublyListNode extends ListNode {
    prev?: DoublyListNode, next?: DoublyListNode };