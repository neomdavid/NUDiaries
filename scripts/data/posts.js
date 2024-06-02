export let posts = JSON.parse(localStorage.getItem('posts')) || 
[{
  postId: '1',
  author: 'Neo',
  title: 'Ang title nito ay',
  message: 'anofwaefawefawefsawnfoaefkanwefknaskdnflkanweklfnklasdnflkanwklefnklandsklfnaklwdnfklanwdklfnawklndfkawawefkwemfkanwekfnkawfwafewaawfeawakefnkajwnefawknefknawekfnkawenfkawnfwakefmkwafnkwaefnkawnefkaweekewnwaelfawlmefwlmeflawmflemwflaemflawwaefawefawfeawes', //255 characters
  theme: 'rgb(99, 211, 130)',
  topic: 'images/technology.png',
  time: 'June 1, 2024'
}]

export function saveToStorage() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

export function addPost(postId, author, title, message, theme, topic, time) {
  posts.push({
    postId,
    author,
    title,
    message,
    theme,
    topic,
    time
  });
  saveToStorage();
}
