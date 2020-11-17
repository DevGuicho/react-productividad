import * as Yup from 'yup';

const DevelopSchema = Yup.object({
  titulo: Yup.string().required('Required'),
  fecha: Yup.string().required('Requires'),
  autor: Yup.string().required('Required'),
  tesis: Yup.string().required('Seleccione una opción'),
  url: Yup.string().url().required('Required'),
  licencia: Yup.string().required('Required'),
  desarrollo: Yup.object({
    detalles: Yup.string().required('Required'),
  }),
});

export { DevelopSchema };
