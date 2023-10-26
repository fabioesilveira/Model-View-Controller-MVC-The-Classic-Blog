async function theClassicBlogCommentFormHandler(event) {
    event.preventDefault(); 
  
    const post_id = window.location.pathname.split('/').pop();
    const comment_text = document.querySelector('#commentText').value.trim();
    
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_text, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('succeeded in creating a comment.');
         // When successful, reload the same page
      } else {
        // console.log('Response status:', response.status);
        // console.log('Response text:', await response.text());
        alert('Failed to create a comment.'); // When unsuccessful, show alert
      }

    document.location.reload();
  };
  
  
  // Event listeners
const theClassicBlogCommentForm = document.querySelector('.new-comment-form');
  
theClassicBlogCommentForm.addEventListener('submit', theClassicBlogCommentFormHandler);