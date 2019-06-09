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
// Add sticky on scroll
window.onscroll = function() {myFunctionNav()};

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function myFunctionNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Add active on click
var nav = document.querySelector('.navbar');
var navItem = nav.querySelectorAll('.nav');

for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function() {
    var current = document.querySelectorAll('.active');
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';
    var id = this.id;
    document.location = "index.html" + id;
  });
}

var fnav = document.querySelectorAll('.footerNav');

for (var i = 0; i < fnav.length; i++) {
  fnav[i].addEventListener('click', function() {
    var id = this.id;
    document.location = "index.html" + id;
  });
}


////////////////////// Certificate
//////////////////////////////////////////////////
document.querySelector('.btnCertificate').addEventListener('click', function() {
  window.open('Certificate.pdf');
})


////////////////////// Resume
//////////////////////////////////////////////////
document.querySelector('.btnResume').addEventListener('click', function() {
    window.open('Resume.pdf');
})


