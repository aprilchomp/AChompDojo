
// Length

// July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.

length() {
    var runner = this.head;
    var nodes = 0;
    while(runner) {
        nodes += 1;
        runner=runner.next
    }
    return this
}