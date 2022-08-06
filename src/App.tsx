import { FormEvent, useState } from "react";

import Form from "./components/Form";

import cardLogo from "./assets/card-logo.svg";
import iconComplete from "./assets/icon-complete.svg";

export type FormData = {
  cardHolder: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
};

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    cardHolder: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-28 lg:min-h-screen">
      <header className="lg:bg-desktop bg-mobile | lg:p-0 px-4 pt-8 lg:h-full h-[240px] bg-violet-800">
        <div className="lg:grid lg:grid-rows-2 lg:gap-8 relative max-w-[30rem] lg:m-0 lg:ml-auto mx-auto lg:h h-full uppercase text-white">
          <div className="card card-back | lg:ml-auto lg:relative absolute right-0 top-0 bg-gray-200">
            <p className="absolute lg:top-[45%] top-[43%] lg:right-12 right-8 text-right text-xs">
              {formData.cvc || "000"}
            </p>
          </div>

          <div
            className="card card-front
              lg:mt-auto lg:ml-auto lg:mr-14 lg:-order-1 lg:static
              absolute left-0 top-[45%] lg:p-6 p-4 grid bg-purple-500"
          >
            <img className="lg:h-10 h-8" src={cardLogo} alt="" />
            <div className="mt-auto">
              <p className="lg:text-2xl tracking-widest">{formData.cardNumber || "0000 0000 0000 0000"}</p>
              <div className="flex justify-between md:mt-6 mt-4 font-light lg:text-xs text-[0.6rem] tracking-widest">
                <p>{formData.cardHolder || "Jane Appleseed"}</p>
                <p>
                  {formData.month || "00"}/{formData.year || "00"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="lg:self-center lg:m-0 mx-4 mt-20">
        {submitted ? (
          <div className="grid text-center max-w-[380px] lg:ml-0 lg:mr-8 mx-auto">
            <img className="mx-auto" src={iconComplete} alt="" />
            <h1 className="mt-6 text-lg uppercase text-violet-800">Thank you!</h1>
            <p className="mt-4 text-violet-600">We've added your card details</p>
            <button
              className="p-4 mt-10 leading-none rounded-lg text-base text-white bg-violet-800"
              onClick={() => setSubmitted(false)}
            >
              Continue
            </button>
          </div>
        ) : (
          <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        )}
      </main>
    </div>
  );
}

export default App;
