import { featured } from "./data/featured.js";
import { formatTime } from "./utils/formatTime.js";

document.querySelector('.js-messages-found .messages-found').innerHTML = `${featured.length} Messages Found`;
let featuredHTML = '';
featured.forEach((post)=>{
  featuredHTML += `
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
document.querySelector('.js-posts-list-container').innerHTML = featuredHTML;

});