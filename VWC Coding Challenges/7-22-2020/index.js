//make a function that takes an integer and that will be the nth place of the linked list. Return the values of the linked list from the nth place and on.

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
  // set index as nth place in list
  setIndexAsHead(index) {
    // Index out of range?
    if (index > 0 && index > this.size) {
      console.log("Index out of range");
      return;
    }
    if (index === 0) {
      return;
    }
    let current = this.head;
    let count = 0;
    while (count < index) {
      count++;
      current = current.next;
    }
    this.head = current;
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

let testData = [1, 2, 3, 4, 5, 6, 7, 8];
testData.map((i) => list.insertHead(i));
console.log("Before setting index");
list.print();
console.log("After setting index");
list.setIndexAsHead(2); // set index 2 as nth
list.print();
console.log("Test if index is out of range:");
list.setIndexAsHead(20);
