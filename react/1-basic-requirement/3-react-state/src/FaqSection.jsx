import React from "react";
import Faq from "./Faq";

const FaqSection = () => {
  const questions = [
    {
      id: 1,
      question: "Is JSX required to use React?",
      answer:
        "No. JSX is optional. You can use plain JavaScript (React.createElement) to create elements, but JSX makes the code more readable and easier to write.",
    },
    {
      id: 2,
      question: "What is the difference between React and Angular?",
      answer:
        "React is a library for building user interfaces, while Angular is a full-fledged framework. React is more flexible and lightweight, while Angular provides more built-in features and tools.",
    },
    {
      id: 3,
      question: "How do I debug React code?",
      answer:
        "You can use browser developer tools to debug React code. You can also use React Developer Tools, a browser extension that provides additional features for debugging React applications.",
    },
    {
      id: 4,
      question:
        "What is the difference between class components and functional components in React?",
      answer:
        "Class components are defined using the ES6 class syntax and have access to lifecycle methods, while functional components are defined using JavaScript functions and do not have access to lifecycle methods. Functional components are more lightweight and easier to write, but class components can be more powerful for complex components.",
    },
    {
      id: 5,
      question: "How do I handle form data in React?",
      answer:
        "You can use the useState hook to manage form data in React. You can also use the useRef hook to access form elements directly.",
    },
  ];

  return(
  <>
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-5">Frequently Asked Questions</h2>
      <div className="flex flex-col">
        {questions.map((question) => (
          <Faq key={question.id} faq={question} />
        ))}
      </div>
    </div>
    ;
  </>
  )
};

export default FaqSection;
