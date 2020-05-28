// Back/Remove/Add

// SList: Back: // Create a function that accepts a ListNode pointer and returns the last value in the list.

// SList: Remove Back: // Create a standalone function that removes the last ListNode in the list and returns the new list.

// SList: Add Back: // Create a function that creates a ListNode with given value and inserts it at end of a linked list.

back() {
    var runner = this.head;
    while(runner.next) {
        runner = runner.next
    }
    return runner.value
}
removeBack() {
    var runner = this.head;
    while(runner.next.next) {
        runner = runner.next
    }
    runner.next = null;
    return this
}
addBack(value) {
    var runner = this.head;
    while(runner.next) {
        runner = runner.next
    }
    runner.next = new Node(value);
    return this
}