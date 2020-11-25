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
        id: '10535ad2a4901090e3e37dcad0015fc9',
        titulo:
          'Las profesiones, las lenguas y el español. Una mirada hacia el futuro',

        autor: 'Autor Principal',
        url:
          'http://www.educacionyfp.gob.es/paisesbajos/dam/jcr:6741f1ec-7200-4d64-b36d-5cbaae68641f/actas.vi.ciefe.def.pdf',
        tesis: 'No Relacionado con Tesis',
        type: 'articuloCongreso',
        congreso: {
          nombre:
            'Congreso Internacional de Español para Fines Específicos (CIEFE)',
          fecha: '2018-01-12',
        },
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
        id: '12ffb13cd973dc2702501efdb3dc3b63',
        titulo: 'Técnicas, materiales y aplicaciones en nanotecnología',
        autor: 'Coautor',
        url: 'https://www.redalyc.org/pdf/535/53541201.pdf',
        tesis: 'No Relaciodo con Tesis',
        type: 'articuloRevista',
        revista: {
          nombre: 'Acta Bioquímica Clínica Latinoamericana',
          tipo: 'No Arbitrada',
          indice: 'CONACyT',
          isnn: '0325-2957',
          doi: '10.1145/1067268.1067287',
        },
      },
    ],
  },
];

export { usuarios };
