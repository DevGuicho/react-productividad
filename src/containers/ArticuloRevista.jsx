import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import md5 from 'md5';

import { ProductContext } from '../routes/App';
const ArticuloRevista = () => {
  const productContext = useContext(ProductContext);
  const historia = useHistory();
  const initialValues = {
    id: 0,
    titulo: '',
    autor: '',
    tesis: '',
    url: '',
    type: 'articuloRevista',
    revista: {
      nombre: '',
      tipo: '',
      indice: '',
      isnn: '',
      doi: '',
    },
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
    autor: Yup.string().required('Required'),
    tesis: Yup.string().required('Seleccione una opción'),
    url: Yup.string().url().required('Required'),
    revista: Yup.object({
      nombre: Yup.string().required('Required'),
      tipo: Yup.string().required('Required'),
      indice: Yup.string().required('Rerquired'),
      isnn: Yup.string().required('required'),
      doi: Yup.string().required('Required'),
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
              <h2>Articulo en Revista</h2>
              <p>
                Por favor llene el siguiente formulario para agreagar un
                articulo de revista
              </p>
            </div>
            <button className='btn' type='submit'>
              <i className='fas fa-save'></i>Guardar producto
            </button>
          </div>
          <div className='form'>
            <div className='inputControl'>
              <label htmlFor='titulo'>Titulo del Articulo</label>
              <Field className='input' type='text' name='titulo' id='titulo' />
              <ErrorMessage className='error' name='titulo' component='span' />
            </div>
            <div className='inputControl'>
              <label htmlFor='tipo'>Tipo de revista</label>
              <Field
                className='input'
                as='select'
                name='revista.tipo'
                id='tipo'
              >
                <option value=''>Seleccione una opción</option>
                <option value='Arbitrada'>Arbitrada</option>
                <option value='No Arbitrada'>No Arbitrada</option>
              </Field>
              <ErrorMessage
                className='error'
                name='revista.tipo'
                component='span'
              />
            </div>
            <div className='inputControl'>
              <label htmlFor='isnn'>ISNN</label>
              <Field
                className='input'
                type='text'
                name='revista.isnn'
                id='isnn'
              />
              <ErrorMessage
                className='error'
                name='revista.isnn'
                component='span'
              />
            </div>
            <div className='inputControl'>
              <label htmlFor='url'>URL del evento</label>
              <Field className='input' type='text' name='url' id='url' />
              <ErrorMessage className='error' name='url' component='span' />
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
              <label htmlFor='nombreRevista'>Nombre de la revista</label>
              <Field
                className='input'
                type='text'
                name='revista.nombre'
                id='nombreRevista'
              />

              <ErrorMessage
                className='error'
                name='revista.nombre'
                component='span'
              />
            </div>
            <div className='inputControl'>
              <label htmlFor='indice'>indice de la revista</label>
              <Field
                className='input'
                as='select'
                name='revista.indice'
                id='indice'
              >
                <option value=''>Seleccione una opción</option>
                <option value='Conacyt'>Conacy</option>
                <option value='JCR'>JCR</option>
                <option value='Otro'>Otro</option>
              </Field>
              <ErrorMessage
                className='error'
                name='revista.indice'
                component='span'
              />
            </div>
            <div className='inputControl'>
              <label htmlFor='doi'>DOI</label>
              <Field
                className='input'
                type='text'
                name='revista.doi'
                id='doi'
              />

              <ErrorMessage
                className='error'
                name='revista.doi'
                component='span'
              />
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
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ArticuloRevista;
