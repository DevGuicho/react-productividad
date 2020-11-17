import * as Yup from 'yup';

const dateSchema = Yup.string().required('Requires');
const autorSchema = Yup.string().required('Required');
const tesisSchema = Yup.string().required('Seleccione una opción');
const urlSchema = Yup.string().url().required('Required');
const titleSchema = Yup.string().required('Required');
const bookEditorialSchema = Yup.string().required('Required');

const bookEdicionSchema = Yup.string().required('Rerquired');
const bookISBNSchema = Yup.string().required('required');

const BookSchema = Yup.object({
  titulo: titleSchema,
  fecha: dateSchema,
  autor: autorSchema,
  tesis: tesisSchema,
  url: urlSchema,
  libro: Yup.object({
    editorial: bookEditorialSchema,
    edicion: bookEdicionSchema,
    isbn: bookISBNSchema,
  }),
});

const ChapterBookSchema = Yup.object({
  titulo: titleSchema,
  fecha: dateSchema,
  autor: autorSchema,
  tesis: tesisSchema,
  url: urlSchema,
  libro: Yup.object({
    titulo: titleSchema,
    editorial: bookEditorialSchema,
    edicion: bookEdicionSchema,
    isbn: bookISBNSchema,
  }),
});
export { BookSchema, ChapterBookSchema };
