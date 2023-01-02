import clsx from 'clsx';

import cl from './TabButton.module.css';

interface TabButtonProps {
  children: string;
  isActive?: boolean;
  handleClick: () => void;
}

const TabButton = ({ children, isActive, handleClick }: TabButtonProps) => {
  return (
    <button className={clsx(cl.button, isActive && cl.active)} onClick={handleClick}>
      {children}
    </button>
  );
};

export default TabButton;
