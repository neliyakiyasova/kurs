import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import api from '../api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
  const [peaks, setPeaks] = useState([]);
  const [stats, setStats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [peaksRes, statsRes] = await Promise.all([
          api.get('/peaks'),
          api.get('/stats/peak-popularity'),
        ]);
        setPeaks(peaksRes.data);
        setStats(statsRes.data);
      } catch (err) {
        setError(err.response?.data.message || 'Ошибка загрузки данных');
      }
    };
    fetchData();
  }, []);

  const chartData = {
    labels: stats.map((stat) => stat.name),
    datasets: [
      {
        label: 'Количество восхождений',
        data: stats.map((stat) => stat.count),
        backgroundColor: '#1565C0',
      },
    ],
  };

  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Статистика по горам</h2>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {peaks.map((peak) => (
          <div key={peak._id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-roboto">{peak.name}</h3>
            <p>Высота: {peak.height} м</p>
            <p>Страна: {peak.country}</p>
            <p>Количество восхождений: {stats.find(s => s.name === peak.name)?.count || 0}</p>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-roboto mb-4">Популярность вершин</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Популярность вершин' },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Statistics;


/*import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { peaks } from '../data/mockData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
  const chartData = {
    labels: peaks.map((peak) => peak.name),
    datasets: [
      {
        label: 'Количество восхождений',
        data: peaks.map(() => Math.floor(Math.random() * 10)),
        backgroundColor: '#1565C0',
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Статистика по горам</h2>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {peaks.map((peak) => (
          <div key={peak.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-roboto">{peak.name}</h3>
            <p>Высота: {peak.height} м</p>
            <p>Страна: {peak.country}</p>
            <p>Количество восхождений: {Math.floor(Math.random() * 10)}</p>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-roboto mb-4">Популярность вершин</h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Популярность вершин' },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Statistics;*/