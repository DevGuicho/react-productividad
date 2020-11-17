import React from 'react';
import '../assets/styles/ArticuloCongreso.css';
import { useHistory, useLocation } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import md5 from 'md5';
import { useDispatch } from '../store/StoreProvider';
import { ArticleCongressSchema } from '../utils/schemas/ArticleSchemas';

const ArticuloCongreso = () => {
  const dispatch = useDispatch();
  const historia = useHistory();
  const location = useLocation();
  const initialValues = location.state
    ? location.state.params
    : {
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
  const validationSchema = ArticleCongressSchema;

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
            <div className='outline__formAC'>
              <div className='input__RowAC'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='titulo'>
                    Titulo del Articulo
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
                  <label className='text__label' htmlFor='congreso'>
                    Nombre del Congreso
                  </label>
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
              </div>
              <div className='input__RowAC'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='fecha'>
                    Fecha del evento
                  </label>
                  <Field
                    className='input'
                    type='date'
                    name='fecha'
                    id='fecha'
                  />
                  <ErrorMessage
                    className='error'
                    name='fecha'
                    component='span'
                  />
                </div>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='url'>
                    URL del evento
                  </label>
                  <Field className='input' type='text' name='url' id='url' />
                  <ErrorMessage className='error' name='url' component='span' />
                </div>
              </div>
              <div className='input__RowAC'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='autor'>
                    Tipo de autor
                  </label>
                  <Field className='input' as='select' name='autor' id='autor'>
                    <option value=''>Seleccione una opción</option>
                    <option value='Autor Principal'>Principal</option>
                    <option value='Coautor'>Secundario</option>
                  </Field>
                  <ErrorMessage
                    className='error'
                    name='autor'
                    component='span'
                  />
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ArticuloCongreso;
