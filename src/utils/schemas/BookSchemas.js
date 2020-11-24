import * as Yup from 'yup';

const dateSchema = Yup.string().required('Campo Obligatorio');
const autorSchema = Yup.string().required('Campo Obligatorio');
const tesisSchema = Yup.string().required('Campo Obligatorio');
const urlSchema = Yup.string().url().required('Campo Obligatorio');
const titleSchema = Yup.string().required('Campo Obligatorio');

const bookEditorialSchema = Yup.string().required('Campo Obligatorio');
const bookEdicionSchema = Yup.string().required('Campo Obligatorio');
const bookISBNSchema = Yup.string('Formato Invalido')
  .matches(
    /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/,
    { message: 'Formato Invalido' }
  )
  .required('Campo Obligatorio');

const BookSchema = Yup.object({
  titulo: titleSchema,
  autor: autorSchema,
  tesis: tesisSchema,
  url: urlSchema,
  libro: Yup.object({
    editorial: bookEditorialSchema,
    edicion: bookEdicionSchema,
    fecha: dateSchema,
    isbn: bookISBNSchema,
  }),
});

const ChapterBookSchema = Yup.object({
  titulo: titleSchema,
  autor: autorSchema,
  tesis: tesisSchema,
  url: urlSchema,
  libro: Yup.object({
    titulo: titleSchema,
    editorial: bookEditorialSchema,
    edicion: bookEdicionSchema,
    fecha: dateSchema,
    isbn: bookISBNSchema,
  }),
});
export { BookSchema, ChapterBookSchema };
