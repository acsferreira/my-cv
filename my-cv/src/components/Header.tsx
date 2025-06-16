import { useSelector } from 'react-redux';
import type { ICommonState } from '../types/common';

const Header: React.FC = () => {
  const { name, profession } = useSelector((state: ICommonState) => state.user);

  return (
    <header>
      <h1 className="full-name">{name}</h1>
      <h1>{profession}</h1>
    </header>
  );
};

export default Header;
