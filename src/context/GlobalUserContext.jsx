import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const GlobalUserContext = createContext(null);
/**
 * GlobalUserProvider Component - This component serves as a provider for the global user context. It manages the current user's authentication state and provides the user data to the rest of the application. It also handles the loading state while checking the authentication status.
 */
export const GlobalUserProvider = ({ children }) => {
  // Declare state variables for the current user and a loading indicator
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Use an effect hook to listen for changes to the authentication state
    let unsubscribe; // Create an unsubscribe function to unsubscribe from the authentication state listener
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false); // Set the loading indicator to false and update the current user state
      currentUser ? setUser(currentUser) : setUser(null);
    });
    return () => {
      // Return the unsubscribe function to ensure that it is called when the component unmounts
      if (unsubscribe) unsubscribe();
    };
  }, [user]);
  return (
    <GlobalUserContext.Provider value={{ user, setUser }}>
      {isLoading ? (
        <section className="grid place-content-center text-8xl font-medium w-full h-screen">
          WELCOME
        </section>
      ) : (
        children
      )}
    </GlobalUserContext.Provider>
  );
};
