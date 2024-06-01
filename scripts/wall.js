import { posts, addPost } from "./data/posts.js";

function renderWall() {
  let postsHTML = ``;
  posts.forEach((post) => {
    postsHTML += `
      <div class="post-container">
        <div class="profile-container">
          <div class="profile-image-container">
            <div></div>
          </div>
          <div class="details-container">
            <p class="title">${post.title}</p>
            <p class="name">${post.author}</p>
            <p class="status">Active 2 days ago</p>
          </div>
          <div class="topic-image-container">
            <img src="${post.topic}">
          </div>
        </div>
        <div class="message-container">
          <p style="background-color:${post.theme}">${post.message}</p>  
        </div>
      </div>
    `;
  });

  document.querySelector('.js-posts-list-container').innerHTML = postsHTML;
}

let theme;
let topic;

document.querySelector('.js-post-button').addEventListener('click', () => {
  const author = document.querySelector('.author-container input').value;
  const title = document.querySelector('.title-container input').value;
  const message = document.querySelector('.messager-container textarea').value;
  
  const hasError = validatePost(author, title, message);
  
  if (!hasError) {
    addPost(posts.length + 1, author, title, message, theme || 'rgb(99, 211, 130)', topic || 'images/technology.png');
    clearAddedPostInput();
    clearErrorStyles();
    wrapper.classList.remove('visible');
    floating.classList.remove('visible');
    renderWall();
  }
});

// THEME
document.querySelector('.js-blue').addEventListener('click', () => {
  theme = 'rgb(99, 177, 211)';
});
document.querySelector('.js-red').addEventListener('click', () => {
  theme = 'rgb(211, 99, 99)';
});
document.querySelector('.js-green').addEventListener('click', () => {
  theme = 'rgb(99, 211, 130)';
});
document.querySelector('.js-yellow').addEventListener('click', () => {
  theme = 'rgb(233, 223, 129)';
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
