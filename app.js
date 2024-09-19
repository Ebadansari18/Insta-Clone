document.querySelector('#search').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Change the width of the sidebar
    document.querySelector('.sidebar').style.width = '80px';

    // Make the nav-link elements invisible
    let navLinks = document.querySelectorAll('.nav-link');
    let logo = document.querySelector('.logo');
    let logoIcon = document.querySelector('.logoicon');
    let searchbox2 = document.querySelector(".searchmainex");
    
    navLinks.forEach(function(navLink) {
        
        navLink.style.display = 'none';
        logo.style.display = 'none';
        logoIcon.style.display = 'flex';
        searchbox2.style.right = '920px';
        searchbox2.style.transition = 'all 0.3s ease-in';
    });
});

// Make toggle button with Search icon
let searchIcon = document.querySelector("#searchicon");

searchIcon.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Change the width of the sidebar
    document.querySelector('.sidebar').style.width = '245px';
    

    // Make the nav-link elements visible
    let navLinks = document.querySelectorAll('.nav-link');
    let logo = document.querySelector('.logo');
    let logoIcon = document.querySelector('.logoicon');
    let searchbox2 = document.querySelector(".searchmainex");

    
    navLinks.forEach(function(navLink) {
        
        navLink.style.display = 'inline-block';
        logo.style.display = 'flex';
        logoIcon.style.display = 'none';
        searchbox2.style.right = '1240px';
    });
});


//Notification Bar

document.querySelector('#noti').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Change the width of the sidebar
    document.querySelector('.sidebar').style.width = '80px';

    // Make the nav-link elements invisible
    let navLinks = document.querySelectorAll('.nav-link');
    let logo = document.querySelector('.logo');
    let logoIcon = document.querySelector('.logoicon');
    let notiBox = document.querySelector("#notimain");
    
    navLinks.forEach(function(navLink) {
        
        navLink.style.display = 'none';
        logo.style.display = 'none';
        logoIcon.style.display = 'flex';
        notiBox.style.left = '130px';
        notiBox.style.transition = 'all 0.3s ease-in';
    });
});
