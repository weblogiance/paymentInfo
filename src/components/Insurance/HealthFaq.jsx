import React ,{useState}from 'react'
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
      question: "Does the Health Insurance policy cover COVID-19 treatment?",
      answer: "Yes, most health insurance policies now cover COVID-19 treatment. Coverage includes hospitalization, medication, and other related medical expenses as per policy terms."
    },
    {
      question: "How to compare Health Insurance plans?",
      answer: "Compare plans based on coverage, premium costs, network hospitals, claim settlement ratio, waiting periods, and additional benefits. Also consider sub-limits and exclusions."
    },
    {
      question: "How to calculate Health Insurance premiums?",
      answer: "Premiums are calculated based on age, medical history, coverage amount, policy term, and additional riders. Use online premium calculators for accurate estimates."
    },
    {
      question: "What are the documents required for Health Insurance?",
      answer: "Required documents include ID proof, age proof, address proof, medical reports (if any), and photographs. Additional documents may be needed based on policy type."
    },
    {
      question: "What is the age criteria to get Health Insurance?",
      answer: "Most insurers offer coverage from 3 months to 65 years. Some policies have no upper age limit for renewal. Entry age requirements vary by insurer and policy type."
    }
  ];

function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div className=" w-full border-b border-blue-200">
            <button
                className="w-full py-4 px-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-300"
                onClick={onClick}
            >
                <span className="text-blue-500 font-medium">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <p className="p-6 text-gray-600">{answer}</p>
            </div>
        </div>
    );
}

const HealthFaq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className=' w-11/12 flex  mx-auto'>
                <div className=" mx-auto px-4 py-12 max-w-3xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold  mb-4">Got questions?</h1>
                        <p className="text-xl text-gray-600">Read on to find out more!</p>
                    </div>

                    <div className="bg-white border rounded-xl w-full  overflow-hidden">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={activeIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthFaq
