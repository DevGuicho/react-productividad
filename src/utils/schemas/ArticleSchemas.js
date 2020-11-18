import * as Yup from 'yup';

const congressSchema = Yup.string().required('Campo Obligatorio');
const titleSchema = Yup.string().required('Campo Obligatorio');
const dateSchema = Yup.date().required('Campo Obligatorio');
const autorSchema = Yup.string().required('Campo Obligatorio');
const tesisShema = Yup.string().required('Campo Obligatorio');
const urlSchema = Yup.string().url().required('Campo Obligatorio');

const magazineNameSchema = Yup.string().required('Campo Obligatorio');
const magazineTypeSchema = Yup.string().required('Campo Obligatorio');
const magazineIndexSchema = Yup.string().required('Campo Obligatorio');
const magazineISSNSchema = Yup.string('Formato Invalido')
  .matches(/^(ISSN )?[\S]{4}\-[\S]{4}$/, { message: 'Formato Invalido' })
  .required('Campo Obligatorio');
const magazineDOISchema = Yup.string('Formarto Invalido')
  .matches(/^.*(10\.[A-Za-z0-9.\/-]+)(?<!\.)(?=[ ]|\.).*$/, {
    message: 'Formato Invalido',
  })
  .required('Campo Obligatorio');

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
