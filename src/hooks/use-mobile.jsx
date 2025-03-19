import * as React from 'react';

const MOBILE_BREAKPOINT = 768;
const SM_MOBILE_BREAKPOINT = 640;

export function useIsMobile(version = 'small') {
  const [isMobile, setIsMobile] = React.useState(undefined);
  const BREAKPOINT =
    version === 'small' ? SM_MOBILE_BREAKPOINT : MOBILE_BREAKPOINT;

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINT);
    };
    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < BREAKPOINT);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}
