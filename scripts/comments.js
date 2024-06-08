import {getPostById} from "./data/posts.js";
import { formatTime } from "./utils/formatTime.js";

const url = new URL(window.location.href);
const postId = url.searchParams.get('postId');

const matchingPost = getPostById(postId);

let commentsHTML = `
<div class="post-details-container">
  <div class="profile-container">
   <img src="${matchingPost.profilePicture}">
  </div>
  <div class="details-container">
    <div class="name">${matchingPost.author}</div>
    <div class="status">${formatTime(matchingPost)}</div>
  </div>
  <div class="topic-container">
    <img src="${matchingPost.topic}">
  </div>
</div>
<div class="message-comments-container">
  <div class="message-outer-container">
   <div class="message">${matchingPost.message}</div>
  </div>
  <div class="comments-container">
    <div class="single-comment-container">    
      <div class="user-name">User 1</div>
      <div class="user-comment">Hello!</div>
    </div>
    <div class="single-comment-container">    
      <div class="user-name">User 1</div>
      <div class="user-comment">Hello!</div>
      <div class="user-comment">Hello!HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello!HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello</div>
    </div>
  </div>
</div>
<div class="info-input-container">
  <div class="name-comment-container">
    <div class="username-label">Username:</div>
    <input class="username-input" placeholder="Aa">
  </div>
  <div class="theme-container">
    <div class="theme-label">Theme:</div>
    <div class="themes-choices-container">
      <div class="js-blue"></div>
      <div class="js-red"></div>
      <div class="js-green"></div>
      <div class="js-yellow"></div>
    </div>
  </div>
  <div class="message-input-container" oninput="autoResize()">

    <div class="message-input" oninput="autoResize()">
          <textarea class="textarea-clone"></textarea></div>
    <div class="send-button-container">
      <img src="images/right.png">
    </div>
  </div>
</div>
`




document.querySelector('.js-comment-container').innerHTML = commentsHTML;