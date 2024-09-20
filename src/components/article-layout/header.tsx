import gitHubWhiteIcon from '@public/github-mark-white.svg';
import gitHubIcon from '@public/github-mark.svg';
import rssIcon from '@public/rss-512.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const { title } = props;
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('color-theme');
    setIsDarkTheme(theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const theme = localStorage.getItem('color-theme');
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      setIsDarkTheme(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      setIsDarkTheme(true);
    }
  };

  return (
    <nav className="border-b p-4">
      <div className="flex flex-col sm:flex-row max-w-screen-lg m-auto">
        <div className="flex-auto">
          <Link className="no-underline" href={'/'}>
            <h1 className="leading-normal m-0">{title}</h1>
          </Link>
        </div>
        <div className="flex flex-1 gap-x-2 items-center justify-end">
          <button
            type="button"
            className="text-white bg-gray-300 hover:bg-gray-400 focus:ring-gray-500 focus:outline-none focus:ring-2 font-medium rounded-lg text-4xl px-1.5 pb-1 dark:bg-gray-100 dark:hover:dark:bg-gray-400 dark:focus:ring-gray-200"
            onClick={() => toggleTheme()}
          >
            🌓︎
          </button>
          <Link href="/rss.xml">
            <Image
              alt="rss icon"
              className="m-0 min-w-[44px]"
              height={44}
              src={rssIcon}
              width={44}
            />
          </Link>
          <Link
            href="https://github.com/binarydiver/template-nextjs-blog"
            target="_blank"
          >
            <Image
              alt="github icon"
              className="m-0 min-w-[44px]"
              height={43}
              src={isDarkTheme ? gitHubWhiteIcon : gitHubIcon}
              width={44}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
