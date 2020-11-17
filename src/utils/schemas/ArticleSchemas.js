import * as Yup from 'yup';

const ArticleCongressSchema = Yup.object({
  titulo: Yup.string().required('Required'),
  congreso: Yup.string().required('Required'),
  fecha: Yup.date().required('Required'),
  autor: Yup.string().required('Required'),
  tesis: Yup.string().required('Seleccione una opción'),
  url: Yup.string().url().required('Required'),
});
const ArticleMagazineSchema = Yup.object({
  titulo: Yup.string().required('Required'),
  autor: Yup.string().required('Required'),
  tesis: Yup.string().required('Seleccione una opción'),
  url: Yup.string().url().required('Required'),
  revista: Yup.object({
    nombre: Yup.string().required('Required'),
    tipo: Yup.string().required('Required'),
    indice: Yup.string().required('Rerquired'),
    isnn: Yup.string().required('required'),
    doi: Yup.string().required('Required'),
  }),
});

export { ArticleCongressSchema, ArticleMagazineSchema };
