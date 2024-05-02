import { useState } from "react";
import "./App.css";
import { content } from "./data/content";

function App() {
  const [backgroundColour, setBackgroundColour] = useState("#1A1B1E");

  return (
    <div
      className="flex justify-center w-screen px-8 py-10 md:h-[200vh] md:justify-center lg:h-screen lg:w-screen"
      style={{ backgroundColor: backgroundColour }}
    >
      <div className="flex flex-col items-center justify-center w-screen lg:gap-12">
        <div className="flex flex-col items-center pb-5 md:gap-3 lg:gap-4">
          <p className=" font-extrabold text-red-400 text-sm md:text-green-400 md:text-3xl lg:text-4xl lg:text-white">
            Turn collaboration into innovation
          </p>
          <div className="flex w-full items-center justify-center cursor-pointer gap-3">
            <span className="font-medium text-[#3F83F8] text-xs md:text-base lg:text-lg">
              Learn more about inner source
            </span>
            <img src="Vector.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col justify-between items-center md:items-center md:gap-8 lg:w-[1024px] lg:flex-row lg:justify-center lg:gap-12 text-white ">
          {content.map((data) => {
            return (
              <div
                key={data.id}
                className="flex flex-col w-[90%] gap-1 md:gap-2 md:w-[95%] lg:gap-[10px] lg:h-full lg:w-[309px]"
              >
                <img
                  className="h-[75%] md:h-[400px]"
                  src={data.picture}
                  alt=""
                />
                <h2 className="font-bold text-sm md:text-lg lg:text-xl">
                  {data.title}
                </h2>
                <p className="font-normal text-xs md:text-sm lg:text-base text-[#9CA3AF]">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap-reverse w-[160px] gap-2 md:justify-center md:flex-wrap md:mt-4 lg:gap-[27px] lg:justify-between lg:w-[373px] lg:h-[34px] lg:flex-nowrap">
          <button
            className="w-[76px] h-[34px] rounded-lg border px-[2px] py-[3px] text-white flex justify-evenly items-center"
            onClick={() => {
              setBackgroundColour("#1A1B1E");
            }}
          >
            <img src="cart.png" alt="" className="h-3 w-3" />
            <p className="text-xs">Black</p>
          </button>
          <button
            className="w-[76px] h-[34px] rounded-lg border px-[2px] py-[3px] text-white flex justify-evenly items-center"
            onClick={() => {
              setBackgroundColour("#FF0038");
            }}
          >
            <img src="cart.png" alt="" className="h-3 w-3" />
            <p className="text-xs">Red</p>
          </button>
          <button
            className="w-[76px] h-[34px] rounded-lg border px-[2px] py-[3px] text-white flex justify-evenly items-center"
            onClick={() => {
              setBackgroundColour("#0BDA51");
            }}
          >
            <img src="cart.png" alt="" className="h-3 w-3" />
            <p className="text-xs">Green</p>
          </button>
          <button
            className="w-[76px] h-[34px] rounded-lg border px-[2px] py-[3px] text-white flex justify-evenly items-center"
            onClick={() => {
              setBackgroundColour("#0FC0FC");
            }}
          >
            <img src="cart.png" alt="" className="h-3 w-3" />
            <p className="text-xs">Blue</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
