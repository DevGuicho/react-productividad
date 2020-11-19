const usuarios = [
  {
    id: 1,
    nombre: 'Luis Vazquez Padilla',
    rfc: 'VAPL000903SH2',
    curp: 'VAPL000903HMZSDA6',
    email: 'luisvp@correo.com',
    estudiante: 'Maestria',
    productos: [
      {
        id: 1,
        titulo:
          'Las profesiones, las lenguas y el español. Una mirada hacia el futuro',
        congreso:
          'Congreso Internacional de Español para Fines Específicos (CIEFE)',
        fecha: '2018',
        autor: 'Autor Principal',
        url:
          'http://www.educacionyfp.gob.es/paisesbajos/dam/jcr:6741f1ec-7200-4d64-b36d-5cbaae68641f/actas.vi.ciefe.def.pdf',
        tesis: 'No Relacionado con Tesis',
        type: 'articuloCongreso',
      },
    ],
  },
  {
    id: 2,
    nombre: 'Lilia Montserrat Fuentes Navarrete ',
    rfc: 'FUNL001231MDF',
    curp: 'FUNL001231MDFNVLA5',
    email: 'liliamontfn@correo.com',
    estudiante: 'Doctorado',
    productos: [
      {
        id: 4,
        titulo: 'Advanced organic chemistry : reaction mechanisms',
        fecha: '2002',
        autor: 'Principal',
        url: 'http://www.sciencedirect.com/science/book/9780121381103',
        tesis: 'No Relaciodo con Tesis',
        type: 'Libro',
        libro: {
          editorial: '',
          edicion: 'En Linea',
          isbn: 'ISBN e-book 9780121381103',
        },
      },
    ],
  },
];

export { usuarios };
