import { useRef, useEffect } from "react";
import "./style.css";
const AutoComplete = () => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["school"],
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
  }, []);
  return (
    <div>
      <label>enter address :</label>
      <input ref={inputRef} />
    </div>
  );
};
export default AutoComplete;
