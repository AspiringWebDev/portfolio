////////////////////// Header
//////////////////////////////////////////////////
function header() {
  var div = document.createElement('div');
  div.className = 'header';   
    for (var i=0; i<50; i++) {
        var divPic = document.createElement('div');
        divPic.className = 'header-image';
        div.appendChild(divPic);
  }
  var divHeading = document.createElement('div');
  divHeading.className = 'heading';
  divHeading.innerHTML = '<h1>Amelie Schürer</h1>';
  div.appendChild(divHeading);
  document.getElementsByTagName('header')[0].appendChild(div);
};
header();

////////////////////// Navbar
//////////////////////////////////////////////////
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunctionNav()};

// Get the navbar
var navbar = document.querySelector('.navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunctionNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Add active list on click
var nav = document.querySelector('.navbar');
var navItem = nav.querySelectorAll('.nav');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function() {
    var current = document.querySelectorAll('.active');

    // If there's no active class
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(' active', '');
    }

    // Add the active class to the current/clicked button and scroll down to the active section
    this.className += ' active';
    var id = this.id;
    document.location = "index.html" + id;
  });
}

var fnav = document.querySelector('.footerNav');
var footerNav = fnav.querySelectorAll('.fnav');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < footerNav.length; i++) {
  footerNav[i].addEventListener('click', function() {
    var id = this.id;
    document.location = "index.html" + id;
  });
}




////////////////////// Resume
//////////////////////////////////////////////////
document.querySelector('.btnResume').addEventListener('click', function() {
    window.open('Resume.pdf');
})

////////////////////// Submit Contact Form
//////////////////////////////////////////////////
/*function myFunction() {
    document.getElementById("myForm").submit();
  }
*/


