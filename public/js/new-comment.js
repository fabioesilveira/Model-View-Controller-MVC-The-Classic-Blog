const theClassicBlogCommentFormHandler = async (event) => {
    event.preventDefault(); 
  
    const post_id = window.location.pathname.split('/').pop();

    console.log("post_id", post_id);
  
    const comment_text = document.querySelector('#text').value.trim();
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_text, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload(); // When successful, reload the same page
      } else {
        // console.log('Response status:', response.status);
        // console.log('Response text:', await response.text());
        alert('Failed to create a comment.'); // When unsuccessful, show alert
      }
    }
  };
  
  
  // Event listeners
  const theClassicBlogCommentForm = document.querySelector('.new-comment-form');
  
theClassicBlogCommentForm.addEventListener('submit', theClassicBlogCommentFormHandler);