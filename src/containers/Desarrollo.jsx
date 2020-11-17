import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import md5 from 'md5';
import { useDispatch } from '../store/StoreProvider';
import { DevelopSchema } from '../utils/schemas/DevelopSchemas';

const Desarrollo = () => {
  const dispatch = useDispatch();
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
            <div className='outline__formL'>
              <div className='input__RowL'>
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
                    name='fecha'
                    id='fecha'
                  />
                  <ErrorMessage
                    className='error'
                    name='fecha'
                    component='span'
                  />
                </div>
              </div>
              <div className='input__RowL'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='licencia'>
                    Licencia
                  </label>
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
                  <label className='text__label' htmlFor='url'>
                    URL del repositorio
                  </label>
                  <Field className='input' type='text' name='url' id='url' />
                  <ErrorMessage className='error' name='url' component='span' />
                </div>
              </div>
              <div className='input__RowL'>
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
              <div className='input__RowL'>
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
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Desarrollo;
