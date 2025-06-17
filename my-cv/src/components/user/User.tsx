import { useAppSelector } from '../../utils/hooks/redux';

const Header: React.FC = () => {
  const { name, profession } = useAppSelector(state => state.user);

  return (
    <header className="">
      <h1 className="full-name">{name}</h1>
      <h1>{profession}</h1>
    </header>
  );
};

export default Header;
