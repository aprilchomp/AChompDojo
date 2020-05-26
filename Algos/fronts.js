// Fronts

function ListNode(value){
    this.val = value;
    this.next = null;
}

// Add Front: Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a value, create a new node, assign it to the list head, and return a pointer to the new head node.

// Remove Front: Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list, remove the head node and return the new list head node. If the list is empty, return null.

// Front: Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If the list is empty, return null.

class SLL {
    constructor() {
        this.head = null
    }
    addFront(value) {
        if(this.head == null) {
            this.head = new Node(value);
            return this
        } else {
            var restOfList = this.head;
            this.head = new Node(value);
            this.head.next = restOfList;
            return this
        }
    }
    removeFront() {
        this.head = this.head.next;
        return this
    }
    front() {
        return this.head.value
    }
}