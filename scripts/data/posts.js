export let posts = JSON.parse(localStorage.getItem('posts')) || [{
  postId: '201',
  author: 'Neo',
  title: 'Registrar',
  message: 'Gaano po katagal i-process ang COR',
  theme: 'rgb(99, 211, 130)',
  topic: 'images/technology.png',
  time: 'June 1, 2024',
  profilePicture: 'images/bulldog.jpeg',
  comments: [1, 2],
  featured: false // By default, posts are not featured unless inputted otherwise
}];

export function saveToStorage() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

export function addPost(postId, author, title, message, theme, topic, time, profilePicture, featured) {
  posts.push({
    postId,
    author,
    title,
    message,
    theme,
    topic,
    time,
    profilePicture,
    comments: [1,2],
    featured
  });
  saveToStorage();
}

export function getPostById(id){
  let matchingPost;
  console.log(posts);
  posts.forEach((post) => {
    if (post.postId == id) {
      matchingPost = post;
    }
  });
  return matchingPost;
}
export function addCommentToPost(postId, commentId){
  posts.forEach((post)=>{
    if(post.postId === postId){
      post.comments.push(commentId);
    }
  })
  saveToStorage();
};

// For deleting posts
export function deletePostByPostId(postId){
  // Dealing with modifying the length of the array, it's apparently recommended to iterate over the array backwards.
  for (let i = posts.length - 1; i >= 0; i--) {
    if (posts[i].postId == postId) {
      posts.splice(i, 1);
    }
  }
  saveToStorage();
}

// For changing the feature value of the post into the opposite of its inital value.
export function setFeatureToPost(postId){
  posts.forEach((post)=>{
    if(post.postId == postId){
      post.featured = !post.featured;
    }
  });
  saveToStorage();
}

let postId = JSON.parse(localStorage.getItem('postId')) || 0;

export function generatePostId(){
  postId++;
  localStorage.setItem('postId', JSON.stringify(postId));
  return postId;
};

export function deleteComment(matchingPost, commentId) {
  const commentIndex = matchingPost.comments.indexOf(Number(commentId));
  if (commentIndex !== -1) {
    matchingPost.comments.splice(commentIndex, 1);
    saveToStorage();
  }
}
