export let comments = JSON.parse(localStorage.getItem('comments')) || [{
  commentId: 1,
  userId: 2,
  comment: 'This is a test comment.',
  theme: 'rgb(99, 211, 130)'
},{
  commentId: 2,
  userId: 1,
  comment: 'This is the second comment.',
  theme: 'rgb(99, 211, 130)'
},{
  commentId: 3,
  userId: 1,
  comment: 'This is the second comment.',
  theme: 'rgb(99, 211, 130)'
}];

export function saveToStorage(){
  localStorage.setItem('comments', JSON.stringify(comments));
}

export function newComment(commentId, userId, comment, theme){
  comments.push({
    commentId,
    userId,
    comment,
    theme
  })
  saveToStorage();
};