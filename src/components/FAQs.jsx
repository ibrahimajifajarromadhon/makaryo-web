import { useState } from "react";
import {FaqsData} from "../data/Data";

const Faqs = () => {
  const faqs = FaqsData;

  const [isOpen, setIsOpen] = useState({});

  const toggleFaq = (id) => {
    setIsOpen((openFaqs) => ({
      ...openFaqs,
      [id]: !openFaqs[id],
    }));
  };

  return (
    <section
      id="faq"
      className="relative min-h-auto flex flex-col md:flex-row items-start bg-gray-100 overflow-hidden py-20 md:px-16"
    >
      <div className="w-full md:w-1/2 px-4 md:px-6">
        <h2 className="text-5xl font-bold">FAQs</h2>
        <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="w-full md:w-2/3 max-w-2xl px-4 md:px-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="divide-y divide-slate-200 shadow shadow-orange-400 rounded-md mt-2 px-3 py-1"
          >
            <div className="py-2">
              <h2>
                <button
                  id={i}
                  type="button"
                  className="flex items-center justify-between w-full text-left font-semibold py-2"
                  aria-controls={i}
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.title}</span>
                  <svg
                    className="fill-orange-500 shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isOpen[i] ? (
                      // Tanda "-"
                      <rect y="7" width="16" height="2" rx="1" />
                    ) : (
                      //Tanda "+"
                      <>
                        <rect y="7" width="16" height="2" rx="1" />
                        <rect x="7" y="0" width="2" height="16" rx="1" />
                      </>
                    )}
                  </svg>
                </button>
              </h2>
              <div
                id={i}
                role="region"
                aria-labelledby={i}
                className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen[i] ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-3">{faq.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
