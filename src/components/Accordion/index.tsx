import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiPlus, FiMinus } from 'react-icons/fi';

export interface AccordionProps {
  title: string;
  content: string;
  type?: 'arrow' | 'plus';
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, type = 'arrow', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const renderIcon = () => {
    if (type === 'arrow') {
      return <FiChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />;
    } else if (type === 'plus') {
      return isOpen ? <FiMinus className="transition-opacity duration-300" /> : <FiPlus className="transition-opacity duration-300" />;
    }
  };

  return (
    <div className={`border rounded-md overflow-hidden ${className}`}>
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        {renderIcon()}
      </button>
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="transition-[height] duration-300 ease-in-out"
      >
        <div className="p-4 border-t">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

