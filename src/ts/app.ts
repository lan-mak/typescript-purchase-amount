import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
// console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, '1+1', 'Intouchables', 2011, 'Франция', ['драма', 'комедия', 'биография'], '112 мин. / 01:52', 21));

// console.log(cart.items);

// console.log(cart.totalCount())
// console.log(cart.totalDiscont(10))
// console.log(cart.deleteItem(1008))
// console.log('-----')
// console.log(cart.items);
