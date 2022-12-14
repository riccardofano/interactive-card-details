import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";

import type { FormData } from "../App";
import Entry from "./Entry";
import Expiration from "./Expiration";

interface FormProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function Form({ formData, setFormData, handleSubmit }: FormProps) {
  const handleChange = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({
      ...data,
      [key]: e.target.value,
    }));
  };

  const handleCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const updated = e.target.value
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();

    setFormData((data) => ({
      ...data,
      cardNumber: updated,
    }));
  };

  return (
    <form className="grid gap-6 max-w-[380px] lg:m-0 mx-auto" onSubmit={handleSubmit}>
      <Entry
        label="Cardholder name"
        placeholder="e.g. Jane Appleseed"
        value={formData.cardHolder}
        max={48}
        handleChange={(e) => handleChange("cardHolder", e)}
      />
      <Entry
        label="Card number"
        placeholder="e.g. 1234 5678 9123 0000"
        value={formData.cardNumber}
        max={19}
        handleChange={handleCardNumber}
        error={{
          validation: "([0-9]){4} ([0-9]){4} ([0-9]){4} ([0-9]){4}",
          message: "Wrong format, numbers only",
        }}
      />

      <div className="grid grid-cols-2 gap-4">
        <Expiration
          month={formData.month}
          year={formData.year}
          handleMonthChange={(e) => handleChange("month", e)}
          handleYearChange={(e) => handleChange("year", e)}
        />
        <Entry
          label="CVC"
          placeholder="e.g. 123"
          value={formData.cvc}
          error={{
            validation: "^([0-9]){3}$",
            message: "Can't be blank",
          }}
          max={3}
          handleChange={(e) => handleChange("cvc", e)}
        />
      </div>

      <button className="p-4 mt-2 leading-none rounded-lg text-base text-white bg-violet-800" type="submit">
        Confirm
      </button>
    </form>
  );
}

export default Form;
