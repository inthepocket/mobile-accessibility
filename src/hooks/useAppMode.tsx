import React, { PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

export enum Mode {
  ACCESSIBLE = 'accessible',
  INACCESSIBLE = 'inaccessible',
}

const DEFAULT_APP_MODE = Mode.ACCESSIBLE;

export interface AppModeContextProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
  isAccessible: boolean;
}
export const AppModeContext = React.createContext<AppModeContextProps | null>(null);

export const useAppMode = () => {
  const context = useContext(AppModeContext);
  if (!context) {
    throw new Error('Wrap app with AppModeProvider');
  }
  return context;
};

export const AppModeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [mode, setMode] = useState<Mode>(DEFAULT_APP_MODE);

  const handleSetMode = useCallback(
    (m: Mode) => {
      setMode(m);
    },
    [setMode],
  );

  const value = useMemo(
    () => ({
      mode,
      setMode: handleSetMode,
      isAccessible: mode === 'accessible',
    }),
    [mode, handleSetMode],
  );

  return <AppModeContext.Provider value={value}>{children}</AppModeContext.Provider>;
};
