const readline = require("readline-sync");


const API_ENDPOINTS = 'https://jsonplaceholder.typicode.com/posts';
const USER_ENDPOINTS = 'https://jsonplaceholder.typicode.com/users';
const userId = 1;
const targetPostId = 1;

let isPlaying = true;
while (isPlaying) {
    printMenu();
    const userOption = getUserOption();
    switch (userOption) {
        case 1:
            getAllPostFromUser(userId);
            break;
        case 2:
            getPostContent();
            break;
        case 0:
            isPlaying = false;
            break;
        default:
            console.log('Wrong option')
    }
}

function printMenu(){
    console.log(`1. Get all posts from the user`)
    console.log(`2. Get a post content`)
    console.log(`0. Exit`)
}

function getAllPostFromUser() {
    const userId = Number(readline.question('Input your number: '));
    getAllPostFromUser(userId)
        .then(function (allPosts) {
            console.log(allPosts)
        })
}

getAllPostFromUser(userId)
    .then(function (allPosts) {
        //SyncChoronus start from here
        const targetPostContent = filterPostContent(allPosts, targetPostId);
        if (!targetPostContent) {
            console.log(`The Post with id ${targetPostId} not found!`)
        } else {
            console.log(targetPostContent);
        }
    })

function getAllPostFromUser(userId) {
    return fetch(USER_ENDPOINTS)
        .then(function (response) {
            return response.json();
        })
        .then(function (allUsers) {
            let hasUser = false;
            for (let user of allUsers) {
                if (user.id === userId) {
                    hasUser = true;
                    break;
                }
            }
            if (hasUser) {
                return fetch(API_ENDPOINTS)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (allPosts) {
                        return allPosts.filter(function (post) {
                            return post.userId === userId;
                        });
                    });
            } else {
                console.log(`User with ${userId} not found`);
                process.exit(1);
            }
        })
};

function filterPostContent(allPosts, targetPostId) {
    const targetPost = allPosts.filter(function (post) {
        return post.id === targetPostId;
    })
    return targetPost;
};
