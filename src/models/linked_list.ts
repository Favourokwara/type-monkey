import { LinkedNode, DoublyNode } from "./linked_node";

export interface List { size: number, head?: LinkedNode, push(element: any): void, insert(element: any, index: number): void,
    getElementAt(index: number): LinkedNode | undefined, remove(element: any): any, removeAt(index: number): any, isEmpty(): boolean }

export interface DoublyList extends List { head?: DoublyNode, tail?: DoublyNode, getElementAt(index: number): DoublyNode | undefined }
