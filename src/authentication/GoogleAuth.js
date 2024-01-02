import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";

let googleError = null; // Variable to store any errors during authentication
const googleProvider = new GoogleAuthProvider(); // Create a new Google Auth Provider instance
/**
 * Function to initiate Google authentication using a popup window.
 * @returns {Promise<boolean>} True if authentication is successful, false otherwise.
 */
const googleAuth = async () => {
  try {
    // Trigger the authentication popup and await the result
    await signInWithPopup(auth, googleProvider);
    googleError = null; // Clear any previous errors
    return true; // Return true on successful authentication
  } catch (err) {
    // Store the error message for later handling
    googleError = err.message;
    return false; // Return false on authentication failure
  }
};
// Export the googleAuth function and googleError variable for use in other files
export { googleAuth, googleError };
