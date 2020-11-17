import * as Yup from 'yup';

const congressSchema = Yup.string().required('Required');

const titleSchema = Yup.string().required('Required');
const dateSchema = Yup.date().required('Required');
const autorSchema = Yup.string().required('Required');
const tesisShema = Yup.string().required('Seleccione una opción');
const urlSchema = Yup.string().url().required('Required');

const magazineNameSchema = Yup.string().required('Required');
const magazineTypeSchema = Yup.string().required('Required');
const magazineIndexSchema = Yup.string().required('Rerquired');
const magazineISSNSchema = Yup.string().required('required');
const magazineDOISchema = Yup.string().required('Required');

const ArticleCongressSchema = Yup.object({
  titulo: titleSchema,
  congreso: congressSchema,
  fecha: dateSchema,
  autor: autorSchema,
  tesis: tesisShema,
  url: urlSchema,
});
const ArticleMagazineSchema = Yup.object({
  titulo: titleSchema,
  autor: autorSchema,
  tesis: tesisShema,
  url: urlSchema,
  revista: Yup.object({
    nombre: magazineNameSchema,
    tipo: magazineTypeSchema,
    indice: magazineIndexSchema,
    isnn: magazineISSNSchema,
    doi: magazineDOISchema,
  }),
});

export { ArticleCongressSchema, ArticleMagazineSchema };
