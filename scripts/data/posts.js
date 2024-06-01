export let posts = JSON.parse(localStorage.getItem('posts')) || 
[{
  postId: '1',
  author: 'Neo',
  title: 'Ang title nito ay',
  message: 'anofwaefawefawefsawnfoaefkanwefknaskdnflkanweklfnklasdnflkanwklefnklandsklfnaklwdnfklanwdklfnawklndfkawawefkwemfkanwekfnkawfwafewaawfeawakefnkajwnefawknefknawekfnkawenfkawnfwakefmkwafnkwaefnkawnefkaweekewnwaelfawlmefwlmeflawmflemwflaemflawwaefawefawfeawes', //255 characters
  theme: 'rgb(99, 211, 130)',
  topic: 'images/technology.png'
}];

export function saveToStorage() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

export function addPost(postId, author, title, message, theme, topic) {
  const errors = [];

  if (!author) {
    errors.push('Please enter an author.');
  }
  if (!title) {
    errors.push('Please enter a title.');
  }
  if (!message) {
    errors.push('Please enter a message.');
  }
  if (message.length >= 300) {
    errors.push('Message must be less than 300 characters.');
  }
  if (errors.length > 0) {
    alert(errors.join('\n'));
    return;
  }

  if (!theme) {
    theme = 'rgb(99, 211, 130)';
  }
  if (!topic) {
    topic = 'images/technology.png';
  }

  posts.push({
    postId,
    author,
    title,
    message,
    theme,
    topic
  });
  saveToStorage();
}
