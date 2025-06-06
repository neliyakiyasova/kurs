import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const validationSchema = Yup.object({
  email: Yup.string().email('Неверный email').required('Обязательное поле'),
  password: Yup.string().min(6, 'Минимум 6 символов').required('Обязательное поле'),
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  return (
    <div>
      <h3 className="text-2xl font-roboto mb-4">Регистрация</h3>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await api.post('/auth/register', { ...values, isAdmin: false });
            alert('Регистрация успешна! Пожалуйста, войдите.');
            navigate('/profile/login');
          } catch (err) {
            setError(err.response?.data.message || 'Ошибка регистрации');
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full border p-2 rounded"
                placeholder="example@example.com"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Пароль</label>
              <Field
                name="password"
                type="password"
                className="w-full border p-2 rounded"
                placeholder="Пароль"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Зарегистрироваться
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
