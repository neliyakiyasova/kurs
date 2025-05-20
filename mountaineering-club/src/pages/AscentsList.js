import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AscentsList = () => {
  const [ascents, setAscents] = useState([]);
  const [peaks, setPeaks] = useState([]);
  const [filters, setFilters] = useState({
    startDate: '',
    peak: '',
    country: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ascentsRes, peaksRes] = await Promise.all([
          axios.get('http://localhost:5000/api/ascents', { params: filters }),
          axios.get('http://localhost:5000/api/peaks'),
        ]);
        setAscents(ascentsRes.data);
        setPeaks(peaksRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Список восхождений</h2>
      <div className="flex space-x-4 mb-6">
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
          className="border p-2 rounded"
          placeholder="Период"
        />
        <select
          name="peak"
          value={filters.peak}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">Все горы</option>
          {peaks.map((peak) => (
            <option key={peak._id} value={peak._id}>
              {peak.name}
            </option>
          ))}
        </select>
        <select
          name="country"
          value={filters.country}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">Все страны</option>
          <option value="Россия">Россия</option>
          <option value="Франция">Франция</option>
        </select>
        <Link to="/add-group" className="btn btn-primary">
          Добавить группу
        </Link>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-2">Дата начала</th>
            <th className="p-2">Дата завершения</th>
            <th className="p-2">Гора</th>
            <th className="p-2">Участники</th>
          </tr>
        </thead>
        <tbody>
          {ascents.map((ascent) => (
            <tr key={ascent._id} className="border-b">
              <td className="p-2">{new Date(ascent.startDate).toLocaleDateString()}</td>
              <td className="p-2">{ascent.endDate ? new Date(ascent.endDate).toLocaleDateString() : '-'}</td>
              <td className="p-2">{ascent.peak.name}</td>
              <td className="p-2">{ascent.participants.map(p => p.name).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AscentsList;



/*import { useState } from 'react';
import { ascents, peaks } from '../data/mockData';
import { Link } from 'react-router-dom';

const AscentsList = () => {
  const [filters, setFilters] = useState({
    startDate: '',
    peak: '',
    country: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredAscents = ascents.filter((ascent) => {
    const peak = peaks.find((p) => p.name === ascent.peak);
    return (
      (!filters.startDate || ascent.startDate >= filters.startDate) &&
      (!filters.peak || ascent.peak === filters.peak) &&
      (!filters.country || peak?.country === filters.country)
    );
  });

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Список восхождений</h2>
      <div className="flex space-x-4 mb-6">
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
          className="border p-2 rounded"
          placeholder="Период"
        />
        <select
          name="peak"
          value={filters.peak}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">Все горы</option>
          {peaks.map((peak) => (
            <option key={peak.id} value={peak.name}>
              {peak.name}
            </option>
          ))}
        </select>
        <select
          name="country"
          value={filters.country}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">Все страны</option>
          <option value="Россия">Россия</option>
          <option value="Франция">Франция</option>
        </select>
        <Link to="/add-group" className="btn btn-primary">
          Добавить группу
        </Link>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-2">Дата начала</th>
            <th className="p-2">Дата завершения</th>
            <th className="p-2">Гора</th>
            <th className="p-2">Участники</th>
          </tr>
        </thead>
        <tbody>
          {filteredAscents.map((ascent) => (
            <tr key={ascent.id} className="border-b">
              <td className="p-2">{ascent.startDate}</td>
              <td className="p-2">{ascent.endDate}</td>
              <td className="p-2">{ascent.peak}</td>
              <td className="p-2">{ascent.participants.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AscentsList;*/