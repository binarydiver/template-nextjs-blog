import Prism from 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-js-extras.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/themes/prism-okaidia.min.css';
import { FC, PropsWithChildren, useEffect, useRef } from 'react';

interface CodeBlockProps extends PropsWithChildren {
  'data-language': string;
}

const CodeBlock: FC<CodeBlockProps> = props => {
  const { children, 'data-language': language } = props;
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current, false);
    }
  }, [children]);

  return (
    <div className="code" aria-live="polite">
      <pre ref={ref} className={`language-${language}`}>
        {children}
      </pre>
    </div>
  );
};

export default CodeBlock;
