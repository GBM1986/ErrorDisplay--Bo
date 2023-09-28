

// Function to display error messages
export function ErrorDisplay(type, message) {
    switch (type) {
      case 'alert':
        // Display an alert box with the message
        alert(message);
        break;
      case 'console-error':
        // Log an error message to the console
        console.error(message);
        break;
      case 'console-warning':
        // Log a warning message to the console
        console.warn(message);
        break;
      default:
        console.error('Unknown error type: ' + type);
        break;
    }
  }
  
  // Function to display user feedback messages
  export function UserFeedback(displayView, message, messageType) {
    const domElement = document.getElementById('displayView');
  
    if (!domElement) {
      console.error(`Element with id '${displayView}' not found.`);
      return;
    }
  
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
  
    switch (messageType) {
      case 'Error':
        messageDiv.className = 'error-message';
        break;
      case 'Warning':
        messageDiv.className = 'warning-message';
        break;
      case 'Success':
        messageDiv.className = 'success-message';
        break;
      default:
        console.error(`Unknown message type: '${messageType}'`);
        return;
    }
  
    domElement.appendChild(messageDiv);
  }
  
  // Example usage:
  ErrorDisplay('alert', 'This is an alert message');
  ErrorDisplay('console-error', 'This is a console error');
  ErrorDisplay('console-warning', 'This is a console warning');
  
  UserFeedback('feedback-container', 'This is an error message', 'Error');
  UserFeedback('feedback-container', 'This is a warning message', 'Warning');
  UserFeedback('feedback-container', 'This is a success message', 'Success');
  