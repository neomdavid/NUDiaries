export let posts = JSON.parse(localStorage.getItem('posts')) || [{
  postId: '1',
  author: 'Neo',
  title: 'Ang title nito ay',
  message: 'anofwaefawefawefsawnfoaefkanwefknaskdnflkanweklfnklasdnflkanwklefnklandsklfnaklwdnfklanwdklfnawklndfkawawefkwemfkanwekfnkawfwafewaawfeawakefnkajwnefawknefknawekfnkawenfkawnfwakefmkwafnkwaefnkawnefkaweekewnwaelfawlmefwlmeflawmflemwflaemflawwaefawefawfeawes',
  theme: 'rgb(99, 211, 130)',
  topic: 'images/technology.png',
  time: 'June 1, 2024',
  profilePicture: null,
  comments: [1, 2]
}];

export let featured_posts = JSON.parse(localStorage.getItem('featured_posts')) || [{
  postId: '2',
  author: 'Neo',
  title: 'Featured Title',
  message: 'anofwaefawefawefsawnfoaefkanwefknaskdnflkanweklfnklasdnflkanwklefnklandsklfnaklwdnfklanwdklfnawklndfkawawefkwemfkanwekfnkawfwafewaawfeawakefnkajwnefawknefknawekfnkawenfkawnfwakefmkwafnkwaefnkawnefkaweekewnwaelfawlmefwlmeflawmflemwflaemflawwaefawefawfeawes',
  theme: 'rgb(99, 211, 130)',
  topic: 'images/technology.png',
  time: 'June 1, 2024',
  profilePicture: null,
  comments: [1, 2]
}];

export function saveToStorage() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

export function saveToFeatured() {
  localStorage.setItem('featured_posts', JSON.stringify(featured_posts));
}

export function addPost(postId, author, title, message, theme, topic, time, profilePicture) {
  posts.push({
    postId,
    author,
    title,
    message,
    theme,
    topic,
    time,
    profilePicture,
    comments: [1, 2,3] 
  });
  saveToStorage();
}

export function getPostById(id){
  let matchingPost;
  posts.forEach((post) => {
    if (post.postId === id) {
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