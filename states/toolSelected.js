import React, { useEffect, useState } from "react";

const initialState = "type";

export const ToolContext = React.createContext();

export const ToolState = ({ children }) => {
  const [toolSelected, setToolSelected] = useState(initialState);

  useEffect(() => {
    const selectedTool = window.localStorage.getItem("ToolState");
    if (selectedTool !== toolSelected) {
      setToolSelected(selectedTool);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ToolState", toolSelected);
  }, [toolSelected]);

  return (
    <ToolContext.Provider value={[toolSelected, setToolSelected]}>
      {children}
    </ToolContext.Provider>
  );
};
