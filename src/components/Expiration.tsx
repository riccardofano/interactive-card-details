import { ChangeEvent, useRef, useState } from "react";

interface ExpirationProps {
  month: string;
  year: string;
  handleMonthChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleYearChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Expiration({ month, year, handleMonthChange, handleYearChange }: ExpirationProps) {
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const [monthHadFocus, setMonthHadFocus] = useState(false);
  const [yearHadFocus, setYearHadFocus] = useState(false);

  const isMonthInvalid = !monthRef.current?.validity.valid && monthHadFocus;
  const isYearInvalid = !yearRef.current?.validity.valid && yearHadFocus;
  const isAnyFieldInvalid = isMonthInvalid || isYearInvalid;

  return (
    <div>
      <label
        className={`label | relative grid grid-cols-2 gap-x-2 gap-y-1 ${isAnyFieldInvalid ? "mb-4" : ""}`}
        htmlFor="expiration-date"
      >
        <span className="row-start-1 col-span-full">Exp. Date (MM/YY)</span>
        <input
          ref={monthRef}
          className={`py-2 px-3 w-full border rounded-lg text-base ${
            isMonthInvalid ? "outline outline-1 outline-red-500" : ""
          }`}
          type="text"
          placeholder="MM"
          name="expiration-date"
          value={month}
          maxLength={2}
          pattern="^(0?[1-9]|1[012])$"
          required
          onChange={handleMonthChange}
          onFocus={() => setMonthHadFocus(true)}
        />
        <input
          ref={yearRef}
          className={`py-2 px-3 w-full border rounded-lg text-base ${
            isYearInvalid ? "outline outline-1 outline-red-500" : ""
          }`}
          type="text"
          placeholder="YY"
          name="expiration-date"
          value={year}
          pattern="([0-9]){2}"
          required
          maxLength={2}
          onChange={handleYearChange}
          onFocus={() => setYearHadFocus(true)}
        />
        {isAnyFieldInvalid && (
          <span className="normal-case absolute top-full right-0 mt-2 text-red-500">Can't be blank</span>
        )}
      </label>
    </div>
  );
}

export default Expiration;
