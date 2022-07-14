function scrollToPosition(hID){
    document.getElementById(hID).scrollIntoView({
        behavior: 'smooth'
      });
}

window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    var navbar = this.document.getElementById("navbar");

    if(scroll>390){
        navbar.style.visibility="visible";
        navbar.style.position="fixed";
    }
    else{
        navbar.style.visibility="hidden";
    }
})