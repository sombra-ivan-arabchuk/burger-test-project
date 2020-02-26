import React, { createContext, useContext, useEffect, useState } from 'react';

export type NetworkProps = {
  isOnline: boolean;
};

const networkContext = createContext<NetworkProps>({
  isOnline: true,
});

export function ProvideNetwork({
  children,
}: {
  children: React.ReactChild;
}): React.ReactElement {
  const auth = useProvideNetwork();
  return (
    <networkContext.Provider value={auth}>{children}</networkContext.Provider>
  );
}

export const useNetwork = (): NetworkProps => useContext(networkContext);

function useProvideNetwork(): NetworkProps {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, []);

  return {
    isOnline,
  };
}
