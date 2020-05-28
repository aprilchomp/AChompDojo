// Contains

// Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.

contains(value) {
    var runner = this.head;
    while(runner) {
        if(runner.value == value) {
            return true
        }
        runner = runner.next
    }
    return this
}