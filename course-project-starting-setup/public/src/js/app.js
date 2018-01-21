var deferredPrompt;

//This is for polyfills
if(!window.Promise) {
    window.Promise = Promise;
}

if ('serviceWorker' in navigator /*the browser*/) {
    navigator.serviceWorker
    .register('/sw.js') // {scope: '/help/'}/*override the scope*/)
    .then(function(){
        console.log('Service workers registered!');       
    })
    .catch(function(err){
        console.log(err)
    });    
}

//raise by chrome
window.addEventListener('beforeinstallprompt', function() {
    console.log('beforeinstallprompt fired!')
    event.preventDefault(); //dont show the banner
    deferredPrompt = event;
    return false;
});

var promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject({code:500, message: 'An error ocurred'}) 
    }, 3000);
});

promise.then(function(text) {
        return text;
    }).then(function(newText) {
        console.log(newText)
    }).catch(function error(errDetail) {
        console.log(errDetail)
    })

//AJAX call
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/ip')
xhr.responseType = 'json';
xhr.onload = function() {
    console.log(xhr.response)
};
xhr.onerror = function() {
    console.log('Error')
}

//fetch call a get  or post 
fetch('https://httpbin.org/ip')
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })

fetch('https://httpbin.org/post', {
    method: 'POST' ,
    headers: {
                'Contest-Type': 'application/json',
                'Accept': 'application/json'            
             },
    body: JSON.stringify({ message : 'Does this work?' })
    })
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(data) {
        console.log("post data ")
        console.log(data)
    }).catch(function(err) {
        console.log(err);
    }) 

console.log("this is executed rigth now!")

