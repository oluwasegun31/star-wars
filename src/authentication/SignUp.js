import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config"; // Import Firebase auth instance

let signupError = null; // Variable to store any errors during signup
/**
 * Function to create a new user with email and password.
 * @param {string} email The user's email address.
 * @param {string} password The user's password.
 * @returns {Promise<boolean>} True if user creation is successful, false otherwise.
 */
const userSignup = async (email, password) => {
  try {
    // Attempt to create a new user using Firebase's authentication
    await createUserWithEmailAndPassword(auth, email, password);
    signupError = null; // Clear any previous errors
    return true; // Return true on successful creation
  } catch (err) {
    // Store the error message for later handling
    signupError = err.message;
    return false; // Return false on signup failure
  }
};
// Export the userSignup function and signupError variable for use in other files
export { userSignup, signupError };
