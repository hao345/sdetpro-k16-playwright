// TestPostModel.js
const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

// Excution
lab7();

// Function Declaration
async function lab7() {
    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandler object
    const requestHandler = new RequestHandler();

    const allPost = await requestHandler.printAllPosts(userId);
    console.log(allPost);
    const post = await requestHandler.printTargetPost(userId, postId);
    console.log(post);
}