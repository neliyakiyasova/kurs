import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../api';

const validationSchema = Yup.object({
  name: Yup.string().required('Обязательное поле'),
  height: Yup.number().required('Обязательное поле').positive('Должно быть положительным'),
  country: Yup.string().required('Обязательное поле'),
  region: Yup.string().required('Обязательное поле'),
});

const AddPeak = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Добавление новой вершины</h2>
      <Formik
        initialValues={{ name: '', height: '', country: '', region: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await api.post('/peaks', values);
            alert('Вершина добавлена!');
          } catch (err) {
            setErrors({ submit: err.response?.data.message || 'Ошибка сервера' });
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="bg-white p-6 rounded-lg shadow-md max-w-md">
            <div className="mb-4">
              <label className="block mb-1">Название вершины</label>
              <Field
                name="name"
                type="text"
                className="w-full border p-2 rounded"
                placeholder="Эльбрус"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Высота (м)</label>
              <Field
                name="height"
                type="number"
                className="w-full border p-2 rounded"
                placeholder="5642"
              />
              <ErrorMessage name="height" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Страна</label>
              <Field as="select" name="country" className="w-full border p-2 rounded">
                <option value="">Выберите страну</option>
                <option value="Россия">Россия</option>
                <option value="Франция">Франция</option>
              </Field>
              <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Район</label>
              <Field as="select" name="region" className="w-full border p-2 rounded">
                <option value="">Выберите район</option>
                <option value="Кавказ">Кавказ</option>
                <option value="Альпы">Альпы</option>
              </Field>
              <ErrorMessage name="region" component="div" className="text-red-500 text-sm" />
            </div>
            {errors.submit && <div className="text-red-500 mb-4">{errors.submit}</div>}
            <div className="flex space-x-4">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Сохранить
              </button>
              <button type="reset" className="btn btn-secondary" disabled={isSubmitting}>
                Отмена
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPeak;

/*import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Обязательное поле'),
  height: Yup.number().required('Обязательное поле').positive('Должно быть положительным'),
  country: Yup.string().required('Обязательное поле'),
  region: Yup.string().required('Обязательное поле'),
});

const AddPeak = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-roboto mb-6">Добавление новой вершины</h2>
      <Formik
        initialValues={{ name: '', height: '', country: '', region: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('New Peak:', values);
        }}
      >
        <Form className="bg-white p-6 rounded-lg shadow-md max-w-md">
          <div className="mb-4">
            <label className="block mb-1">Название вершины</label>
            <Field
              name="name"
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Эльбрус"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Высота (м)</label>
            <Field
              name="height"
              type="number"
              className="w-full border p-2 rounded"
              placeholder="5642"
            />
            <ErrorMessage name="height" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Страна</label>
            <Field as="select" name="country" className="w-full border p-2 rounded">
              <option value="">Выберите страну</option>
              <option value="Россия">Россия</option>
              <option value="Франция">Франция</option>
            </Field>
            <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Район</label>
            <Field as="select" name="region" className="w-full border p-2 rounded">
              <option value="">Выберите район</option>
              <option value="Кавказ">Кавказ</option>
              <option value="Альпы">Альпы</option>
            </Field>
            <ErrorMessage name="region" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="flex space-x-4">
            <button type="submit" className="btn btn-primary">
              Сохранить
            </button>
            <button type="reset" className="btn btn-secondary">
              Отмена
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddPeak;*/