import { createContext, useContext, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationContextType {
  navigateToWork: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToWork = () => {
    // Get current language from pathname
    const isSpanish = location.pathname.startsWith('/es');
    const targetPath = isSpanish ? '/es' : '/';

    navigate(targetPath, { state: { scrollTo: 'work' } });
  };

  return (
    <NavigationContext.Provider value={{ navigateToWork }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}

export type { NavigationContextType };
