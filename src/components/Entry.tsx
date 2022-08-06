import { ChangeEvent, useEffect, useRef, useState } from "react";

interface EntryProps {
  label: string;
  placeholder: string;
  max: number;
  error?: {
    validation: string;
    message: string;
  };
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Entry({ label, placeholder, max, error, value, handleChange }: EntryProps) {
  const ref = useRef<HTMLInputElement>(null);
  // Only show the invalid status after having gained focus once
  const [hasGainedFocus, setHasGainedFocus] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);

  const shouldShowError =
    (hasGainedFocus && !isOnFocus && value === "") || (isOnFocus && value !== "" && !ref.current?.validity.valid);

  return (
    <label className={`label | relative ${shouldShowError ? "mb-4" : ""}`}>
      {label}
      <input
        ref={ref}
        className={`${
          shouldShowError ? "outline outline-1 outline-red-500" : ""
        } py-2 px-3 mt-1 w-full border rounded-lg text-base`}
        type="text"
        placeholder={placeholder}
        maxLength={max}
        value={value}
        pattern={error?.validation}
        required
        onChange={handleChange}
        onFocus={() => {
          setHasGainedFocus(true);
          setIsOnFocus(true);
        }}
        onBlur={() => setIsOnFocus(false)}
      />
      {shouldShowError && (
        <span className="normal-case absolute top-full right-0 mt-2 text-red-500">
          {error?.message || "Can't be blank"}
        </span>
      )}
    </label>
  );
}

export default Entry;
