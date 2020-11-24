import * as Yup from 'yup';

const dateSchema = Yup.string().required('Campo Obligatorio');
const autorSchema = Yup.string().required('Campo Obligatorio');
const tesisSchema = Yup.string().required('Campo Obligatorio');
const urlSchema = Yup.string().url().required('Campo Obligatorio');
const titleSchema = Yup.string().required('Campo Obligatorio');

const detailSchema = Yup.string().required('Campo Obligatorio');
const DevelopSchema = Yup.object({
  titulo: titleSchema,
  autor: autorSchema,
  tesis: tesisSchema,
  url: urlSchema,
  desarrollo: Yup.object({
    licencia: Yup.string().required('Campo Obligatorio'),
    detalles: detailSchema,
    fecha: dateSchema,
  }),
});

export { DevelopSchema };
