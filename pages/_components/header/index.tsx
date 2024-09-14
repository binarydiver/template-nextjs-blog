import Link from 'next/link';

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const { title } = props;

  return (
    <nav className="border-b flex items-center justify-center p-4">
      <Link className="no-underline" href={'/'}>
        <h1 className="leading-normal m-0">{title}</h1>
      </Link>
    </nav>
  );
};

export default Header;
