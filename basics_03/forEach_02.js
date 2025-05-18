//For each loop does't return any kind of values so we will use filter method

const nums=[1,2,3,4,5,6,7,8,9,10]

const newNums=nums.filter((num)=>{
    return num>4;
})
console.log(newNums)

//Another usage of filter methods
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //Give me the book details where edition is >=2000 (using filter method)

  const NewBooks= books.filter((book)=>{
    return book.edition>=2000 && book.genre=='Non-Fiction';
  })
  console.log(NewBooks);