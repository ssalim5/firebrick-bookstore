const {Adlibris} = require('book-api');


const source = new Adlibris();

let booksToAdd = [];

let minQuantity = 4;
let maxQuantity = 128;


// The reason this console logs the list of books instead of simply exporting
// is because I simply couldn't figure out how to do it, and it seemed like a waste
// of time to continue.

source.search('Hydrology')
.then(books => books.forEach(book => {
  source.fetch(book).then(book => {
    let bookAdd = {
      title: book.title,
      author: book.authors[0],
      cover: book.images[0].url,
      price: (book.marketPrices[0].value * .1),
      quantity: (Math.floor(Math.random() * maxQuantity) + minQuantity)
    }
    booksToAdd.push(bookAdd)
    console.log(bookAdd)
    console.log(booksToAdd)
  });
}))





