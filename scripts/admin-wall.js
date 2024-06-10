import { posts, addPost } from "./data/posts.js";
import { formatTime } from "./utils/formatTime.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { addEventListenerForThemes } from "./utils/addEventListenerThemes.js";

renderWall()
function renderWall() {
  let postsHTML = ``;

  posts.forEach((post) => {
    
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
