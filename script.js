// For Dark Theme

// let modebtn = document.querySelector('.btnmode')
// let Bg = document.querySelector('.sidebar')
// let Text = document.getElementsByClassName("nav-link")

// let ChangeMode = () => {
//     modebtn.addEventListener('click', event =>{
//         Bg.style.backgroundColor = 'black';
//     })
// }

// For Search Bar

// let searchBtn = document.querySelector('#search');
// let bar = document.querySelector('.sidebar');
// let items = document.querySelectorAll('.nav-link')
// // console.log(navNames);
//     searchBtn.addEventListener('click', (e) =>{
//         e.preventDefault();
//         bar.style.width = '80px';
//         for(i=0;i<=items.length; i++)
//         {
//             console.log(i);
//             // items.style.display = "none"
//         }

//     });

document.querySelector('#search').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Change the width of the sidebar
    document.querySelector('.sidebar').style.width = '80px';

    // Make the nav-link elements invisible
    let navLinks = document.querySelectorAll('.nav-link');
    let logo = document.querySelector('.logo');
    let logoIcon = document.querySelector('.logoicon');
    let searchbox = document.querySelector(".searchmain");
    
    navLinks.forEach(function(navLink) {
        
        navLink.style.display = 'none';
        logo.style.display = 'none';
        logoIcon.style.display = 'flex';
        searchbox.style.right = '340px';
        searchbox.style.transition = 'all 0.3s ease-in';
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
    let searchbox = document.querySelector(".searchmain");

    
    navLinks.forEach(function(navLink) {
        
        navLink.style.display = 'inline-block';
        logo.style.display = 'flex';
        logoIcon.style.display = 'none';
        searchbox.style.right = '840px';
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
        notiBox.style.left = '235px';
        notiBox.style.transition = 'all 0.3s ease-in';
        
    });
});

// Make toggle button with Search icon
let NotiIcon = document.querySelector("#notiicon");

NotiIcon.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Change the width of the sidebar
    document.querySelector('.sidebar').style.width = '245px';
    

    // Make the nav-link elements visible
    let navLinks = document.querySelectorAll('.nav-link');
    let logo = document.querySelector('.logo');
    let logoIcon = document.querySelector('.logoicon');
    
    navLinks.forEach(function(navLink) {
        
        navLink.style.display = 'inline-block';
        logo.style.display = 'flex';
        logoIcon.style.display = 'none';
        NotiBox.style.right = '0';    
    });
});

//Create Pop Up


let createBtn = document.querySelector('#cr');

createBtn.addEventListener('click', function(ev){
    ev.preventDefault(); // Prevent the default action of the link

    document.querySelector('.createmain').style.display = 'flex';
});


// Select all elements with the class "fav-icon"
const favIcons = document.querySelectorAll('.fav-icon');

// Loop through each element and add a click event listener
favIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Toggle between the two icons on each click
    if (icon.src.includes("bookmark-line.svg")) {
      icon.src = "Assets/Icons/bookmark-fill-yellow.svg";
    } else {
      icon.src = "Assets/Icons/bookmark-line.svg";
    }
  });
});

// Select all elements with the class "like-icon"
const likeIcons = document.querySelectorAll('.like-icon');

// Loop through each element and add a click event listener
likeIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Toggle between the two icons on each click
    if (icon.src.includes("heart-line.svg")) {
      icon.src = "Assets/Icons/heart-fill-red.svg";
    } else {
      icon.src = "Assets/Icons/heart-line.svg";
    }
  });
});

// Select all elements with the class "flwbtn"
const FlwIcons = document.querySelectorAll('#followbtn');

// Loop through each element and add a click event listener
FlwIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    if(icon.innerText == "Follow"){
      icon.innerText = "Following"
      icon.style.color = 'rgb(105, 105, 105)'
    }
    else{
      icon.innerText = "Follow"
      icon.style.color = 'rgb(23, 181, 248)'
    }
  });
});

// Reels Btn

// Select all elements with the class "flwbtn"
// const FlwBtn = document.querySelectorAll('#flwbtn');

// Loop through each element and add a click event listener
// FlwBtn.forEach(icon => {
//   icon.addEventListener('click', (e) => {
//     e.preventDefault();
//     if(icon.innerText == "Follow"){
//       icon.innerText = "Following"
//       icon.style.color = 'rgb(105, 105, 105)'
//     }
//     else{
//       icon.innerText = "Follow"
//       icon.style.color = 'rgb(23, 181, 248)'
//     }
//   });
// });

//History Data

let hsData = document.querySelector("#hsdata");
let hsMSG = document.querySelector("#historymsg");
let input = document.querySelector("#searchbaricon");
let shVal = document.querySelector("#searchvalue").value;

input.addEventListener('click' , ()=>{
    console.log('jsdsfd')
    hsMSG.style.display = "none";
    hsData.innerText = `jj${shVal}`;
})
