import {getPostById, addCommentToPost} from "./data/posts.js";
import { formatTime } from "./utils/formatTime.js";
import { comments, newComment } from "./data/comments.js";
import { addEventListenerForThemes } from "./utils/addEventListenerThemes.js";
const url = new URL(window.location.href);
const postId = url.searchParams.get('postId');

const matchingPost = getPostById(postId);

renderCommentPage();
function renderCommentPage(){

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
   <div class="message" style="background-color:${matchingPost.theme}">${matchingPost.message}</div>
  </div>
  <div class="comments-container">

    //HEREEEEEEEEEEEEEEEE
    ${commentsListHTML()}
  
  </div>
</div>
<div class="info-input-container">
  <div class="name-comment-container">
    <div class="username-label">Username:</div>
    <input class="username-input js-username-input" placeholder="Aa">
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
          <textarea class="textarea-clone js-comment-input"></textarea></div>
    <div class="send-button-container">
      <img class="js-send-button" src="images/right.png">
    </div>
  </div>
</div>
`

console.log(comments);
let theme;

document.querySelector('.js-comment-container').innerHTML = commentsHTML;

document.querySelector('.js-send-button').addEventListener('click',()=>{
  const comment = document.querySelector('.js-comment-input').value;
  const commentId = comments.length+1;
  newComment(commentId,1,comment,theme)
  addCommentToPost(matchingPost.postId, commentId);
  renderCommentPage();
});


addEventListenerForThemes(selectedTheme => {
  theme = selectedTheme;
});


//This will iterate through the comments array of the post and iterates and checks through the whole comments data from data/comments.js
function commentsListHTML(){
  let commentListHTML = ``;
  comments.forEach((comment, index) => {
 

    if (matchingPost.comments.includes(comment.commentId)){
   
      if (index > 0 && comment.userId === comments[index - 1].userId) {
        commentListHTML += ` 
           <div class="user-comment" style="background-color:${comment.theme}">${comment.comment}</div>
        `;
      } else {
        if (index > 0) {
          commentListHTML += `</div>`;
        }
        commentListHTML += ` 
          <div class="single-comment-container">    
            <div class="user-name">User ${comment.userId}</div>
            <div class="user-comment">${comment.comment}</div>
        `;
      }
    }
  });

  // Close the last comment container
  if (comments.length > 0) {
    commentListHTML += `</div>`;
  }

  return commentListHTML;
}




//Themes styles: clicked outline
document.querySelectorAll('.themes-choices-container div').forEach((theme) => {
  theme.addEventListener('click', (event) => {
    // Remove the black border from all themes
    document.querySelectorAll('.themes-choices-container div').forEach((t) => {
      t.style.border = 'none';
    });
    // Add the black border to the selected theme
    event.currentTarget.style.border = '1.5px solid black';
  });
});
}
