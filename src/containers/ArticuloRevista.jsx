import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import md5 from 'md5';
import '../assets/styles/ArticuloRevista.css'; //importarat

import { useDispatch } from '../store/StoreProvider';
import { ArticleMagazineSchema } from '../utils/schemas/ArticleSchemas';
const ArticuloRevista = () => {
  const dispatch = useDispatch();
  const historia = useHistory();
  const location = useLocation();
  const initialValues = location.state
    ? location.state.params
    : {
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
    if (location.state) {
      dispatch({
        type: 'UPDATE_PRODUCT',
        value: values,
      });
    } else {
      values.id = md5(values.titulo);
      dispatch({
        type: 'ADD_PRODUCT',
        value: values,
      });
    }

    historia.push('/');
  };
  const validationSchema = ArticleMagazineSchema;
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
          {/* Desde Aqui */}
          <div className='form'>
            <div className='outline__form'>
                <h2>Informacion de Articulo de Revista</h2>
              <div className='input__Row'>
                <div className='inputControl '>
                  <label className='text__label' htmlFor='titulo'>
                    Titulo del Articulo
                  </label>
                  <div className='input__group'>
                    <Field
                      className='input'
                      type='text'
                      name='titulo'
                      id='titulo'
                    />
                    <i className='input__validation fas fa-times-circle'></i>
                    <ErrorMessage
                      className='error'
                      name='titulo'
                      component='span'
                    />
                  </div>
                </div>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='nombreRevista'>
                    Nombre de la revista
                  </label>
                  <div className='input__group'>
                    <Field
                      className='input'
                      type='text'
                      name='revista.nombre'
                      id='nombreRevista'
                    />
                    <i className='input__validation fas fa-times-circle'></i>
                    <ErrorMessage
                      className='error'
                      name='revista.nombre'
                      component='span'
                    />
                  </div>
                </div>
              </div>
              <div className='input__Row'>
                <div className='inputControl '>
                  <label className='text__label' htmlFor='tipo'>
                    Tipo de revista
                  </label>
                  <div className='input__group'>
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
                    <i className='input__validation fas fa-times-circle'></i>
                    <ErrorMessage
                      className='error'
                      name='revista.tipo'
                      component='span'
                    />
                  </div>
                </div>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='indice'>
                    Indice de la revista
                  </label>
                  <div className='input__group'>
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
                    <i className='input__validation fas fa-times-circle'></i>
                    <ErrorMessage
                      className='error'
                      name='revista.indice'
                      component='span'
                    />
                  </div>
                </div>
              </div>

              <div className='input__Row'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='doi'>
                    DOI
                  </label>
                  <div className='input__group'>
                    <Field
                      className='input'
                      type='text'
                      name='revista.doi'
                      id='doi'
                    />
                    <i className='input__validation fas fa-times-circle'></i>
                    <ErrorMessage
                      className='error'
                      name='revista.doi'
                      component='span'
                    />
                  </div>
                </div>
                <div className='inputControl '>
                  <label className='text__label' htmlFor='isnn'>
                    ISSN
                  </label>
                  <div className='input__group'>
                    <Field
                      className='input'
                      type='text'
                      name='revista.isnn'
                      id='isnn'
                    />
                    <i className='input__validation fas fa-times-circle'></i>
                    <ErrorMessage
                      className='error'
                      name='revista.isnn'
                      component='span'
                    />
                  </div>
                </div>
              </div>
              <h2>Informacion General</h2>
              <div className='input__Row'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='url'>
                    URL del evento
                  </label>
                  <div className='input__group'>
                    <Field className='input' type='text' name='url' id='url' />
                    <i className='input__validation fas fa-times-circle'></i>
                    <ErrorMessage
                      className='error'
                      name='url'
                      component='span'
                    />
                  </div>
                </div>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='autor'>
                    Tipo de autor
                  </label>
                  <div className='input__group'>
                    <Field
                      className='input'
                      as='select'
                      name='autor'
                      id='autor'
                    >
                      <option value=''>Seleccione una opción</option>
                      <option value='Principal'>Principal</option>
                      <option value='Coautor'>Secundario</option>
                    </Field>
                    <i className='input__validation fas fa-times-circle'></i>
                    <ErrorMessage
                      className='error'
                      name='autor'
                      component='span'
                    />
                  </div>
                </div>
              </div>

              <div className='input__Row'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='tesis'>
                    ¿Esta relacionado con su tesis?
                  </label>
                  <div className='input__group'>
                    <Field
                      className='input'
                      as='select'
                      name='tesis'
                      id='tesis'
                    >
                      <option value=''>Seleccione una opción</option>
                      <option value='Relacionado con tesis'>Si</option>
                      <option value='No relacionado con tesis'>No</option>
                    </Field>
                    <i className='input__validation fas fa-times-circle'></i>
                    <ErrorMessage
                      className='error'
                      name='tesis'
                      component='span'
                    />
                  </div>
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

export default ArticuloRevista;
