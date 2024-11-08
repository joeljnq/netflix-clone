import React ,{ createContext, ReactNode, useContext, useState } from "react";


interface ViewPreferenceContextType {
    viewPreference: string;
    setViewPreference: (value: string) => void;
}
const ViewPreferenceContext = createContext<ViewPreferenceContextType | undefined>(undefined);
const ViewPreferenceProvider:React.FC<{ children: ReactNode}> = ({ children }) => {
    const [viewPreference, setViewPreference] = useState<string>("movies");
    
    return (
        <ViewPreferenceContext.Provider value={{ viewPreference, setViewPreference }}>
            {children}
        </ViewPreferenceContext.Provider>
    )
};

// Hook personalizado para usar el contexto
const useViewPreference = () => {
    const context = useContext(ViewPreferenceContext);
    if (context === undefined) {
      throw new Error('useViewPreference must be used within a ViewPreferenceProvider');
    }
    return context;
  };
  
  export { ViewPreferenceProvider, useViewPreference };