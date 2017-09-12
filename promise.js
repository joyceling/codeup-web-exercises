"use strict";

function wait (number) {
    return new Promise ((resolve) => {
        setTimeout(() => resolve(), number);
    });
}

function getLastCommit (username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token 14933ce04b7ea39c2c76fbe408292bd7e6ffa1e3'}})
    .then( function(response) {
        return response.json();
    })
    .then( function(event) {
        return event[0].created_at
    });

}


getLastCommit("joyceling").then(response => console.log(response));

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



