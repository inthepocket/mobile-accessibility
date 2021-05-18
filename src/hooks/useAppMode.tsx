import React, { PropsWithChildren, useCallback, useContext, useState } from 'react';

export type Mode = 'accessible' | 'inaccessible';

const DEFAULT_APP_MODE = 'accessible';

export const AppMode =
  React.createContext<
    [Mode, (mode: Mode) => void]
    // @ts-expect-error
  >(null);

export const useAppMode = () => useContext(AppMode);

export const AppModeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [mode, setMode] = useState<Mode>(DEFAULT_APP_MODE);

  const handleSetMode = useCallback(
    (m: Mode) => {
      setMode(m);
    },
    [setMode],
  );

  return <AppMode.Provider value={[mode, handleSetMode]}>{children}</AppMode.Provider>;
};
