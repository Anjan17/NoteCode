import { useEffect, useRef } from 'react';

const useLocation = () => {
    const locationRef = useRef<null | string>(null);
    
      useEffect(() => {
        console.log('window.location.search', window.location.search);
        locationRef.current = window.location.search;
    
        return () => {
          locationRef.current = null;
        };
      }, [window.location.search]);
    
    return locationRef?.current;

}

export default useLocation;