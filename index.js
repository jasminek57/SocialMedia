// Fetch users and posts and display them on the page
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let userHTML = '';
    users.forEach(user => {
      userHTML += `<div><strong>${user.name}</strong><br>${user.email}</div>`;
    });
    document.getElementById('user-list').innerHTML = userHTML;
  });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    let postHTML = '';
    posts.forEach(post => {
      postHTML += `<div><strong>${post.title}</strong><br>${post.body}</div>`;
    });
    document.getElementById('post-list').innerHTML = postHTML;
  });

