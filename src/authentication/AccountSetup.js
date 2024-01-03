import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
// Global error variable to store any errors during account setup
let acctSetupError = null;
// Function to handle account setup tasks
const accountSetUp = async (displayName, photoURL) => {
  try {
    // Attempt to update the user's profile with the provided information
    await updateProfile(auth.currentUser, { displayName, photoURL });
    acctSetupError = null; // If successful, clear any previous errors and return true
    return true;
  } catch (err) {
    // If an error occurs, store the error message and return false
    acctSetupError = err.message;
    return false;
  }
};
// Export the accountSetUp function and acctSetupError variable for use in other parts of the application
export { accountSetUp, acctSetupError };
