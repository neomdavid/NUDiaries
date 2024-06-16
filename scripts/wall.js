import { posts } from "./data/posts.js";
import { submitPost } from "./data/submissions.js";
import { formatTime } from "./utils/formatTime.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { addEventListenerForThemes } from "./utils/addEventListenerThemes.js";


function renderWall() {
  let postsHTML = ``;
  // add messages-found to below, if js-messages-found only, it clears out the entire div aside from the number of messages found
  document.querySelector('.js-messages-found .messages-found').innerHTML = `${posts.length} Messages Found`;

  posts.slice().reverse().forEach((post) => {
    
    postsHTML += `
      <a href="comments.html?postId=${post.postId}"><div class="post-container js-post-container" data-post-id=${post.postId}>
        <div class="profile-container">
          <div class="profile-image-container">
            <img src="${post.profilePicture || 'images/bulldog.jpeg'}" alt="Profile Picture">
          </div>
          <div class="details-container">
            <p class="title">${post.title}</p>
            <p class="name">${post.author}</p>
            <p class="status">${formatTime(post)}</p>
          </div>
          <div class="topic-image-container">
            <div>
             <img src="${post.topic}">
            </div>
          </div>
        </div>
        <div class="message-container">
          <p style="background-color:${post.theme}">${post.message}</p>  
        </div>
      </div>
      </a>
    `;
  });

  document.querySelector('.js-posts-list-container').innerHTML = postsHTML;

  document.querySelectorAll('.js-post-container').forEach((container)=>{
    container.addEventListener('click',()=>{
      const {postId} = container.dataset;
      console.log(postId);
    })
  });  
}

// For filtering the posts via the search bar.
function filterPosts(search_value) {
  /* probably make everything lowercase for value in searching author? */
  let postsHTML = ``;
  let filtered = [];
  posts.forEach((post) => {
    const regex = new RegExp(search_value, 'i'); // Creates a case-insensitive regex object, that is based on the search_value
    filtered = posts.filter(post => regex.test(post.author)); // Appends only to the filtered array the posts with authors that matched the search_value
  })
  document.querySelector('.js-messages-found .messages-found').innerHTML = `${filtered.length} Messages Found`;

  filtered.forEach((post) => {
    
    postsHTML += `
      <a href="comments.html?postId=${post.postId}"><div class="post-container js-post-container" data-post-id=${post.postId}>
        <div class="profile-container">
          <div class="profile-image-container">
            <img src="${post.profilePicture || 'images/bulldog.jpeg'}" alt="Profile Picture">
          </div>
          <div class="details-container">
            <p class="title">${post.title}</p>
            <p class="name">${post.author}</p>
            <p class="status">${formatTime(post)}</p>
          </div>
          <div class="topic-image-container">
            <div>
             <img src="${post.topic}">
            </div>
          </div>
        </div>
        <div class="message-container">
          <p style="background-color:${post.theme}">${post.message}</p>  
        </div>
      </div>
      </a>
    `;
  });

  document.querySelector('.js-posts-list-container').innerHTML = postsHTML;

  document.querySelectorAll('.js-post-container').forEach((container)=>{
    container.addEventListener('click',()=>{
      const {postId} = container.dataset;
      console.log(postId);
    })
  });
  
}


let theme;
let topic;
let profilePicture = 'images/bulldog.jpeg'

document.querySelector('.js-post-button').addEventListener('click', () => {
  const author = document.querySelector('.author-container input').value;
  const title = document.querySelector('.title-container input').value;
  const message = document.querySelector('.messager-container textarea').value;
  let time = dayjs();
  
  const hasError = validatePost(author, title, message);
  
  if (!hasError) {
    submitPost(String(posts.length + 1), author, title, message, theme || 'rgb(99, 211, 130)', topic || 'images/technology.png', time, profilePicture);
    clearAddedPostInput();
    clearErrorStyles();
    wrapper.classList.remove('visible');
    floating.classList.remove('visible');
    renderWall();
  }
});


document.querySelector('#profile-picture-input').addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    profilePicture = e.target.result;

    if (!profilePicture){
      profilePicture = 'images/bulldog.jpeg'
    }
    document.querySelector('#profile-picture-button').src = profilePicture;
  }

  if (file) {
    reader.readAsDataURL(file);
  }
});

// Trigger file input when the image is clicked
document.querySelector('#profile-picture-button').addEventListener('click', () => {
  document.querySelector('#profile-picture-input').click();
});


// THEME
addEventListenerForThemes(selectedTheme => {
  theme = selectedTheme;
});

// TOPIC
document.querySelector('.js-technology').addEventListener('click', (event) => {
  topic = event.target.getAttribute('src');
});
document.querySelector('.js-literature').addEventListener('click', (event) => {
  topic = event.target.getAttribute('src');
});
document.querySelector('.js-art').addEventListener('click', (event) => {
  topic = event.target.getAttribute('src');
});
document.querySelector('.js-politics').addEventListener('click', (event) => {
  topic = event.target.getAttribute('src');
});

const wrapper = document.querySelector('.wrapper');
const floating = document.querySelector('.write-message-container');

renderWall();

function clearAddedPostInput() {
  document.querySelector('.author-container input').value = '';
  document.querySelector('.title-container input').value = '';
  document.querySelector('.messager-container textarea').value = '';
  theme = undefined;
  topic = undefined;
  profilePicture = undefined;
};

function validatePost(author, title, message) {
  let hasError = false;

  if (!author) {
    displayAuthorError();
    hasError = true;
  }
  if (!title) {
    displayTitleError();
    hasError = true;
  }
  if (!message){
    displayMessageEmpty();
    hasError = true;
  } else if (message.length > 300){
    displayMessageMax();
    hasError = true;
  }

  return hasError;
}

function displayAuthorError() {
  document.querySelector('.write-message-container').classList.add('visible');
  document.querySelector('.wrapper').classList.add('visible');
  document.querySelector('.author-error').style.display = "flex";
  document.querySelector('.author-container input').classList.add('error');
  document.querySelector('.author-container div').style.color = "red";
}

function displayTitleError() {
  document.querySelector('.write-message-container').classList.add('visible');
  document.querySelector('.wrapper').classList.add('visible');
  document.querySelector('.title-error').style.display = "flex";
  document.querySelector('.title-container input').classList.add('error');
  document.querySelector('.title-container div').style.color = "red";
}

function displayMessageMax() {
  document.querySelector('.message-error-max').style.display = "flex";
  document.querySelector('.messager-container textarea').style.borderColor = "red";
  document.querySelector('.messager-container div').style.color = "red";
  document.querySelector('.message-error-none').style.display = "none";
}

function displayMessageEmpty() {
  document.querySelector('.message-error-none').style.display = "flex";
  document.querySelector('.messager-container textarea').style.borderColor = "red";
  document.querySelector('.messager-container div').style.color = "red";
  document.querySelector('.message-error-max').style.display = "none";
}

function clearErrorStyles() {
  document.querySelector('.author-error').style.display = "none";
  document.querySelector('.title-error').style.display = "none";
  document.querySelector('.message-error-none').style.display = "none";
  document.querySelector('.message-error-max').style.display = "none";

  document.querySelector('.author-container input').classList.remove('error');
  document.querySelector('.title-container input').classList.remove('error');
  document.querySelector('.messager-container textarea').classList.remove('error');

  document.querySelector('.author-container div').style.color = "";
  document.querySelector('.title-container div').style.color = "";
  document.querySelector('.messager-container div').style.color = "";
  document.querySelector('.messager-container textarea').style.borderColor = "";
}

// Adding event listeners to clear error styles when user starts typing
document.querySelector('.author-container input').addEventListener('input', () => {
  document.querySelector('.author-error').style.display = "none";
  document.querySelector('.author-container input').classList.remove('error');
  document.querySelector('.author-container div').style.color = "";
});

document.querySelector('.title-container input').addEventListener('input', () => {
  document.querySelector('.title-error').style.display = "none";
  document.querySelector('.title-container input').classList.remove('error');
  document.querySelector('.title-container div').style.color = "";
});

document.querySelector('.messager-container textarea').addEventListener('input', () => {
  document.querySelector('.message-error-none').style.display = "none";
  document.querySelector('.message-error-max').style.display = "none";
  document.querySelector('.messager-container textarea').style.borderColor = "";
  document.querySelector('.messager-container div').style.color = "";
});

document.querySelector('.search-bar').addEventListener('keyup', () => {
  let value = document.querySelector('.search-bar').value;
  filterPosts(value);
});