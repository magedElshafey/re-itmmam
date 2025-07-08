import { useState, useEffect, useTransition } from "react";
const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    const handleOnline = () => {
      startTransition(() => {
        setIsOnline(true);
      });
    };

    const handleOffline = () => {
      startTransition(() => {
        setIsOnline(false);
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return {
    isOnline,
    isPending,
  };
};
export default useNetworkStatus;
