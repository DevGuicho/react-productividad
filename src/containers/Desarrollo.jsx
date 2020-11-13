import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import md5 from 'md5';
import { ProductContext } from '../routes/App';

const Desarrollo = () => {
  const productContext = useContext(ProductContext);
  const historia = useHistory();
  const location = useLocation();
  const initialValues = location.state
    ? location.state.params
    : {
        id: 0,
        titulo: '',
        fecha: '',
        autor: '',
        url: '',
        tesis: '',
        type: 'Desarrollo',
        licencia: '',
        desarrollo: {
          detalles: '',
        },
      };
  const onSubmit = (values) => {
    if (location.state) {
      productContext.productDispatch({
        type: 'UPDATE_PRODUCT',
        value: values,
      });
    } else {
      values.id = md5(values.titulo);
      productContext.productDispatch({
        type: 'ADD_PRODUCT',
        value: values,
      });
    }

    historia.push('/');
  };
  const validationSchema = Yup.object({
    titulo: Yup.string().required('Required'),
    fecha: Yup.string().required('Requires'),
    autor: Yup.string().required('Required'),
    tesis: Yup.string().required('Seleccione una opción'),
    url: Yup.string().url().required('Required'),
    licencia: Yup.string().required('Required'),
    desarrollo: Yup.object({
      detalles: Yup.string().required('Required'),
    }),
  });
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
            <div className='inputControl'>
              <label htmlFor='titulo'>Titulo del Desarrollo</label>
              <Field className='input' type='text' name='titulo' id='titulo' />
              <ErrorMessage className='error' name='titulo' component='span' />
            </div>
            <div className='inputControl'>
              <label htmlFor='fecha'>Año de publicación</label>
              <Field className='input' type='text' name='fecha' id='fecha' />
              <ErrorMessage className='error' name='fecha' component='span' />
            </div>
            <div className='inputControl'>
              <label htmlFor='licencia'>Licencia</label>
              <Field
                className='input'
                type='text'
                name='licencia'
                id='licencia'
              />
              <ErrorMessage
                className='error'
                name='licencia'
                component='span'
              />
            </div>
            <div className='inputControl'>
              <label htmlFor='url'>URL del repositorio</label>
              <Field className='input' type='text' name='url' id='url' />
              <ErrorMessage className='error' name='url' component='span' />
            </div>
            <div className='inputControl'>
              <label htmlFor='autor'>Tipo de autor</label>
              <Field className='input' as='select' name='autor' id='autor'>
                <option value=''>Seleccione una opción</option>
                <option value='Principal'>Principal</option>
                <option value='Secunadario'>Secundario</option>
              </Field>
              <ErrorMessage className='error' name='autor' component='span' />
            </div>

            <div className='inputControl'>
              <label htmlFor='tesis'>¿Esta relacionado con su tesis?</label>
              <Field className='input' as='select' name='tesis' id='tesis'>
                <option value=''>Seleccione una opción</option>
                <option value='Si'>Si</option>
                <option value='No'>No</option>
              </Field>
              <ErrorMessage className='error' name='tesis' component='span' />
            </div>
            <div className='inputControl'>
              <label htmlFor='detalles'>Detalles del desarrollo</label>
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
        </div>
      </Form>
    </Formik>
  );
};

export default Desarrollo;
