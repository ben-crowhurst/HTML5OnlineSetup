window.onload = function () {
    setInterval(function () {        
        var element = document.getElementById("status");

        element.innerHTML = 'checking...';

        if (navigator.onLine) {
            element.className = '';
            element.innerHTML = 'online';      
            element.style.background = 'green';
        } else {
            element.className = 'blink';
            element.innerHTML = 'offline';          
            element.style.background = 'red';
        }
    }, 1000);
}