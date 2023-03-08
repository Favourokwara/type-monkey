import {
  SinglyLinkedNode,
  DoublyLinkedNode,
  DoublyNode,
  SinglyNode,
} from './linked_node';

/**Interface that describes the behaviour of the linked list data structure. */
export interface SinglyList {
  head?: SinglyNode;
  getSize(): number;
  push(item: any): void;
  insert(item: any, index: number): boolean;
  remove(item: any): void;
  removeAt(index: number): any;
  indexOf(item: any): number;
  isEmpty(): boolean;
  getElementAt(index: number): SinglyLinkedNode | undefined;
}

/**Interface that describes the behaviour of the doubly list data structure. */
export interface DoublyList extends SinglyList {
  head: DoublyNode;
  getElementAt(index: number): DoublyLinkedNode | undefined;
}

function defaultEquals(a: any, b: any): boolean {
  return a === b;
}

export class SinglyLinkedList implements SinglyList {
  // Define the linked list's state properties
  protected size: number = 0;
  public head?: SinglyLinkedNode = undefined;
  // Get function to compare list item values.
  constructor(private equalsFn: Function = defaultEquals) {}

  /**Returns the number of items in the singly linked list data structure. */
  getSize(): number {
    return this.size;
  }

  /**Remove the item in the list that mathces the provided list item value.*/
  remove(item: any) {
    return this.removeAt(this.indexOf(item));
  }

  /**Returns a boolean indicating whether or not the linked list is empty. */
  isEmpty(): boolean {
    return this.head === undefined;
  }

  /**Appends the specified item to the last node of the of the linked list.*/
  push(item: any): void {
    // Create new instance of the singly linked node
    const node = new SinglyLinkedNode(item);
    let current = this.head;
    // Check whether the linked list is empty or not
    if (current == null) {
      this.head = node;
    } else {
      // Assign the last items's pointer to the newly created singly node
      while (current?.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  /**Inserts the provided item to the end of the specified index position. */
  insert(item: any, index: number): boolean {
    // Check whether or not the specified index position is within range
    if (index >= 0 && index <= this.size) {
      // Create a new instance of the singly linked node
      const node = new SinglyLinkedNode(item);

      if (index === 0) {
        (node.next = this.head), (this.head = node);
      } else {
        // Get the item before the given index and change its pointers
        // to point towards the newly created node element.
        let prev = this.getElementAt(index - 1),
          curr = prev?.next;
        if (prev) {
          (node.next = curr), (prev.next = node);
        }
      }
    }
    return false;
  }

  /**Returns the singly linked node item at the specified index position. */
  getElementAt(index: number): SinglyLinkedNode | undefined {
    // Check whether or not the specified index position is within range
    if (index >= 0 && index < this.size) {
      let current = this.head;

      for (let i = 0; i < index && current != null; i++) current = current.next;
      return current;
    }
  }

  /**Removes the item in the linked list at the specified index position. */
  removeAt(index: number) {
    // Check whether or not the specified index position is within range
    if (index >= 0 && index < this.size) {
      let current = this.head;
      // Check whether we're removing the first item in the linked list
      if (index === 0) {
        this.head = current?.next;
      } else {
        const prev = this.getElementAt(index - 1);
        if (prev) {
          (current = prev.next), (prev.next = current?.next);
        }
      }
      this.size--;
      return current?.getValue();
    }
  }

  /**Returns the index if the specified item value inside the linked list. */
  indexOf(item: any): number {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (this.equalsFn(item, current?.getValue())) {
        return i;
      }
      current = current?.next;
    }
    return -1;
  }
}

export class DoublyLinkedList
  extends SinglyLinkedList
  implements DoublyLinkedList
{
  // Define the linked list's state properties
  public head?: DoublyLinkedNode = undefined;
  public tail?: DoublyLinkedNode = undefined;

  constructor(equalsFn: Function = defaultEquals) {
    super(equalsFn);
  }

  push(item: any): void {
    this.insert(item, this.size);
  }

  insert(item: any, index: number): boolean {
    // Create new instance of the doubly linked node
    const node = new DoublyLinkedNode(item);
    let current = this.head;
    // Checks whether the index is within the bounds
    if (index >= 0 && index <= this.size) {
      if (index === 0) {
        if (this.head == null) {
          (this.head = node), (this.tail = node);
        } else {
          if (this.head) {
            this.head.prev = node;
            node.next = current;
            this.head = node;
          }
        }
      } else if (index === this.size) {
        current = this.tail;
        if (current) {
          current.next = node;
          node.prev = current;
          this.tail = node;
        }
      }
      this.size++;
      return true;
    }
    return false;
  }

  removeAt(index: number) {
    // Checks whether the index is within the bounds
    if (index >= 0 && index < this.size) {
      let current = this.head;
      if (index === 0) {
        this.head = current?.next;
        if (this.size === 1) {
          this.tail = undefined;
        } else {
          if (this.head) this.head = undefined;
        }
      } else if (index === this.size - 1) {
        current = this.tail;
        this.tail = current?.prev;
        if (this.tail) this.tail.next = undefined;
      } else {
        const prev = this.getElementAt(index - 1);
        current = prev?.next;
        if (prev != null && current?.next != null) {
          prev.next = current?.next;
          current.next.prev = prev;
        }
      }
      this.size--;
      return current?.getValue();
    }
  }
}
