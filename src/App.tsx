import cardLogo from "./assets/card-logo.svg";

function App() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-28 lg:min-h-screen">
      <header className="lg:bg-desktop bg-mobile | lg:p-0 px-4 pt-8 lg:h-full h-[240px] bg-violet-800">
        <div className="lg:grid lg:grid-rows-2 lg:gap-8 relative max-w-[30rem] lg:m-0 lg:ml-auto mx-auto lg:h h-full uppercase text-white">
          <div className="card card-back | lg:ml-auto lg:relative absolute right-0 top-0 bg-gray-200">
            <p className="absolute lg:top-[45%] top-[43%] lg:right-12 right-8 text-right text-xs">000</p>
          </div>

          <div
            className="card card-front
              lg:mt-auto lg:ml-auto lg:mr-14 lg:-order-1 lg:static
              absolute left-0 top-[45%] lg:p-6 p-4 grid shadow-lg bg-purple-500"
          >
            <img className="lg:h-10 h-8" src={cardLogo} alt="" />
            <div className="mt-auto">
              <p className="lg:text-2xl tracking-widest">0000 0000 0000 0000</p>
              <div className="flex justify-between md:mt-6 mt-4 font-light lg:text-xs text-[0.6rem] tracking-widest">
                <p>Felicia Leire</p>
                <p>09/26</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="lg:self-center lg:m-0 mx-4 mt-20">
        <form className="grid gap-4 max-w-[30rem] lg:ml-0 lg:mr-8 mx-auto" action="">
          <label className="label">
            Cardholder name
            <input
              className="py-2 px-4 mt-2 w-full border rounded-lg text-base"
              type="text"
              placeholder="e.g. Jane Appleseed"
            />
          </label>

          <label className="label">
            Card number
            <input
              className="py-2 px-4 mt-2 w-full border rounded-lg text-base"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </label>

          <div className="grid grid-cols-2 gap-2">
            <label className="label | grid grid-cols-2 gap-2" htmlFor="expiration-date">
              <span className="row-start-1 col-span-full">Exp. Date (MM/YY)</span>
              <input
                className="py-2 px-4 w-full border rounded-lg text-base"
                type="text"
                placeholder="MM"
                name="expiration-date"
              />
              <input
                className="py-2 px-4 w-full border rounded-lg text-base"
                type="text"
                placeholder="YY"
                name="expiration-date"
              />
            </label>

            <label className="label" htmlFor="cvc">
              CVC
              <input
                className="py-2 px-4 mt-2 w-full border rounded-lg text-base"
                type="text"
                placeholder="e.g. 123"
                name="cvc"
              />
            </label>
          </div>

          <button className="p-4 mt-2 leading-none rounded-lg text-base text-white bg-violet-800" type="submit">
            Confirm
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
