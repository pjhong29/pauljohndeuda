import React, { createContext, useContext, useState, ReactNode } from "react";

type NicheMode = "graphicOnly" | "full";

interface NicheModeContextProps {
  mode: NicheMode;
  setMode: (mode: NicheMode) => void;
}

const NicheModeContext = createContext<NicheModeContextProps | undefined>(undefined);

export const useNicheMode = () => {
  const context = useContext(NicheModeContext);
  if (!context) throw new Error("useNicheMode must be used within NicheModeProvider");
  return context;
};

export const NicheModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<NicheMode>("graphicOnly");
  return (
    <NicheModeContext.Provider value={{ mode, setMode }}>
      {children}
    </NicheModeContext.Provider>
  );
};