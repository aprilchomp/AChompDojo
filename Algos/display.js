
// Display

// Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

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