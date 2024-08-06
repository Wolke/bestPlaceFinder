// queueManager.js

class QueueManager {
    constructor() {
        this.queue = [];
        this.processing = false;
    }

    enqueue(task) {
        this.queue.push(task);
        this.processQueue();
    }

    async processQueue() {
        if (this.processing) return;
        this.processing = true;

        while (this.queue.length > 0) {
            const task = this.queue.shift();
            await task();
            await this.delay(2000); // Wait for 2 seconds between tasks
        }

        this.processing = false;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

const queueManager = new QueueManager();
