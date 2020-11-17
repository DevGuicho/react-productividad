import * as Yup from 'yup';

const dateSchema = Yup.string().required('Requires');
const autorSchema = Yup.string().required('Required');
const tesisSchema = Yup.string().required('Seleccione una opción');
const urlSchema = Yup.string().url().required('Required');
const titleSchema = Yup.string().required('Required');

const bookEditorialSchema = Yup.string().required('Required');
const bookEdicionSchema = Yup.string().required('Rerquired');
const bookISBNSchema = Yup.string('formato invalido')
  .matches(
    /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/,
    { message: 'Formato invalido' }
  )
  .required('required');

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
