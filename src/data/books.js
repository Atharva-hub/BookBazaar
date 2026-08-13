const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    category: "Self Help",
    rating: 4.8,
    review: "10k",
    stock: 25,
    description:
      "A practical guide to building good habits and breaking bad ones.",
    isbn: "9780735211292",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    bookUrl: "https://books.google.com/books?q=Atomic+Habits+James+Clear"
  },

  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 399,
    category: "Finance",
    rating: 4.7,
    review: "8.5k",
    stock: 18,
    description:
      "Timeless lessons about wealth, greed, happiness, and making better financial decisions.",
    isbn: "9780857199096",
    image: "https://covers.openlibrary.org/b/isbn/9780857199096-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=The+Psychology+of+Money+Morgan+Housel"
  },

  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 350,
    category: "Finance",
    rating: 4.6,
    review: "15k",
    stock: 30,
    description:
      "A personal finance classic comparing two different approaches to money and investing.",
    isbn: "9781612681139",
    image: "https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=Rich+Dad+Poor+Dad+Robert+Kiyosaki"
  },

  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    category: "Fiction",
    rating: 4.6,
    review: "12k",
    stock: 22,
    description:
      "A philosophical novel about following your dreams and discovering your personal legend.",
    isbn: "9780062315007",
    image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=The+Alchemist+Paulo+Coelho"
  },

  {
    id: 5,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    price: 450,
    category: "Fantasy",
    rating: 4.9,
    review: "25k",
    stock: 15,
    description:
      "Harry Potter discovers the wizarding world and begins his journey at Hogwarts.",
    isbn: "9780590353427",
    image: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=Harry+Potter+Philosopher%27s+Stone"
  },

  {
    id: 6,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 280,
    category: "Classic",
    rating: 4.4,
    review: "9.2k",
    stock: 20,
    description:
      "A classic American novel exploring wealth, love, ambition, and the American Dream.",
    isbn: "9780743273565",
    image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=The+Great+Gatsby+F+Scott+Fitzgerald"
  },

  {
    id: 7,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    price: 399,
    category: "Fantasy",
    rating: 4.8,
    review: "7.8k",
    stock: 17,
    description:
      "Bilbo Baggins embarks on an unexpected adventure with a group of dwarves.",
    isbn: "9780547928227",
    image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=The+Hobbit+J.R.R.+Tolkien"
  },

  {
    id: 8,
    title: "1984",
    author: "George Orwell",
    price: 320,
    category: "Dystopian",
    rating: 4.7,
    review: "18k",
    stock: 24,
    description:
      "A dystopian novel about surveillance, government control, and individual freedom.",
    isbn: "9780451524935",
    image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    bookUrl: "https://books.google.com/books?q=1984+George+Orwell"
  },

  {
    id: 9,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 350,
    category: "Classic",
    rating: 4.7,
    review: "14k",
    stock: 12,
    description:
      "A powerful story about justice, morality, prejudice, and childhood.",
    isbn: "9780061120084",
    image: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=To+Kill+a+Mockingbird+Harper+Lee"
  },

  {
    id: 10,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 399,
    category: "Self Help",
    rating: 4.5,
    review: "11k",
    stock: 19,
    description:
      "A counterintuitive approach to living a good life by focusing on what truly matters.",
    isbn: "9780062457714",
    image: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=The+Subtle+Art+of+Not+Giving+a+F%2Ack+Mark+Manson"
  },

  {
    id: 11,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 450,
    category: "Self Help",
    rating: 4.6,
    review: "6.5k",
    stock: 14,
    description:
      "A framework for developing personal effectiveness and achieving meaningful goals.",
    isbn: "9781982137274",
    image: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=7+Habits+of+Highly+Effective+People"
  },

  {
    id: 12,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 799,
    category: "Programming",
    rating: 4.7,
    review: "4.8k",
    stock: 10,
    description:
      "A practical guide to writing clean, readable, maintainable, and professional software.",
    isbn: "9780132350884",
    image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=Clean+Code+Robert+C.+Martin"
  },

  {
    id: 13,
    title: "The Pragmatic Programmer",
    author: "David Thomas and Andrew Hunt",
    price: 850,
    category: "Programming",
    rating: 4.8,
    review: "3.9k",
    stock: 8,
    description:
      "A guide to improving software development practices and becoming a better programmer.",
    isbn: "9780135957059",
    image: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=The+Pragmatic+Programmer"
  },

  {
    id: 14,
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    price: 599,
    category: "Programming",
    rating: 4.6,
    review: "5.2k",
    stock: 16,
    description:
      "A deep exploration of JavaScript fundamentals for developers who want to understand the language better.",
    isbn: "9781491924464",
    image: "https://covers.openlibrary.org/b/isbn/9781491924464-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=You+Don%27t+Know+JS+Yet+Kyle+Simpson"
  },

  {
    id: 15,
    title: "Ikigai",
    author: "Héctor García and Francesc Miralles",
    price: 350,
    category: "Self Help",
    rating: 4.5,
    review: "13k",
    stock: 21,
    description:
      "An exploration of the Japanese concept of finding purpose, meaning, and fulfillment in life.",
    isbn: "9780143130727",
    image: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=Ikigai+Hector+Garcia+Francesc+Miralles"
  },

  {
    id: 16,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 599,
    category: "History",
    rating: 4.7,
    review: "16k",
    stock: 13,
    description:
      "A sweeping exploration of human history from the Stone Age to the modern world.",
    isbn: "9780062316097",
    image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=Sapiens+Yuval+Noah+Harari"
  },

  {
    id: 17,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 550,
    category: "Psychology",
    rating: 4.6,
    review: "8.7k",
    stock: 11,
    description:
      "An exploration of the two systems that shape how people think, judge, and make decisions.",
    isbn: "9780374533557",
    image: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=Thinking+Fast+and+Slow+Daniel+Kahneman"
  },

  {
    id: 18,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 399,
    category: "Self Help",
    rating: 4.6,
    review: "9.5k",
    stock: 20,
    description:
      "A spiritual guide focused on living in the present moment and overcoming unnecessary mental suffering.",
    isbn: "9781577314806",
    image: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=The+Power+of+Now+Eckhart+Tolle"
  },

  {
    id: 19,
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 499,
    category: "Business",
    rating: 4.5,
    review: "6.2k",
    stock: 15,
    description:
      "A practical approach to building businesses through experimentation, feedback, and continuous improvement.",
    isbn: "9780307887894",
    image: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=The+Lean+Startup+Eric+Ries"
  },

  {
    id: 20,
    title: "Zero to One",
    author: "Peter Thiel",
    price: 450,
    category: "Business",
    rating: 4.5,
    review: "7.1k",
    stock: 18,
    description:
      "Insights into innovation, startups, technology, and building something genuinely new.",
    isbn: "9780804139298",
    image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
    bookUrl:
      "https://books.google.com/books?q=Zero+to+One+Peter+Thiel"
  }
];

export default books;