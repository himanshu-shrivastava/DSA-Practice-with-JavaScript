// ## Implement Queue Using Stacks
class QueueStack {
    constructor () {
        this.stack1 = []
        this.stack2 = []
    }

    push(x) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop())
        }

        this.stack1.push(x)

        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop())
        }
    };

    pop() {
        if (this.empty()) {
            return null
        }

        return this.stack1.pop()
    };

    peek() {
        return this.empty() ? null : this.stack1.at(-1)
    };

    empty() {
        return this.stack1.length === 0
    };
}

