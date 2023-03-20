/**Abstract class that describes a single linked list node.*/
export interface ListNode {
    /**The link that connects a node to its next node item.*/
    next?: ListNode;

    /**The link that connects a node to the previous node. */
    prev?: ListNode;

    /**The value that's stored within the linked list node.*/
    value: any;
}

/**Abstract class that describes a single linked list node.*/
export interface SinglyLinkedNode extends ListNode
{ next?: SinglyLinkedNode; }

/**Abstract class that describes a single linked list node.*/
export interface DoublyLinkedNode extends SinglyLinkedNode
{ next?: DoublyLinkedNode; prev?: DoublyLinkedNode; }