import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import md5 from 'md5';
import { ProductContext } from '../routes/App';

const CapituloLibro = () => {
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
        type: 'capituloLibro',
        libro: {
          titulo: '',
          editorial: '',
          edicion: '',
          isbn: '',
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
    libro: Yup.object({
      titulo: Yup.string().required('Required'),
      editorial: Yup.string().required('Required'),
      edicion: Yup.string().required('Rerquired'),
      isbn: Yup.string().required('required'),
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
              <h2>Capitulo de libro</h2>
              <p>
                Por favor llene el siguiente formulario para agreagar un
                capitulo de libro
              </p>
            </div>
            <button className='btn' type='submit'>
              <i className='fas fa-save'></i>Guardar producto
            </button>
          </div>
          <div className='form'>
            <div className='outline__form'>
              <div className='input__Row'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='titulo'>Titulo del Libro</label>
                  <Field
                    className='input'
                    type='text'
                    name='libro.titulo'
                    id='titulo'
                  />
                  <ErrorMessage
                    className='error'
                    name='libro.titulo'
                    component='span'
                  />
                </div>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='edicion'>Edicion</label>
                  <Field
                    className='input'
                    type='text'
                    name='libro.edicion'
                    id='edicion'
                  />
                  <ErrorMessage
                    className='error'
                    name='libro.edicion'
                    component='span'
                  />
                </div>
              </div>
              <div className='input__Row'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='isbn'>ISBN</label>
                  <Field
                    className='input'
                    type='text'
                    name='libro.isbn'
                    id='isbn'
                  />
                  <ErrorMessage
                    className='error'
                    name='libro.isbn'
                    component='span'
                  />
                </div>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='url'>URL del evento</label>
                  <Field className='input' type='text' name='url' id='url' />
                  <ErrorMessage className='error' name='url' component='span' />
                </div>
              </div>
              <div className='input__Row'>
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
                  <label className='text__label' htmlFor='editorial'>Editorial</label>
                  <Field
                    className='input'
                    type='text'
                    name='libro.editorial'
                    id='editorial'
                  />
                  <ErrorMessage
                    className='error'
                    name='libro.editorial'
                    component='span'
                  />
                </div>
              </div>
              <div className='input__Row'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='fecha'>Año de publicación</label>
                  <Field className='input' type='text' name='fecha' id='fecha' />
                  <ErrorMessage className='error' name='fecha' component='span' />
                </div>
                
                <div className='inputControl'>
                  <label className='text__label' htmlFor='titulo1'>Titulo del Capitulo</label>
                  <Field className='input' type='text' name='titulo' id='titulo1' />
                  <ErrorMessage className='error' name='titulo' component='span' />
                </div>
              </div>
              <div className='input__Row'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='tesis'>¿Esta relacionado con su tesis?</label>
                  <Field className='input' as='select' name='tesis' id='tesis'>
                    <option value=''>Seleccione una opción</option>
                    <option value='Si'>Si</option>
                    <option value='No'>No</option>
                  </Field>
                  <ErrorMessage className='error' name='tesis' component='span' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default CapituloLibro;
