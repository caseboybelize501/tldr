import React from 'react';

interface CodeBlockProps {
  language?: string;
  children: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language = 'javascript', children }) => {
  return (
    <pre>
      <code className={`language-${language}`}>
        {children.trim()}
      </code>
    </pre>
  );
};