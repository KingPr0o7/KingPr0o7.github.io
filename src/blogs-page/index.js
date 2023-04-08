const blogCard = document.querySelector('.blog-card');
const blogCardTimestamp = document.querySelector('.blog-card-timestamp');

blogCard.addEventListener('mouseover', function() {
	blogCardTimestamp.textContent = 'Read Blog';
  });
  
  blogCard.addEventListener('mouseout', function() {
	blogCardTimestamp.textContent = 'Nathan Parker • Apr 20, 2023';
  });