class PublishSubscribe {
    key = 0;
    subscribers = {};

    /**
     * @param {String} topic
     * @param {Function} subscriber
     * @return {Number} id
     */
    subscribe<T>(topic: string, subscriber: T): number {
        if (topic in this.subscribers) {
            this.subscribers[topic][this.key] = subscriber;
        } else {
            this.subscribers[topic] = {};
            this.subscribers[topic][this.key] = subscriber;
        }

        return this.key++;
    }

    /**
     * @param {String} topic
     * @param {*=} data
     */
    publish(topic: string, data?: any) {
        Object.keys(this.subscribers[topic] || {}).map(sub => {
            try {
                this.subscribers[topic][sub](data, Array.prototype.slice.call(arguments));
            } catch (e) {
                console.log(
                    Error(`Issue with subscriber ${topic}. ${e && e.message}`)
                );
            }
        });
    }

    /**
     * @param {String} topic
     * @param {Number|null} key
     */
    unsubscribe(topic: string, key: number | null) {
        if (this.subscribers[topic]) {
            if (key) {
                delete this.subscribers[topic][key];
            } else {
                delete this.subscribers[topic];
            }
        }
    }

    unsubscribeAll() {
        this.subscribers = {};
        this.key = 0;
    }
}

export default new PublishSubscribe();
