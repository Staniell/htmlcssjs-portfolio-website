document.getElementById("Profile").onclick = function () {
    location.href = "profile.html";
};

document.getElementById("Projects").onclick = function () {
    location.href = "projects.html";
};

document.getElementById("Contact").onclick = function () {
    location.href = "contact.html";
};


$('.ads_sponsors').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false
});