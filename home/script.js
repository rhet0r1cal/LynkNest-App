// Check If Logged In
document.addEventListener('DOMContentLoaded', function(){
    if(!localStorage.getItem('loggedIn?')){
        this.location.href = '/';
    }
})