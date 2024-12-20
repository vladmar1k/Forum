//dark theme
const themeButton = document.querySelector(".thema");
const container = document.querySelector("body");
themeButton.addEventListener("click", themeContainer)
function themeContainer(){
    container.classList.toggle("dark-theme");
}


// burger_menu
const iconMenu = document.querySelector(".menu-icon");
const list = document.querySelector(".menu");
const nav = document.querySelector("nav");
const header = document.querySelector("header"); 
const btn = document.querySelector("button"); 
btn.addEventListener("click", addMenu);
header.style.alignItems= "center";
function addMenu(){
    if(list.classList.contains("active")){
        list.classList.remove("active");
        iconMenu.src = "./img/menu.jpg";
        nav.style.height = "auto";
        header.style.alignItems= "center";
        btn.classList.remove("rotate");
    } else {
        list.classList.add("active");
        iconMenu.src = "./img/close.jpg";
        nav.style.height ="100vh";
        header.style.alignItems = "flex-start";
        btn.classList.add("rotate");
    }

}


// arrow up
const upButton = document.querySelector(".up-button");
window.addEventListener("scroll", button)
function button(){
    if(window.pageXOffset > 200){
        upButton.classList.add("shown")
    }else{
        upButton.classList.remove("shown")
    }
}
upButton.addEventListener("click", update)
function update(){
    window.scrollTo(0,0)
} 


// comment
const commentForm = document.querySelector('.comment-form');
const commentList = document.querySelector('.comment-list');
const submitButton = document.querySelector('.submit-button');
commentForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const commentField = evt.target.commentField;
  const commentText = commentField.value.trim();
  if (commentText === '') {
    alert('Будь ласка, введіть текст коментаря!');
    return;
  }
  const newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentText;
  commentList.append(newComment);
  commentField.value = '';
});

// heart

const heart = document.querySelector('.heart');
const likesNumber = heart.querySelector('.likes-number');
heart.addEventListener('click', function () {
  heart.classList.toggle('added');
  const currentLikes = parseInt(likesNumber.textContent, 10);
  if (heart.classList.contains('added')) {
    likesNumber.textContent = currentLikes + 1;
  } else {
    likesNumber.textContent = currentLikes - 0;
  }
});

// cookie

const cookiesAgreement = document.querySelector('.cookies-agreement');
const cookiesButton = document.querySelector('.cookies-button');
let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);
cookiesButton.addEventListener('click', () => {
  console.log('BTN')
  cookiesAgreement.classList.add('cookies-agreement-closed');
  overlay.remove();
});
