
var MinStack = function() {
    this.stack = []
    this.min = []
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    if (this.min.length) {
        this.min.push(val);
        let p = this.min.length;
        while (p > -1) {
            if (this.min[p] > this.min[p - 1]) {
                const temp = this.min[p];
                this.min[p] = this.min[p - 1];
                this.min[p - 1] = temp;
            } else {
                p--
            }
        }
    } else {
        this.min.push(val);
    }
};

MinStack.prototype.pop = function() {
    const poped = this.stack.pop();
    
    this.min.splice(this.min.indexOf(poped), 1);
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1]
};


const minStack = new MinStack();
minStack.push(1)
minStack.push(10)
minStack.push(-5)
minStack.push(39)
minStack.push(-6)
minStack.push(-7)
minStack.pop()
minStack.pop()
console.log('stack: ', minStack.stack, 'min: ', minStack.getMin());