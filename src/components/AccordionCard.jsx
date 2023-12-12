import { useState } from "react";

const AccordionCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full h-auto border-b border-gray-300 my-3">
      <div
      onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center p-5 ${
          isOpen ? `border-b border-gray-100` : null
        } leading-normal`}
      >
        <h1
          className={`${
            isOpen ? `text-lg` : `text-2xl`
          } text-gray-600 font-montserrat font-bold`}
        >
          {question}
        </h1>
        <h1
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-600 cursor-pointer"
        >
          {isOpen ? "-" : "+"}
        </h1>
      </div>
      {isOpen && (
        <p className="text-slate-gray font-montserrat text-lg p-5 transition-all duration-300 ease-out">{answer}</p>
      )}
    </section>
  );
};

export default AccordionCard;
