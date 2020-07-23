//make a function that removes duplicates from an unsorted linked list.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // insert first
  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // insert last
  insertLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // remove duplicates
  removeDupes() {
    //edge case only one or no elements in list
    let prev = this.head;
    let current = this.head.next;
    let node = {};
    while (current !== null) {
      if (!node[current.data]) {
        node[current.data] = true;
      } else {
        prev.next = current.next;
        this.size--;
      }
      prev = current;
      current = current.next;
    }
  }
  // Print data
  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();

let testData = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8];
testData.map((i) => list.insertHead(i));
console.log("Before removing dupes");
list.print();
list.removeDupes();
console.log("After removing dupes");
list.print();

console.log(list.head);
