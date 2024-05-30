export let posts = JSON.parse(localStorage.getItem('posts')) || 
[{
  postId:'1',
  author:'Neo',
  title:'Ang title nito ay',
  message:'anofwaefawefawefsawnfoaefkanwefknaskdnflkanweklfnklasdnflkanwklefnklandsklfnaklwdnfklanwdklfnawklndfkawawefkwemfkanwekfnkawfwafewaawfeawakefnkajwnefawknefknawekfnkawenfkawnfwakefmkwafnkwaefnkawnefkaweekewnwaelfawlmefwlmeflawmflemwflaemflawwaefawefawfeawes',//255 characters
  theme:'rgb(99, 211, 130)',
  topic:'images/technology.png'
}];

export function saveToStorage(){
  localStorage.setItem('posts', JSON.stringify(posts));
}

