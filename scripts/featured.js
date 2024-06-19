// import { featured } from "./data/featured.js";
import { formatTime } from "./utils/formatTime.js";
import { posts } from "./data/posts.js";
import { notAdmin } from "./data/admin.js";

notAdmin();

const featured = posts.filter(post => post.featured); // Posts that have featured set to true

document.querySelector('.js-messages-found .messages-found').innerHTML = `${featured.length} Messages Found`;
let featuredHTML = '';
if (featured.length == 0){
  //There's a bug wherein if there are no featured posts, the featured wall will display the posts from the normal wall.
  // This if-else check is a fix for that. It just displays "No posts have been selected to be featured as of the moment."
  featuredHTML += `<p>No posts have been selected to be featured as of the moment.</p>`;
  document.querySelector('.js-posts-list-container').innerHTML = featuredHTML;
} else {
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
}

