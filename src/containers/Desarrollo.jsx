import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import md5 from 'md5';
import { useDispatch } from '../store/StoreProvider';
import { DevelopSchema } from '../utils/schemas/DevelopSchemas';
import '../assets/styles/Desarrollo.css';
const Desarrollo = () => {
  const dispatch = useDispatch();
  const historia = useHistory();
  const location = useLocation();
  const initialValues = location.state
    ? location.state.params
    : {
        id: 0,
        titulo: '',
        autor: '',
        url: '',
        tesis: '',
        type: 'Desarrollo',
        desarrollo: {
          detalles: '',
          fecha: '',
          licencia: '',
        },
      };
  const onSubmit = (values) => {
    if (location.state) {
      delete values._id;
      fetch(
        `https://productividad-api-devguicho.vercel.app/products/${values.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      )
        .then((res) => {
          dispatch({
            type: 'UPDATE_PRODUCT',
            value: values,
          });
        })
        .catch((err) => false);
    } else {
      values.id = md5(values.titulo);
      fetch('https://productividad-api-devguicho.vercel.app/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          dispatch({
            type: 'ADD_PRODUCT',
            value: values,
          });
        })
        .catch((err) => console.log(err));
    }

    historia.push('/products');
  };
  const validationSchema = DevelopSchema;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='main'>
        <div className='formulario'>
          <div className='formulario__header'>
            <div className='formulario__header--texto'>
              <h2>Desarrollo de Software o Hardware</h2>
              <p>
                Por favor llene el siguiente formulario para agreagar un
                desarrollo
              </p>
            </div>
            <button className='btn' type='submit'>
              <i className='fas fa-save'></i>Guardar producto
            </button>
          </div>
          <div className='form'>
            <div className='outline__formD'>
              <h2>Informacion del Desarrollo</h2>
              <div className='input__RowD'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='titulo'>
                    Titulo del Desarrollo
                  </label>
                  <Field
                    className='input'
                    type='text'
                    name='titulo'
                    id='titulo'
                  />
                  <ErrorMessage
                    className='error'
                    name='titulo'
                    component='span'
                  />
                </div>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='fecha'>
                    Año de publicación
                  </label>
                  <Field
                    className='input'
                    type='text'
                    name='desarrollo.fecha'
                    id='fecha'
                  />
                  <ErrorMessage
                    className='error'
                    name='desarrollo.fecha'
                    component='span'
                  />
                </div>
              </div>
              <div className='input__RowD'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='licencia'>
                    Licencia
                  </label>
                  <Field
                    className='input'
                    type='text'
                    name='desarrollo.licencia'
                    id='licencia'
                  />
                  <ErrorMessage
                    className='error'
                    name='desarrollo.licencia'
                    component='span'
                  />
                </div>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='detalles'>
                    Detalles del desarrollo
                  </label>
                  <Field
                    className='input'
                    as='textarea'
                    name='desarrollo.detalles'
                    id='detalles'
                  />
                  <ErrorMessage
                    className='error'
                    name='desarrollo.detalles'
                    component='span'
                  />
                </div>
              </div>
              <h2>Informacion General</h2>
              <div className='input__RowD'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='url'>
                    URL del repositorio
                  </label>
                  <Field className='input' type='text' name='url' id='url' />
                  <ErrorMessage className='error' name='url' component='span' />
                </div>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='autor'>
                    Tipo de autor
                  </label>
                  <Field className='input' as='select' name='autor' id='autor'>
                    <option value=''>Seleccione una opción</option>
                    <option value='Principal'>Principal</option>
                    <option value='Coautor'>Secundario</option>
                  </Field>
                  <ErrorMessage
                    className='error'
                    name='autor'
                    component='span'
                  />
                </div>
              </div>
              <div className='input__RowD'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='tesis'>
                    ¿Esta relacionado con su tesis?
                  </label>
                  <Field className='input' as='select' name='tesis' id='tesis'>
                    <option value=''>Seleccione una opción</option>
                    <option value='Relacionado con tesis'>Si</option>
                    <option value='No relacionado con tesis'>No</option>
                  </Field>
                  <ErrorMessage
                    className='error'
                    name='tesis'
                    component='span'
                  />
                </div>
                <div className='inputControl'></div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Desarrollo;
