import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-primary text-white p-4 shadow-md">
      <ul className="flex space-x-6 max-w-7xl mx-auto">
        <li>
          <NavLink to="/" className="hover:underline" activeClassName="font-bold">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/ascents" className="hover:underline" activeClassName="font-bold">Восхождения</NavLink>
        </li>
        <li>
          <NavLink to="/add-peak" className="hover:underline" activeClassName="font-bold">Добавить вершину</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="hover:underline" activeClassName="font-bold">Профиль</NavLink>
        </li>
        <li>
          <NavLink to="/add-group" className="hover:underline" activeClassName="font-bold">Добавить группу</NavLink>
        </li>
        <li>
          <NavLink to="/stats" className="hover:underline" activeClassName="font-bold">Статистика</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;