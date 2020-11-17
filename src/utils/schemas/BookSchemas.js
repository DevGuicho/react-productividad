import * as Yup from 'yup';

const BookSchema = Yup.object({
  titulo: Yup.string().required('Required'),
  fecha: Yup.string().required('Requires'),
  autor: Yup.string().required('Required'),
  tesis: Yup.string().required('Seleccione una opción'),
  url: Yup.string().url().required('Required'),
  libro: Yup.object({
    editorial: Yup.string().required('Required'),
    edicion: Yup.string().required('Rerquired'),
    isbn: Yup.string().required('required'),
  }),
});

const ChapterBookSchema = Yup.object({
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
export { BookSchema, ChapterBookSchema };
