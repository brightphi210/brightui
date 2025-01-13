import React from 'react';
export interface AccordionProps {
    title: string;
    content: string;
    type?: 'arrow' | 'plus';
    className?: string;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
