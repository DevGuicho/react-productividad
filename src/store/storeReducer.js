const initialStore = {
  productos: [
    {
      id: 1,
      titulo: 'Paralisis del sueño',
      congreso: 'Congreso de Viena',
      fecha: '1998-07-30',
      autor: 'Autor Principal',
      url: 'https://google.com',
      tesis: 'Relacionado con tesis',
      type: 'articuloCongreso',
    },
    {
      id: 2,
      titulo: 'Paralisis del sueño',
      autor: 'Coautor',
      url: 'https://google.com',
      tesis: 'No relaciodo con tesis',
      type: 'articuloRevista',
      revista: {
        nombre: 'American Science',
        tipo: 'Arbitrada',
        indice: 'CONACyT',
        isnn: 'ISSN 1666-2054',
        doi: '10.1145/1067268.1067287',
      },
    },
    {
      id: 3,
      titulo: 'Paralisis del sueño',
      fecha: '2002',
      autor: 'Autor Principal',
      url: 'https://google.com',
      tesis: 'Relaciodo con tesis',
      type: 'capituloLibro',
      libro: {
        titulo: 'Cibercultura e Investigación',
        editorial: 'Limusa',
        edicion: '2da Edición',
        isbn: 'ISBN 978-3-16-148410-0',
      },
    },
    {
      id: 4,
      titulo: 'Paralisis del sueño',
      fecha: '2002',
      autor: 'Principal',
      url: 'https://google.com',
      tesis: 'Relaciodo con tesis',
      type: 'Libro',
      libro: {
        editorial: 'Limusa',
        edicion: '2da Edición',
        isbn: 'ISBN fda',
      },
    },
    {
      id: 5,
      titulo: 'Paralisis del sueño',
      fecha: '07/07/1998',
      autor: 'Coautor',
      url: 'https://google.com',
      type: 'Desarrollo',
      tesis: 'Relaciodo con tesis',
      licencia: 'MIT',
      desarrollo: {
        detalles:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium vitae nulla non maximus. Aenean ut purus eget augue gravida elementum. Nunc fringilla magna libero, vitae lacinia metus pharetra id. Etiam ultrices ligula leo, at pellentesque ligula vehicula a. Cras efficitur et metus malesuada ullamcorper. Proin egestas dapibus turpis.',
      },
    },
  ],
  usuarios: [
    {
      id: 1,
      nombre: 'Carmen Salinas de Gortary',
      rfc: 'rfc',
      curp: 'curp',
      email: 'correo electronico',
      estudiante: 'maestria',
      productos: [
        {
          id: 1,
          titulo: 'Paralisis del sueño',
          congreso: 'Congreso de Viena',
          fecha: '1998-07-30',
          autor: 'Principal',
          url: 'https://google.com',
          tesis: 'Si',
          type: 'articuloCongreso',
        },
      ],
    },
    {
      id: 2,
      nombre: 'Carmen Salinas de Gortary',
      rfc: 'rfc',
      curp: 'curp',
      email: 'correo electronico',
      estudiante: 'doctorado',
      productos: [
        {
          id: 1,
          titulo: 'Paralisis del sueño',
          congreso: 'Congreso de Viena',
          fecha: '1998-07-30',
          autor: 'Principal',
          url: 'https://google.com',
          tesis: 'Si',
          type: 'articuloCongreso',
        },
      ],
    },
  ],
  place: {
    home: true,
    users: false,
    products: false,
    config: false,
  },
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        productos: [...state.productos, action.value],
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        productos: state.productos.filter((items) => items.id !== action.value),
      };
    case 'UPDATE_PRODUCT':
      const index = state.productos.findIndex(
        (product) => product.id === action.value.id
      );
      state.productos[index] = action.value;
      return state;
    case 'SET_PLACE':
      return {
        ...state,
        place: action.value,
      };
    default:
      break;
  }
};

export { initialStore };

export default storeReducer;
