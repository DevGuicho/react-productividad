import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import md5 from 'md5';
import { ChapterBookSchema } from '../utils/schemas/BookSchemas';
import ProductContext from '../context/products/productContext';

const CapituloLibro = () => {
  const historia = useHistory();
  const location = useLocation();
  const productContext = useContext(ProductContext);
  const { addProduct, updateProduct, error } = productContext;
  const initialValues = location.state
    ? location.state.params
    : {
        id: 0,
        titulo: '',
        autor: '',
        url: '',
        tesis: '',
        type: 'capituloLibro',
        libro: {
          titulo: '',
          editorial: '',
          edicion: '',
          fecha: '',
          isbn: '',
        },
      };
  const onSubmit = (product) => {
    if (location.state) {
      delete product._id;
      updateProduct(product);
    } else {
      product.id = md5(Date.now());
      addProduct(product);
    }
    if (!error) historia.push('/products');
  };
  const validationSchema = ChapterBookSchema;
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
              <h2>Informacion del Capitulo del Libro</h2>
              <div className='input__Row'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='titulo'>
                    Titulo del Libro
                  </label>
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
                  <label className='text__label' htmlFor='edicion'>
                    Edicion
                  </label>
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
                  <label className='text__label' htmlFor='isbn'>
                    ISBN
                  </label>
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
                  <label className='text__label' htmlFor='fecha'>
                    Año de publicación
                  </label>
                  <Field
                    className='input'
                    type='text'
                    name='libro.fecha'
                    id='fecha'
                  />
                  <ErrorMessage
                    className='error'
                    name='libro.fecha'
                    component='span'
                  />
                </div>
              </div>
              <div className='input__Row'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='titulo1'>
                    Titulo del Capitulo
                  </label>
                  <Field
                    className='input'
                    type='text'
                    name='titulo'
                    id='titulo1'
                  />
                  <ErrorMessage
                    className='error'
                    name='titulo'
                    component='span'
                  />
                </div>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='editorial'>
                    Editorial
                  </label>
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
              <h2>Informacion General</h2>
              <div className='input__Row'>
                <div className='inputControl'>
                  <label className='text__label' htmlFor='url'>
                    URL del evento
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
              <div className='input__Row'>
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

export default CapituloLibro;
