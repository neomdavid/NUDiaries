let posts = JSON.parse(localStorage.getItem('posts')) || 
[{
  postId:'1',
  author:'Neo',
  title:'Try',
  message:'Hello World!',
  theme:
}];

function saveToStorage(){
  localStorage.setItem('posts', JSON.stringify(posts));
}

