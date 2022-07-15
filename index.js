function scrollToPosition(hID){

    if(hID != "profile-tab" && hID != "contact-tab")
        document.getElementById("project-tab").scrollIntoView({
            behavior: 'smooth'
        });
    else
        document.getElementById("profile-tab").scrollIntoView({
            behavior: 'smooth'
        });
    switch(hID){
        case "profile-tab":
            if(document.getElementById('thecard').classList.contains('do-flip')){
                document.getElementById('thecard').classList.toggle('do-flip');
            }
            break;
        case "contact-tab":
            if(!document.getElementById('thecard').classList.contains('do-flip')){
                document.getElementById('thecard').classList.toggle('do-flip');
            }
        default:
            break;

    }
}

window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    var navbar = this.document.getElementById("navbar");
    // console.log(scroll);
    if(scroll>640){
        navbar.style.visibility="visible";
        navbar.style.position="fixed";
    }
    else{
        navbar.style.visibility="hidden";
    }
})


document.addEventListener('DOMContentLoaded', function(event) {

    // document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
    // document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';
  
    document.getElementById('contactButton').onclick = function() {
        if(!document.getElementById('thecard').classList.contains('do-flip')){
            document.getElementById('thecard').classList.toggle('do-flip');
        }
        // else{
        //     document.getElementById('thecard').classList.toggle('do-shake');
        //     setTimeout(() => (document.getElementById('thecard').classList.toggle("do-shake")),100)
        // }
    };

    document.getElementById("profileButton").onclick = function(){
        if(document.getElementById('thecard').classList.contains('do-flip')){
            document.getElementById('thecard').classList.toggle('do-flip');
        }
        // else{
        //     document.getElementById('thecard').classList.toggle('do-shake');
        //     setTimeout(() => (document.getElementById('thecard').classList.toggle("do-shake")),100)

        // }
    }
  
    // document.getElementById('flip-card-btn-turn-to-front').onclick = function() {
    // document.getElementById('flip-card').classList.toggle('do-flip');
    // };
  
  });