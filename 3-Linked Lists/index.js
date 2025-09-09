class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  // Output: LinkedList { head: Node { value: 10, next: null }, tail: Node { value: 10, next: null }, length: 1 }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let pre = this.get(index - 1);
    let temp = pre.next;
    pre.next = temp.next;
    this.length--;
    return temp;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
  print() {
    let temp = this.head;
    let arr = [];
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    console.log(arr);
  }
  reversePrint() {
    let temp = this.head;
    let arr = [];
    while (temp) {
      arr.unshift(temp.value);
      temp = temp.next;
    }
    console.log(arr);
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
  getLength() {
    return this.length;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  toArray() {
    let temp = this.head;
    let arr = [];
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    return arr;
  }
  fromArray(arr) {
    this.clear();
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i]);
    }
    return this;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);

console.log(myLinkedList);
