import { SinglyLinkedList, DoublyLinkedList } from '../interfaces/linked_lists';
import { SinglyNode, DoublyNode } from './linked_node';

/**Default comparison function for comparing the linked list node item value.*/
function defaultEquals(a: any, b: any) {
  return a === b;
}

/**Typescript class implementation the singly linked list data structure. */
export class SinglyList implements SinglyLinkedList {
  // declare initial state properties
  protected size = 0;
  public head?: SinglyNode;

  constructor(private equalsFn: Function = defaultEquals) {}

  getSize(): number {
    return this.size;
  }

  push(item: any): void {
    // create node item to be appended to the end of the list chain
    const node = new SinglyNode(item);

    if (this.head == null) {
      this.head = node;
    } else {
      // append the new node to the end of the chain link
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  indexOf(item: any) {
    let current = this.head;
    for (let i = 0; i < this.getSize(); i++) {
      if (this.equalsFn(item, current?.value)) return i;
      current = current?.next;
    }
    return -1;
  }

  getElementAt(index: number): SinglyNode | undefined {
    // checks whether the provided index position is valid
    if (index >= 0 && index < this.getSize()) {
      let current = this.head;

      for (let i = 0; i < index && current != null; i++) current = current.next;
      return current;
    }
  }

  insert(item: any, index: number): boolean {
    // check if the provided index is valid or not
    if (index >= 0 && index <= this.getSize()) {
      const node = new SinglyNode(item);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let previous = this.getElementAt(index - 1);
        let current = previous?.next;
        if (previous) {
          node.next = current;
          previous.next = node;
        }
      }
      this.size++;
      return true;
    }
    return false;
  }

  removeAt(index: number) {
    // checks whether the specified index position is valid or not
    if (index >= 0 && index < this.getSize()) {
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
      this.size--;
      return current?.value;
    }
  }

  remove(item: any): void {
    this.removeAt(this.indexOf(item));
  }

  isEmpty(): boolean {
    return this.head === undefined;
  }
}

export class DoublyList extends SinglyList implements DoublyLinkedList {
  public declare head?: DoublyNode;
  public declare tail?: DoublyNode;
  constructor(equalsFn: Function = defaultEquals) {
    super(equalsFn);
  }

  push(item: any): void {
    this.insert(item, this.size);
  }

  insert(item: any, index: number): boolean {
    // Create new instance of the doubly linked node
    const node = new DoublyNode(item);
    let current = this.head;
    // Checks whether the index is within the bounds
    if (index >= 0 && index <= this.size) {
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
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
          this.head = undefined;
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
      return current?.value;
    }
  }
}
