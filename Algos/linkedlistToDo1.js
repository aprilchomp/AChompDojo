// SList: Second to Last Value

// Create a standalone function that, given a pointer to the first node in a singly linked list, will return the second-to-last value in that list. What will you return if the list is not long enough?

// SList: Delete Given Node: // Create ListNode method removeSelf() to disconnect (remove) itself from linked lists that include it. Note: the node might be the first in a list (it won’t be the last), and you do NOT have a pointer to the previous node. Also, don’t lose any subsequent nodes pointed to by .next.

// SList: Copy: // Given a pointer to a singly linked list, return a copy of that list. Do not return the same list, but instead make a copy of each node in the list and connect them in the same order as the original.

// SList: Filter: // Given a headNode, a lowVal and a highVal, remove from the list any nodes that have values less than lowVal or higher than highVal. Return the new list.

// Example:
function ListNode(value) {
    this.val = value;
    this.next = null;
    this.front = function() { ... }
    // more functions here
}
removeBack() {
    var runner = this.head;
    while(runner.next.next) {
        runner = runner.next
    }
    runner.next = null;
    return this
}
display() {
    var runner = this.head;
    var count = 0;
    while(runner) {
        console.log(`You are on node ${count}, the value contained is ${runner.value}`);
        count += 1;
        runner = runner.next;
    }
    return this
}
maxMinAvg() {
    var sum = 0;
    var max = this.head.value;
    var min = this.head.value;
    var runner = this.head;
    while(runner) {
        sum += runner.value;
        if(runner.value > max) {
            max = runner.value;
        }
        else if(runner.value < min) {
            min = runner.value;
        }
        runner = runner.next
    }
    return `max: ${max}, min: ${min}, avg: ${sum/this.length()}`
}
 // Solution: 