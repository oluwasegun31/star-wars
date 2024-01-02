import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";

let githubError = null; // Variable to store any errors during authentication
const githubProvider = new GithubAuthProvider(); // Create a new GitHub Auth Provider instance
/**
 * Function to initiate GitHub authentication using a popup window.
 * @returns {Promise<boolean>} True if authentication is successful, false otherwise.
 */
const GithubAuth = async () => {
  try {
    // Trigger the authentication popup and await the result
    await signInWithPopup(auth, githubProvider);
    githubError = null; // Clear any previous errors
    return true; // Return true on successful authentication
  } catch (err) {
    // Store the error message for later handling
    githubError = err.message;
    return false; // Return false on authentication failure
  }
};
// Export the githubError and GithubAuth function for use in other files
export { githubError, GithubAuth };
