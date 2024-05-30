
const wrapper = document.querySelector('.wrapper');
const floating = document.querySelector('.write-message-container');
console.log(floating);

document.querySelector('.js-write-button').addEventListener('click',()=>{
  wrapper.classList.add('visible');
  floating.classList.add('visible');
});

document.querySelector('.exit-button').addEventListener('click',()=>{
  console.log(wrapper.classList);
  wrapper.classList.remove('visible');
  floating.classList.remove('visible');
});