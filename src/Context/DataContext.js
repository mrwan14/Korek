import { createContext, useEffect, useState } from "react";
import { getData } from "../api";

export let DataContext = createContext(0);

export default function DataContextProvider(props) {
  const [Data, setData] = useState(null);
  useEffect(() => {
    // Immediately Invoked Functionx
    (async () => {
      // Get items from storage and sync with state
      // Get data from API
      setData(await getData());
    })();
  }, []);

  return (
    <DataContext.Provider value={{ Data }}>
      {Data == null ? <div>Loading... just wait</div> : props.children}{" "}
    </DataContext.Provider>
  );
}
