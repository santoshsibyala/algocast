// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(value) {
        this.data = value;
        this.leftChild = null;
        this.righChild = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
    }

    //iterative

    insert(newValue) {
        if(!this.root) {
            this.root = newValue;
            return;
        }

        let currentNode = this.root;
        let parent;

        while(currentNode) {
            parent = currentNode; 
            if(currentNode.value < newValue) {
                currentNode = currentNode.righChild;
            } else {
                currentNode = currentNode.leftChild;
            }
        }

        if(parent.value < newValue) {
            parent.righChild = new Node(newValue);
        } else {
            parent.leftChild = new Node(newValue);
        }
    }

    //recursive
    insert1(newValue) {
        if(!this.root) {
            this.root = new Node(newValue);
            return ;
        }

        this.recursiveInsert(this.root, newValue);
    }

    recursiveInsert(currentNode, newValue) {
        if(currentNode === null) {
            currentNode = new Node(newValue)
        } else if(currentNode.value < newValue) {
            currentNode.righChild = this.recursiveInsert(currentNode.righChild, newValue);
        } else {
            currentNode.leftChild = this.recursiveInsert(currentNode.leftChild, newValue);
        }
        return currentNode;
    }

    preOrderTraversal(currentNode) {
        if(currentNode!== null) {
            console.log(currentNode.value);
            this.preOrderTraversal(currentNode.leftChild);
            this.preOrderTraversal(currentNode.righChild);
        }
    }

    inOrderTraversal(currentNode) {
        if(currentNode !== null) {
            this.inOrderTraversal(currentNode.leftChild);
            console.log(currentNode.value);
            this.inOrderTraversal(currentNode.righChild);
        }
    }

    postOrderTraversal(currentNode) {
        if(currentNode !== null) {
            this.postOrderTraversal(currentNode.leftChild);
            this.postOrderTraversal(currentNode.righChild);
            console.log(currentNode.value);
        }
    }


}



module.exports = Node;
