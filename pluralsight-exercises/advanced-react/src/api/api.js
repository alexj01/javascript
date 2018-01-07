class Api {
    constructor(rawData) {
        this.data = {
            articles: this.mapDataToObject(rawData.articles),
            authors: this.mapDataToObject(rawData.authors),
            searchTerm: '',
            timestamp: new Date()
        };

        this.subscriptions = {};

        this.lastSubscriptionId = 0;

        setTimeout(() => {
            const fakeArticle = {
                ...rawData.articles[0],
                id: 'fakeId'
            };

            //TODO replace this using immutable.js module
            this.data = {
                ...this.data,
                articles: {
                    ...this.data.articles,
                    [fakeArticle.id]: fakeArticle
                }
            };

            this.notifySubscribers();
        }, 1000);
    }


    mapDataToObject(array) {
        return array.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        },{});
    }

    getState = () => {
        return this.data;
    };

    lookupAuthor = (authorId) => {
        return this.data.authors[authorId];
    };

    subscribe = (cb) => {
        this.lastSubscriptionId++;
        this.subscriptions[this.lastSubscriptionId] = cb;
        return this.lastSubscriptionId;
    };

    unsubscribe = (subscriptionId) => {
        delete this.subscriptions[subscriptionId];
    };

    mergeWithState = (stateChange) => {
        this.data = {
            ...this.data,
            ...stateChange
        };

        this.notifySubscribers();
    };

    notifySubscribers = () => {
        Object.values(this.subscriptions).forEach((cb) => cb());
    };

    setSearchTerm = (searchTerm) => {
        this.mergeWithState({searchTerm});
    };

    startClock = () => {
        setInterval(()=>{
            this.mergeWithState({
                timestamp: new Date()
            });
        },1000);
    }
}

export default Api;