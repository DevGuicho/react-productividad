import imgArtCongres from '../assets/img/articuloCongreso.png';
import imgArtMagazine from '../assets/img/articuloRevista.png';
import imgChapBook from '../assets/img/capituloLibro.png';
import imgBook from '../assets/img/libro.png';
import imgDevelop from '../assets/img/desarrollo.png';

const useProduct = (product, type) => {
  /* const [list, setList] = useState(null);
  const [route, setRoute] = useState('');
  const [tag, setTag] = useState('');
  const [img, setImg] = useState(null); */
  let setList = null;
  let setRoute = null;
  let setTag = '';
  let setImg = null;
  if (type === 'articuloCongreso') {
    setRoute = '/art-congreso';
    setTag = 'Articulo de congreso';
    setImg = (
      <img src={imgArtCongres} alt='' className='product__article--img0' />
    );

    setList = (
      <ul className='product__details--list'>
        <li>{product.congreso.nombre}</li>
        <li>{product.congreso.fecha}</li>
      </ul>
    );
  } else if (type === 'articuloRevista') {
    setRoute = '/art-revista';
    setTag = 'Articulo en Revista';
    setImg = (
      <img src={imgArtMagazine} alt='' className='product__article--img' />
    );
    setList = (
      <ul className='product__details--list'>
        <li>{product.revista.nombre}</li>
        <li>{product.revista.tipo}</li>
        <li>{product.revista.indice}</li>
        <li>{product.revista.isnn}</li>
        <li>{product.revista.doi}</li>
      </ul>
    );
  } else if (type === 'capituloLibro') {
    setRoute = '/capitulo-libro';
    setTag = 'Capitulo de Libro';
    setImg = <img src={imgChapBook} alt='' className='product__article--img' />;
    setList = (
      <ul className='product__details--list'>
        <li>{product.libro.titulo}</li>
        <li>{product.libro.editorial}</li>
        <li>{product.libro.edicion}</li>
        <li>{product.libro.fecha}</li>
        <li>{product.libro.isbn}</li>
      </ul>
    );
  } else if (type === 'Libro') {
    setRoute = '/libro';
    setTag = 'Libro';
    setImg = <img src={imgBook} alt='' className='product__article--img' />;
    setList = (
      <ul className='product__details--list'>
        <li>{product.libro.editorial}</li>
        <li>{product.libro.edicion}</li>
        <li>{product.libro.fecha}</li>
        <li>{product.libro.isbn}</li>
      </ul>
    );
  } else if (type === 'Desarrollo') {
    setRoute = '/desarrollo';
    setTag = 'Desarrollo';
    setImg = <img src={imgDevelop} alt='' className='product__article--img' />;
    setList = (
      <div className='product__details--develop'>
        <p>{product.desarrollo.detalles}</p>
      </div>
    );
  }
  return [setList, setTag, setRoute, setImg];
};

export default useProduct;
