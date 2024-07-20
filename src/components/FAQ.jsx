import React, { useState } from 'react';

const FAQ = () => {

  const faqs = [
    {
      question: 'How do I get started with Car Rental?',
      answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
    },
    {
      question: 'Can I rent a car with a debit card?',
      answer: 'Yes, you can rent a car with a debit card. However, some restrictions may apply depending on the rental company policies.',
    },
    {
      question: 'What kind of Car Rental do I need?',
      answer: 'The type of car rental you need depends on your travel plans, the number of passengers, and your personal preferences.',
    },
    {
      question: 'What is a rental car security deposit?',
      answer: 'A rental car security deposit is a temporary hold on your credit card to cover any potential damages or extra charges incurred during your rental period.',
    },
    {
      question: 'Can I cancel or modify my reservation?',
      answer: 'Yes, you can cancel or modify your reservation, but please refer to the rental company’s cancellation policy for details.',
    },
    {
      question: 'Is it possible to extend my rental period?',
      answer: 'Yes, you can extend your rental period. Contact the rental company as soon as possible to make arrangements.',
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-80">
      <div className="text-center mb-12 flex flex-col justify-center items-center">
        <div className="text-green-600 font-bold text-base bg-gray-300 rounded-xl p-3">Do You Have</div>
        <h2 className="text-4xl font-bold mt-2">Any Questions?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left text-lg font-medium text-gray-900 border-b border-green-400 pb-2" // Add border and padding bottom
      >
        {question}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-6 h-6 bg-green-600 text-white" // Update color class if needed
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && <p className="mt-4 text-gray-700">{answer}</p>}
    </div>
  );
};

export default FAQ;
