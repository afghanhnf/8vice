import React, { useState, useRef, useEffect } from 'react';

export default function AccordionFAQ({ items = [], className = '' }) {
  return (
    <div className={`accordion ${className}`}>
      {items.map((item, i) => (
        <AccordionItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = isOpen ? bodyRef.current.scrollHeight + 'px' : '0';
    }
  }, [isOpen]);

  return (
    <div className={`acc-item${isOpen ? ' is-open' : ''}`}>
      <button
        className="acc-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <span className="pm" />
      </button>
      <div className="acc-body" ref={bodyRef}>
        <div className="acc-body__inner">{answer}</div>
      </div>
    </div>
  );
}
