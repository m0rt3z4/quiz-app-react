import { useEffect } from 'react';

function useKeyboardNavigation(onNext, onPrevious) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrevious]);
}

export default useKeyboardNavigation;
