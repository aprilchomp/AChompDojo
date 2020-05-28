// Max/Min/Average

// SList: Max: // American Idol seems to air singers that are the best, and a few that seem like the worst! Create function max(node) to return list’s largest val.

// SList: Min: // Create min(node) to return list’s smallest val.

// SList: Average: // Create average(node) to return average val.

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