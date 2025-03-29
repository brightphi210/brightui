import type React from "react";
export interface CodeBlockProps {
    children: string;
    showCopyButton?: boolean;
    className?: string;
    showDots?: boolean;
}
declare const CodeBlock: React.FC<CodeBlockProps>;
export default CodeBlock;
