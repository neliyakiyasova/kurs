import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import ClimberProfile from './ClimberProfile';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const ProfileSection = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Профиль</h2>
      <div className="flex">
        <div className="w-1/4">
          <nav className="space-y-2">
            {isAuthenticated ? (
              <>
                <NavLink
                  to="/profile/view"
                  className={({ isActive }) =>
                    isActive ? 'block p-2 bg-primary text-white rounded' : 'block p-2 hover:bg-gray-200 rounded'
                  }
                >
                  Мой профиль
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="w-full text-left p-2 hover:bg-gray-200 rounded"
                >
                  Выйти
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/profile/login"
                  className={({ isActive }) =>
                    isActive ? 'block p-2 bg-primary text-white rounded' : 'block p-2 hover:bg-gray-200 rounded'
                  }
                >
                  Вход
                </NavLink>
                <NavLink
                  to="/profile/register"
                  className={({ isActive }) =>
                    isActive ? 'block p-2 bg-primary text-white rounded' : 'block p-2 hover:bg-gray-200 rounded'
                  }
                >
                  Регистрация
                </NavLink>
              </>
            )}
          </nav>
        </div>
        <div className="w-3/4 pl-8">
          <Routes>
            <Route path="/view" element={<ClimberProfile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<ClimberProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;