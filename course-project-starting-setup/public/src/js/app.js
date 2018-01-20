

if ('serviceWorker' in navigator /*the browser*/) {
    navigator.serviceWorker.register('/sw.js')
    .then(function(){
        console.log('Service workers registered!');       
    });    
}
