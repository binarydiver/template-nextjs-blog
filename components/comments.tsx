import Script, { ScriptProps } from 'next/script';

const ScriptExtended = (
  props: ScriptProps & {
    repo: string;
    label: string;
    theme: string;
    crossorigin: string;
  }
) => {
  return <Script {...props} />;
};

const Comments = () => {
  return (
    <ScriptExtended
      src="https://utteranc.es/client.js"
      repo="binarydiver/template-nextjs-blog"
      issue-term="pathname"
      label="comment"
      theme="github-dark"
      crossorigin="anonymous"
      async
    ></ScriptExtended>
  );
};

export default Comments;
