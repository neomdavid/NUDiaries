import { formatTime } from "./utils/formatTime.js";
import { submissions,getSubmissionByPostId,removeSubmissionByPostId } from "./data/submissions.js";
import { addPost } from "./data/posts.js";

renderAdminWall();
function renderAdminWall() {
  console.log(submissions);
  let submissionsHTML = ``;

  submissions.forEach((submission) => {
    
    submissionsHTML += `
      <div class="post-container js-post-container" data-post-id=${submission.postId}>
        <div class="action-container">
            <div class="approve" data-post-id=${submission.postId}>Approve</div>
            <div class="reject" data-post-id=${submission.postId}>Reject</div>
            <div class="feature">Feature</div>
        </div>
        <div class="profile-container">
          <div class="profile-image-container">
            <img src="${submission.profilePicture || 'images/bulldog.jpeg'}" alt="Profile Picture">
          </div>
          <div class="details-container">
            <p class="title">${submission.title}</p>
            <p class="name">${submission.author}</p>
            <p class="status">${formatTime(submission)}</p>
          </div>
          <div class="topic-image-container">
            <div>
             <img src="${submission.topic}">
            </div>
          </div>
        </div>
        <div class="message-container">
          <p style="background-color:${submission.theme}">${submission.message}</p>  
        </div>
      </div>
      
    `;
  });

  document.querySelector('.js-posts-list-container').innerHTML = submissionsHTML;

  document.querySelectorAll('.js-post-container').forEach((container)=>{
    container.addEventListener('click',()=>{
      const {postId} = container.dataset;
    })
  });
  
  document.querySelectorAll('.approve').forEach((approveButton)=>{
    approveButton.addEventListener('click',()=>{

      const approveContainer= document.querySelector('.approve-container');
      approveContainer.style = "display: flex";

      document.querySelector('.approve-container .confirm').addEventListener('click',()=>{
        const {postId} = approveButton.dataset;
        const submission = getSubmissionByPostId(postId);
        addPost(submission.postId, submission.author, submission.title, submission.message, submission.theme || 'rgb(99, 211, 130)', submission.topic || 'images/technology.png', submission.time, submission.profilePicture);
        removeSubmissionByPostId(submission.postId);
        renderAdminWall();
        approveContainer.style="display:none";
      });
      
      document.querySelector('.approve-container .cancel').addEventListener('click',()=>{
        approveContainer.style="display:none";
      });
    });
  });

  document.querySelectorAll('.reject').forEach((rejectButton)=>{
    rejectButton.addEventListener('click',()=>{

      const rejectContainer= document.querySelector('.reject-container');
      rejectContainer.style = "display: flex";

      document.querySelector('.reject-container .confirm').addEventListener('click',()=>{
        const {postId} = rejectButton.dataset;
        const submission = getSubmissionByPostId(postId);
        removeSubmissionByPostId(submission.postId);
        renderAdminWall();
        rejectContainer.style = "display: none";
      });

      document.querySelector('.reject-container .cancel').addEventListener('click',()=>{
        rejectContainer.style = "display: none";
      });

    
    })
  })
}
