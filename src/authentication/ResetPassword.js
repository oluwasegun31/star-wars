import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config"; // Import Firebase auth instance

let resetPasswordError = null; // Variable to store any errors during password reset
/**
 * Function to initiate password reset by sending an email.
 * @param {string} email The user's email address.
 * @returns {Promise<boolean>} True if the email is sent successfully, false otherwise.
 */
const resetPasswordFunc = async (email) => {
  try {
    // Trigger the password reset email using Firebase's function
    await sendPasswordResetEmail(auth, email);
    resetPasswordError = null; // Clear any previous errors
    return true; // Return true on successful email sending
  } catch (err) {
    // Store the error message for later handling
    resetPasswordError = err.message;
    return false; // Return false on email sending failure
  }
};
// Export the resetPasswordError variable and resetPasswordFunc function for use in other files
export { resetPasswordError, resetPasswordFunc };
