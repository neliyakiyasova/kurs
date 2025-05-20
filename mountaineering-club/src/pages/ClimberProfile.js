import { useState, useEffect } from 'react';
import api from '../api';

const ClimberProfile = () => {
  const [climber, setClimber] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClimber = async () => {
      try {
        // Mock: Fetch logged-in user's climber profile (replace 'mock-id' with actual user ID from JWT)
        const res = await api.get('/climbers/mock-id');
        setClimber(res.data);
      } catch (err) {
        setError(err.response?.data.message || 'Ошибка загрузки профиля');
      }
    };
    fetchClimber();
  }, []);

  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!climber) return <div className="text-center py-8">Загрузка...</div>;

  return (
    <div>
      <h3 className="text-2xl font-roboto mb-4">Мой профиль</h3>
      <div className="bg-white p-6 rounded-lg shadow-md flex">
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          className="h-32 w-32 rounded-full mr-6"
        />
        <div>
          <h4 className="text-xl font-roboto">{climber.name}</h4>
          <p className="text-gray-600">Адрес: {climber.address || '-'}</p>
          <p className="text-gray-600">Контакт: {climber.contact || '-'}</p>
        </div>
      </div>
      <h3 className="text-xl font-roboto mt-6 mb-4">История восхождений</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-2">Гора</th>
            <th className="p-2">Дата</th>
            <th className="p-2">Группа</th>
          </tr>
        </thead>
        <tbody>
          {climber.ascents.map((ascent, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{ascent.peak?.name || '-'}</td>
              <td className="p-2">{ascent.date ? new Date(ascent.date).toLocaleDateString() : '-'}</td>
              <td className="p-2">{ascent.group || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClimberProfile;


/*import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const ClimberProfile = () => {
  const { id } = useParams();
  const [climber, setClimber] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClimber = async () => {
      try {
        const res = await api.get(`/climbers/${id || 'mock-id'}`);
        setClimber(res.data);
      } catch (err) {
        setError(err.response?.data.message || 'Ошибка загрузки профиля');
      }
    };
    fetchClimber();
  }, [id]);

  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!climber) return <div className="text-center py-8">Загрузка...</div>;

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Профиль альпиниста</h2>
      <div className="bg-white p-6 rounded-lg shadow-md flex">
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          className="h-32 w-32 rounded-full mr-6"
        />
        <div>
          <h3 className="text-2xl font-roboto">{climber.name}</h3>
          <p className="text-gray-600">Адрес: {climber.address || '-'}</p>
          <p className="text-gray-600">Контакт: {climber.contact || '-'}</p>
        </div>
      </div>
      <h3 className="text-xl font-roboto mt-6 mb-4">История восхождений</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-2">Гора</th>
            <th className="p-2">Дата</th>
            <th className="p-2">Группа</th>
          </tr>
        </thead>
        <tbody>
          {climber.ascents.map((ascent, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{ascent.peak?.name || '-'}</td>
              <td className="p-2">{ascent.date ? new Date(ascent.date).toLocaleDateString() : '-'}</td>
              <td className="p-2">{ascent.group || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClimberProfile;*/

/*import { climbers } from '../data/mockData';

const ClimberProfile = () => {
  const climber = climbers[0]; // Mock: using first climber

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Профиль альпиниста</h2>
      <div className="bg-white p-6 rounded-lg shadow-md flex">
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          className="h-32 w-32 rounded-full mr-6"
        />
        <div>
          <h3 className="text-2xl font-roboto">{climber.name}</h3>
          <p className="text-gray-600">Адрес: {climber.address}</p>
          <p className="text-gray-600">Контакт: {climber.contact}</p>
        </div>
      </div>
      <h3 className="text-xl font-roboto mt-6 mb-4">История восхождений</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-2">Гора</th>
            <th className="p-2">Дата</th>
            <th className="p-2">Группа</th>
          </tr>
        </thead>
        <tbody>
          {climber.ascents.map((ascent, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{ascent.peak}</td>
              <td className="p-2">{ascent.date}</td>
              <td className="p-2">{ascent.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClimberProfile;*/