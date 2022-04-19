const {Adlibris} = require('book-api');


const source = new Adlibris();

// Search for books
// source.search('Engineering')
// .then(books => {
//   source.fetch(books[0]).then(book => {
//     console.log(JSON.stringify(book, null, 2));
//   });
// });

source.search('Engineering')
.then(books => books.forEach(book => {
  source.fetch(book).then(book => {
    console.log(book)
  })
}));





