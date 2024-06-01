
const wrapper = document.querySelector('.wrapper');
const floating = document.querySelector('.write-message-container');
console.log(floating);

document.querySelector('.js-write-button').addEventListener('click',()=>{
  wrapper.classList.add('visible');
  floating.classList.add('visible');
});

document.querySelector('.exit-button').addEventListener('click',()=>{
  wrapper.classList.remove('visible');
  floating.classList.remove('visible');

  // Remove error display styles
  document.querySelector('.author-error').style.display = "none";
  document.querySelector('.title-error').style.display = "none";
  document.querySelector('.author-container input').classList.remove('error');
  document.querySelector('.title-container input').classList.remove('error');
  document.querySelector('.author-container div').style.color = "initial";
  document.querySelector('.title-container div').style.color = "initial";
});
