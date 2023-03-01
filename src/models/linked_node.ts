/**Interface that describes nodes required to build a signly linked list.*/
export interface SinglyNode {
  next?: SinglyNode;
  getValue(): any;
}

/**Interface that describes nodes required to build a doubly linked list.*/
export interface DoublyNode extends SinglyNode {
  next?: DoublyNode;
  prev?: DoublyNode;
}

/**Data class used to build up and store data in a linked list data structure.*/
export class SinglyLinkedNode implements SinglyNode {
  constructor(private _data: any, public next?: SinglyLinkedNode) {}
  /**Returns the data that is stored within the linked list node.*/
  getValue() {
    return this._data;
  }
}

/**Data class used to build up and store data within a doubly linked list.*/
export class DoublyLinkedNode extends SinglyLinkedNode implements DoublyNode {
  constructor(
    _data: any,
    public next?: DoublyLinkedNode,
    public prev?: DoublyLinkedNode,
  ) {
    super(_data, next);
  }
}
