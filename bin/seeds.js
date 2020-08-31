const mongoose = require('mongoose');
const Book = require('../models/Book.model');
const DB_NAME = 'librarian';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
 
const books = [
  {
    id: "I1o4DgAAQBAJ",
    title: "The Design of Everyday Things",
    subtitle: "Revised and Expanded Edition",
    authors: [
        "Don Norman"
    ],
    publisher: "Hachette UK",
    publishedDate: "2013-11-05",
    description: "<b>Design doesn't have to complicated, which is why this guide to human-centered design shows that usability is just as important as aesthetics. </b><br>Even the smartest among us can feel inept as we fail to figure out which light switch or oven burner to turn on, or whether to push, pull, or slide a door. <br>The fault, argues this ingenious -- even liberating -- book, lies not in ourselves, but in product design that ignores the needs of users and the principles of cognitive psychology. The problems range from ambiguous and hidden controls to arbitrary relationships between controls and functions, coupled with a lack of feedback or other assistance and unreasonable demands on memorization.<i><br></i><i>The Design of Everyday Things</i> shows that good, usable design is possible. The rules are simple: make things visible, exploit natural relationships that couple function and control, and make intelligent use of constraints. The goal: guide the user effortlessly to the right action on the right control at the right time.<br><br><i>The Design of Everyday Things</i> is a powerful primer on how -- and why -- some products satisfy customers while others only frustrate them.<br>",
    isbn13: "9780465072996",
    categories: [
        "Design / Product",
        "Psychology / Applied Psychology",
        "Business & Economics / Industries / Retailing",
        "Psychology / Cognitive Psychology & Cognition",
        "Science / Cognitive Science"
    ],
    averageRating: 3.5,
    ratingsCount: 29,
    imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=I1o4DgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72jw_zkk9XtA92r6NhhG7lyjjghzyQhdutfvYPjGt7REAV-asT7eSMvqFpJyKGSGSBl1PQb9S2Tv7MTkvhaygL_YjMu8B8LzA7zKJe5ZwpKfzMtUk_Tb2kvw2f5BSvBAxvUs9BS&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=I1o4DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72fRnZ_vvyNN3cQ5y4NmAfihxddnuRFCtH0TAGHs5roPyD_RZBNvbESm-Th73bbefyIqeI9WA-ulDUHxvCbyYiQNS0NHahnoWmJlNwW6iPIdRcPn2tZ6f1i7dleVfp9K5_p3U9a&source=gbs_api",
        small: "http://books.google.com/books/content?id=I1o4DgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73ldL_XXfH4B6MJ4S3eUn4rebrbjdhySAjmQp6Nl-8PH-VR3d-hk1N-qdhYJYfNBzSRxLpApmejaofaxLGGywQwOYvguYNbtwF5lc4RqOSE99w9KNoUXfaSU3GPqn0BgR_82yVX&source=gbs_api",
        medium: "http://books.google.com/books/content?id=I1o4DgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73mnTq17mKdhpq3u_1O714gyt7WnFbZyPt5IVn-C6SImBxK38uXAXqliS1EPgghmajX3Cecb5Tyhl14L4uR9kNEMS4YBIyMiNejpRphUlnpGvTj8jzX7HsX9YfkrS7-zeGR8XCc&source=gbs_api",
        large: "http://books.google.com/books/content?id=I1o4DgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72eb8JyosQb6gyZPpi8tzy3J0SCHWp6IFqnuI0Qynz1zD1BnkTaDQSwv2LbirV8MOp_zzTnLSTA3wWshwoEKIiskIUxEKgwhpTwvjw0amwJtG85KjAltxk6BClm3IiYvereQkKU&source=gbs_api",
        extraLarge: "http://books.google.com/books/content?id=I1o4DgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE73FTNr4OySVp9tpVw7Scl0xfE93jy3fnZCdWkhkYGhG1u6AC4uV1CcyIdwpCBYljx2Y6UvT-72cecdEAlj8qXR8dslA_vcFZolaAxVEKqfm8FByT_zzFjl7lB8gnM4IF1rLjSHz&source=gbs_api"
    }
  },
  {
    id: "oV1tXT3HigoC",
    title: "Thinking, Fast and Slow",
    authors: [
        "Daniel Kahneman"
    ],
    publisher: "Penguin UK",
    publishedDate: "2011-11-03",
    description: "The phenomenal international bestseller - 2 million copies sold - that will change the way you make decisions 'A lifetime's worth of wisdom' Steven D. Levitt, co-author of Freakonomics 'There have been many good books on human rationality and irrationality, but only one masterpiece. That masterpiece is Thinking, Fast and Slow' Financial Times Why is there more chance we'll believe something if it's in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? The answer lies in the two ways we make choices: fast, intuitive thinking, and slow, rational thinking. This book reveals how our minds are tripped up by error and prejudice (even when we think we are being logical), and gives you practical techniques for slower, smarter thinking. It will enable to you make better decisions at work, at home, and in everything you do.",
    isbn13: '9780141918921',
    categories: [
        "Psychology"
    ],
    averageRating: 4,
    ratingsCount: 3927,
    imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=oV1tXT3HigoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=oV1tXT3HigoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }
  },
  {
    id: "nRIajgEACAAJ",
    title: "Failed It!",
    authors: [
      "Erik Kessels"
    ],
    subtitle: "How to turn mistakes into ideas and other advice for successfully screwing up",
    publisher: "Phaidon Press",
    publishedDate: "2016-05-16",
    description: "<p>A fun and fabulous take on the art of making mistakes. Erik Kessels celebrates imperfection and failure and shows why they are an essential part of the creative process.</p><p>Failed it! celebrates the power of mistakes and shows how they can enrich the creative process. This is part photobook and part guide to loosening up and making mistakes to take the fear out of failure and encourage experimentation.</p><p>It showcases the best and most hilarious examples of imperfection and failure across a broad range of creative forms, including art, design, photography, architecture and product design, to inspire and encourage creatives to embrace and celebrate their mistakes.</p><p>We live in an era when everyone is striving for perfection and we have become afraid of failure, which limits our potential. Mistakes help us find new ways of thinking and innovative solutions, and failures can change our perceptions and open up new ways of looking things. This book transforms mistakes from something to be embarrassed about into a cause for celebration.</p><p>It includes over 150 visual examples drawn from Kessels personal collection of artworks and found photographs, along with tips, quotes, anecdotes and wisdom for celebrating with failure. To quote Kessels: 'the ubiquity of Apple + Z, means that we can literally undo any mistake before it has had time to breathe, be considered and — perhaps — evolve into something else: a fascinating, strange, provocative or even original piece of work. This book asks readers to embrace their fuck-ups, learn from them and celebrate their tawdry glory'.</p>",
    isbn13: "9780714871196",
    categories: [
        "Business & Economics / General",
        "Humor / General"
    ],
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=nRIajgEACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE71EreN-TbLl3hHxM3zV9iOXqOWllFOC183RThnVgwE56YELer13YXKZOz_y5OkgiMVddmri7YGJyiyqCNHzwL08YT1D2VxlehV2WBPCmDR2HHfzIOxz8J1yMWixCBYAdih37Z9O&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=nRIajgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72b8KwsSVFNv56IefsUqIZvZja6q8hTshW7Mdd5ff-lBD_r3ooHdDwUodLUM0kXSNi2Q7jQQ02CQ66qGurclw8Z5KMEIcZ6a0dB85M6NAhroaHRpHUderu7x8WNBJDmKyjJIslh&source=gbs_api"
    }
  }
];
 
Book.create(books)
  .then(booksFromDB => {
    console.log(`Created ${booksFromDB.length} books`);
    mongoose.disconnect();
  })
  .catch(err => console.error(`An error occurred when seeding: ${err}`));
