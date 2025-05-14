"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  className?: string;
}

const FAQItem = ({ question, answer, className = "" }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b border-gray-200 py-4 ${className}`}>
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <h3 className="text-base font-medium text-gray-900">{question}</h3>
        <svg
          className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
        className={`mt-2 overflow-hidden transition-all ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <p className="text-sm text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
