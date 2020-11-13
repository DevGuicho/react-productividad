import React, { useContext } from 'react';
import '../assets/styles/ArticuloCongreso.css';
import { useHistory } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ProductContext } from '../routes/App.js';
import md5 from 'md5';
const ArticuloCongreso = () => {
  const productContext = useContext(ProductContext);
  const historia = useHistory();
  const initialValues = {
    id: 0,
    titulo: '',
    congreso: '',
    fecha: '',
    autor: '',
    url: '',
    tesis: '',
    type: 'articuloCongreso',
  };
  const onSubmit = (values) => {
    values.id = md5(values.titulo);
    productContext.productDispatch({
      type: 'ADD_PRODUCT',
      value: values,
    });
    historia.push('/');
  };
  const validationSchema = Yup.object({
    titulo: Yup.string().required('Required'),
    congreso: Yup.string().required('Required'),
    fecha: Yup.date().required('Required'),
    autor: Yup.string().required('Required'),
    tesis: Yup.string().required('Seleccione una opción'),
    url: Yup.string().url().required('Required'),
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
              <h2>Seleccione un producto</h2>
              <p>
                Por favor llene el siguiente formulario para agreagar un
                articulo de congreso
              </p>
            </div>
            <button className='btn' type='submit'>
              <i className='fas fa-save'></i>Guardar producto
            </button>
          </div>
          <div className='form'>
            <div className='inputControl'>
              <label className='text__label' htmlFor='titulo'>Titulo del Articulo</label>
              <Field className='input' type='text' name='titulo' id='titulo' />
              <ErrorMessage className='error' name='titulo' component='span' />
            </div>
            <div className='inputControl'>
              <label className='text__label' htmlFor='congreso'>Nombre del Congreso</label>
              <Field
                className='input'
                type='text'
                name='congreso'
                id='congreso'
              />
              <ErrorMessage
                className='error'
                name='congreso'
                component='span'
              />
            </div>
            <div className='inputControl'>
              <label className='text__label' htmlFor='fecha'>Fecha del evento</label>
              <Field className='input' type='date' name='fecha' id='fecha' />
              <ErrorMessage className='error' name='fecha' component='span' />
            </div>
            <div className='inputControl'>
              <label  className='text__label' htmlFor='url'>URL del evento</label>
              <Field className='input' type='text' name='url' id='url' />
              <ErrorMessage className='error' name='url' component='span' />
            </div>
            <div className='inputControl'>
              <label className='text__label' htmlFor='autor'>Tipo de autor</label>
              <Field className='input' as='select' name='autor' id='autor'>
                <option value=''>Seleccione una opción</option>
                <option value='Principal'>Principal</option>
                <option value='Secunadario'>Secundario</option>
              </Field>
              <ErrorMessage className='error' name='autor' component='span' />
            </div>
            <div className='inputControl'>
              <label  className='text__label' htmlFor='tesis'>¿Esta relacionado con su tesis?</label>
              <Field className='input' as='select' name='tesis' id='tesis'>
                <option value=''>Seleccione una opción</option>
                <option value='Si'>Si</option>
                <option value='No'>No</option>
              </Field>
              <ErrorMessage className='error' name='tesis' component='span' />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ArticuloCongreso;
