import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config"; // Import Firebase auth instance

let signinError = null; // Variable to store any errors during authentication
/**
 * Function to sign in a user with email and password.
 * @param {string} email The user's email address.
 * @param {string} password The user's password.
 * @returns {Promise<boolean>} True if authentication is successful, false otherwise.
 */
const userSignin = async (email, password) => {
  try {
    // Attempt to sign in using Firebase's email/password authentication
    await signInWithEmailAndPassword(auth, email, password);
    signinError = null; // Clear any previous errors
    return true; // Return true on successful authentication
  } catch (err) {
    // Store the error message for later handling
    signinError = err.message;
    return false; // Return false on authentication failure
  }
};
// Export the userSignin function and signinError variable for use in other files
export { userSignin, signinError };
