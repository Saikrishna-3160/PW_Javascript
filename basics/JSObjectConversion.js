let person = {
    name: 'tom',
    age: 40,
    salary: 34.55,
    isActive: true,
    status: 'pending'
}

console.log(person);
console.log(typeof(person));

//js object to JSON string: marshelling
let personJson = JSON.stringify(person);
console.log(personJson);
console.log(typeof(personJson)); //string

//JSON to JS Object: unmarshelling
let booksJson = `{
    "name": "The Pragmatic Programmer",
    "author": "Andrew Hunt",
    "published_year": 1999,
    "book_summary": "A classic guide to software craftsmanship"
}`

console.log(typeof(booksJson));

let books = JSON.parse(booksJson);
console.log(books);
console.log(typeof(books));