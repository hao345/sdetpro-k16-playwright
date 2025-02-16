const toDo1EndPoint = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(toDo1EndPoint)
    .then(getResponse)
    .then(validateResponses);

//Detail Implementaion:
function getResponse(rawResponse) {
    return rawResponse.json();
}

function validateResponses(todo) {
    console.log(todo)
    if (todo.completed) {
        console.log('Task Completed');
    } else {
        console.log('Task Is In Progress')
    }
}