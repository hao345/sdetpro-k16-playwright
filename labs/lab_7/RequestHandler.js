const Post = require('./Post')

// RequestHandler.js
class RequestHandler {
    constructor() {
        this.API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
    }

    async _getAllPosts(userId) {
        const response = await fetch(this.API_ENDPOINT);
        const data = await response.json();

        //Filter post
        return data.filter(function (post) {
            return post.userId === userId
        })
    }

    async printAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        const posts = await this._getAllPosts(userId);
        return posts;
    }

    async printTargetPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post
        const posts = await this._getAllPosts(userId);
        const post = posts.find(function (post) {
            return post.id === postId;
        })
        if (post) {
            return { [post.id]: post }
        } else {
            return {}
        }
    }
}

module.exports = RequestHandler;