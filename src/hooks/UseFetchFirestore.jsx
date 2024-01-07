import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
export default function UseFetchFirestore(path) {
  const [dataArr, setDataArr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const dataReference = collection(db, path);
        const rawData = await getDocs(dataReference);
        const data = rawData.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));
        setDataArr(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return { dataArr, isLoading };
}
