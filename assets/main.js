import { ErrorDisplay, UserFeedback } from './modules/ErrorHandling.js';


// Example usage:
ErrorDisplay('alert', 'This is an alert message');
ErrorDisplay('console-error', 'This is a console error');
ErrorDisplay('console-warning', 'This is a console warning');

UserFeedback('feedback-container', 'This is an error message', 'Error');
UserFeedback('feedback-container', 'This is a warning message', 'Warning');
UserFeedback('feedback-container', 'This is a success message', 'Success');