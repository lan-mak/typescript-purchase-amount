import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('Проверка создания корзины', () => {
  const cart = new Cart();
  expect(cart).toBeInstanceOf(Cart);
});

test('Проверка создания - Книга', () => {
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const testBook = {
    id: 1001,
    name: 'War and Piece',
    author: 'Leo Tolstoy',
    price: 2000,
    pages: 1225,
  };
  expect(book).toEqual(testBook);
});

test('Проверка создания - Музыкальный альбом', () => {
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const testMusicAlbum = {
    id: 1008,
    name: 'Meteora',
    author: 'Linkin Park',
    price: 900,
  };
  expect(musicAlbum).toEqual(testMusicAlbum);
});

test('Проверка создания - Фильма', () => {
  const movie = new Movie(1009, '1+1', 'Intouchables', 2011, 'Франция', ['драма', 'комедия', 'биография'], '112 мин. / 01:52', 21);
  const testMovie = {
    id: 1009,
    name: '1+1',
    fullName: 'Intouchables',
    year: 2011,
    country: 'Франция',
    movieGenre: ['драма', 'комедия', 'биография'],
    timeLength: '112 мин. / 01:52',
    price: 21,
  };
  expect(movie).toEqual(testMovie);
});

test('Проверка добавления и хранения в корзине', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, '1+1', 'Intouchables', 2011, 'Франция', ['драма', 'комедия', 'биография'], '112 мин. / 01:52', 21));
  expect(cart.items.length).toBe(1);
});

test('Подсчет суммарной стоимости (без учёта скидки)', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, '1+1', 'Intouchables', 2011, 'Франция', ['драма', 'комедия', 'биография'], '112 мин. / 01:52', 21));
  expect(cart.totalCount()).toBe(2921);
});

test('Подсчет суммарной стоимости (с учётом скидки)', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, '1+1', 'Intouchables', 2011, 'Франция', ['драма', 'комедия', 'биография'], '112 мин. / 01:52', 21));
  expect(cart.totalDiscont(10)).toBe(2628.9);
});

test('Удаление уже добавленный в корзину объект по полю id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, '1+1', 'Intouchables', 2011, 'Франция', ['драма', 'комедия', 'биография'], '112 мин. / 01:52', 21));
  cart.deleteItem(1008);
  expect(cart.items.length).toBe(2);
});
