// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node.next) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let current = this.head.next;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
        }

        let lastNode = this.getLast();

        lastNode.next = new Node(data);
    }

    getAt(index) {
        // let currentNode = this.head;
        // let counter = 0;

        // while(currentNode) {
        //     if(counter == index) {
        //         return currentNode;
        //     } 
        //     counter++;
        //     currentNode = currentNode.next;
        // }

        // return null;
        let counter = 0;
        let node = this.head;
        // If nothing is set exit
        if (!node) {
            return null;
        }
        // If index is out of range
        if (this.size() < index) {
            return null;
        }
        // Else 
        while (node) {
            node = node.next;
            if (counter === index) {
                return node;
            }
            counter++;
        }
    }

    removeAt(index) {
        // if(!this.head) {
        //     return;
        // }
        // let previous = this.head;
        // let current = this.head.next;
        // let counter = 0;

        // if(!current) {
        //     this.head = null;
        //     return;
        // }

        // while(current) {
        //     if(counter === index) {
        //         previous.next = current.next;
        //         return;
        //     } 
        //     previous = previous.next;
        //     current = current.next;
        //     counter++;
        // }
        // return;

        if(!this.head) {
            return ;
        }

        if(index === 0) {
            this.head = this.head.next;
        }

        const previous = this.getAt(index -1);

        if(!previous || !previous.next) {
            return ;
        }

        previous.next = previous.next.next;
    }

    insertAt(data, index) {

        if(!this.head) {
            this.head = new Node(data);
            return;
        }

        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const previous = this.getAt(index -1) || this.getLast();
        const node = new Node(data, previous.next);

        previous.next = node;
  
    }
}

module.exports = { Node, LinkedList };
