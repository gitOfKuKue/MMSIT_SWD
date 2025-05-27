import React from "react";

const Faq = ({ faq: { id, question, answer } }) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    // console.log("open answer");
    setOpen(!open);
  };
  return (
    <div className="">
      <div
        className="flex justify-between items-center border border-black p-5 cursor-pointer select-none active:scale-95 duration-200"
        onClick={handleToggle}
      >
        <h1 className={`text-xl ${open === true && "font-bold"}`}>{question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-500 ${open === true && "rotate-180"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <p className={`bg-gray-200 p-5 ${open === false && "hidden"}`}>
        {answer}
      </p>
    </div>
  );
};

export default Faq;
