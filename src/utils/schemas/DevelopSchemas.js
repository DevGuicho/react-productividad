import * as Yup from 'yup';

const dateSchema = Yup.string().required('Requires');
const autorSchema = Yup.string().required('Required');
const tesisSchema = Yup.string().required('Seleccione una opción');
const urlSchema = Yup.string().url().required('Required');
const titleSchema = Yup.string().required('Required');

const detailSchema = Yup.string().required('Required');
const DevelopSchema = Yup.object({
  titulo: titleSchema,
  fecha: dateSchema,
  autor: autorSchema,
  tesis: tesisSchema,
  url: urlSchema,
  licencia: Yup.string().required('Required'),
  desarrollo: Yup.object({
    detalles: detailSchema,
  }),
});

export { DevelopSchema };
