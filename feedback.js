function submitFeedback() {
    const restaurantName = document.getElementById('restaurantName').value;
    const feedbackText = document.getElementById('feedbackText').value;
  
    // Check if both fields are filled
    if (restaurantName && feedbackText) {
      // In a real-world scenario, you would send this data to a server for processing and storage
      // For now, we'll just log the feedback to the console
      console.log(`Feedback for ${restaurantName}: ${feedbackText}`);
      
      // Provide visual feedback to the user
      showFeedbackConfirmation();
  
      // Clear the form fields after a delay
      setTimeout(() => {
        document.getElementById('restaurantName').value = '';
        document.getElementById('feedbackText').value = '';
      }, 2000);
    } else {
      alert('Please fill out all fields before submitting feedback.');
    }
  }
  
  function showFeedbackConfirmation() {
    const confirmationMessage = document.createElement('div');
    confirmationMessage.textContent = 'Thank you for your feedback!';
    confirmationMessage.classList.add('confirmation-message');
  
    document.body.appendChild(confirmationMessage);
  
    // Remove the confirmation message after a delay
    setTimeout(() => {
      document.body.removeChild(confirmationMessage);
    }, 2000);
  }
  