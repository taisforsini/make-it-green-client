import { useEffect } from "react";

function useOutsideClick(
  ref: React.MutableRefObject<any>,
  onOutsideClick: () => void
) {
  useEffect(() => {
    function handleOutsideClick(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (onOutsideClick) onOutsideClick();
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, onOutsideClick]);
}

export default useOutsideClick;
