import { posts, saveToStorage} from "./data/posts.js";

renderWall();
function renderWall(){
  let postsHTML = ``;
posts.forEach((post)=>{
  postsHTML+=`
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
`
});

document.querySelector('.js-posts-list-container').innerHTML = postsHTML;

let theme;
let topic;
document.querySelector('.js-post-button').addEventListener('click',()=>{
  const author = document.querySelector('.author-container input').value;
  const title = document.querySelector('.title-container input').value;
  const message = document.querySelector('.messager-container textarea').value;
  posts.push({
    postId: posts.length,
    author,
    title,
    message,
    theme,
    topic
  })
  saveToStorage();
  wrapper.classList.remove('visible');
  floating.classList.remove('visible');
  renderWall();
});

//THEME
document.querySelector('.js-blue').addEventListener('click',()=>{
  console.log('blue');
  theme = 'rgb(99, 177, 211)';
});
document.querySelector('.js-red').addEventListener('click',()=>{
  console.log('red');
  theme = 'rgb(211, 99, 99)';
});
document.querySelector('.js-green').addEventListener('click',()=>{
  console.log('green');
  theme = 'rgb(99, 211, 130)';
});
document.querySelector('.js-yellow').addEventListener('click',()=>{
  console.log('yellow');
  theme = 'rgb(233, 223, 129)';
});

//TOPIC
document.querySelector('.js-technology').addEventListener('click',()=>{
  const src = event.target.getAttribute('src');
  topic = src;
});
document.querySelector('.js-literature').addEventListener('click',()=>{
  const src = event.target.getAttribute('src');
  topic = src;
});
document.querySelector('.js-art').addEventListener('click',()=>{
  const src = event.target.getAttribute('src');
  topic = src;
});
document.querySelector('.js-politics').addEventListener('click',()=>{
  const src = event.target.getAttribute('src');
  topic = src;
});

const wrapper = document.querySelector('.wrapper');
const floating = document.querySelector('.write-message-container');
}
