import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../api';

const validationSchema = Yup.object({
  peak: Yup.string().required('Обязательное поле'),
  startDate: Yup.date().required('Обязательное поле').nullable(),
  participants: Yup.array().min(1, 'Выберите хотя бы одного участника'),
});

const AddGroup = () => {
  const [peaks, setPeaks] = useState([]);
  const [climbers, setClimbers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [peaksRes, climbersRes] = await Promise.all([
          api.get('/peaks'),
          api.get('/climbers'),
        ]);
        setPeaks(peaksRes.data);
        setClimbers(climbersRes.data);
      } catch (err) {
        setError(err.response?.data.message || 'Ошибка загрузки данных');
      }
    };
    fetchData();
  }, []);

  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Добавление группы</h2>
      <Formik
        initialValues={{ peak: '', startDate: '', participants: [] }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await api.post('/ascents', values);
            alert('Группа добавлена!');
          } catch (err) {
            setErrors({ submit: err.response?.data.message || 'Ошибка сервера' });
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <div className="mb-4">
              <label className="block mb-1">Вершина</label>
              <Field as="select" name="peak" className="w-full border p-2 rounded">
                <option value="">Выберите вершину</option>
                {peaks.map((peak) => (
                  <option key={peak._id} value={peak._id}>
                    {peak.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="peak" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Дата начала</label>
              <Field
                name="startDate"
                type="date"
                className="w-full border p-2 rounded"
              />
              <ErrorMessage name="startDate" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Участники</label>
              <Field
                as="select"
                name="participants"
                multiple
                className="w-full border p-2 rounded h-32"
              >
                {climbers.map((climber) => (
                  <option key={climber._id} value={climber._id}>
                    {climber.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="participants" component="div" className="text-red-500 text-sm" />
            </div>
            {errors.submit && <div className="text-red-500 mb-4">{errors.submit}</div>}
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Начать восхождение
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddGroup;


/*import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { peaks, climbers } from '../data/mockData';

const validationSchema = Yup.object({
  peak: Yup.string().required('Обязательное поле'),
  startDate: Yup.date().required('Обязательное поле').nullable(),
  participants: Yup.array().min(1, 'Выберите хотя бы одного участника'),
});

const AddGroup = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Добавление группы</h2>
      <Formik
        initialValues={{ peak: '', startDate: '', participants: [] }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('New Group:', values);
        }}
      >
        <Form className="bg-white p-6 rounded-lg shadow-md max-w-md">
          <div className="mb-4">
            <label className="block mb-1">Вершина</label>
            <Field as="select" name="peak" className="w-full border p-2 rounded">
              <option value="">Выберите вершину</option>
              {peaks.map((peak) => (
                <option key={peak.id} value={peak.name}>
                  {peak.name}
                </option>
              ))}
            </Field>
            <ErrorMessage name="peak" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Дата начала</label>
            <Field
              name="startDate"
              type="date"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage name="startDate" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Участники</label>
            <Field
              as="select"
              name="participants"
              multiple
              className="w-full border p-2 rounded h-32"
            >
              {climbers.map((climber) => (
                <option key={climber.id} value={climber.name}>
                  {climber.name}
                </option>
              ))}
            </Field>
            <ErrorMessage name="participants" component="div" className="text-red-500 text-sm" />
          </div>
          <button type="submit" className="btn btn-primary">
            Начать восхождение
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddGroup;*/