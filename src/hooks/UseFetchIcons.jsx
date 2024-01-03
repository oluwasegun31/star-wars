import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../firebase/config";
import { useEffect, useState } from "react";
// Custom hook to fetch icons from Firebase Storage
export default function UseFetchIcons(refName) {
  const [icons, setIcons] = useState([]); // State to store the fetched icon URLs
  useEffect(() => {
    // Function to fetch icons asynchronously
    const getIcons = async () => {
      // Create a reference to the icons storage directory using the provided refName
      const iconRef = ref(storage, refName);
      const result = await listAll(iconRef); // List all items in the directory
      const urlPromises = result.items.map((itemRef) =>
        getDownloadURL(itemRef)
      ); // Get download URLs for each item using promises
      const iconsUrl = await Promise.all(urlPromises); // Wait for all URLs to be retrieved
      setIcons(iconsUrl); // Update the state with the fetched URLs
    };
    getIcons(); // Run the getIcons function when the component mounts
  }, []); // Empty dependency array to run the effect only once
  // Return the icons state for use in other components
  return { icons };
}
