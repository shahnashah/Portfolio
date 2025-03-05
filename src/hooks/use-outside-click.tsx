import React, { useEffect } from "react";

// Define the type for the callback function
type Callback = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Callback // Use the defined type for callback
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Check if the clicked element is outside the referenced element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event); // Call the callback if outside click
    };

    // Add event listeners for mouse and touch events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
