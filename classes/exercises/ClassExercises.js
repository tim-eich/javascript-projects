// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numPages, timesCheckedOut, discarded = 'no') {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.timesCheckedOut = timesCheckedOut;
        this.numPages = numPages;
        this.discarded = discarded;
    }
    checkoutBook() {
        this.timesCheckedOut += 1;
    }
}

// Define your Manual and Novel classes here:
class Novel extends Book {
    constructor() {
        super();
    }
    // checkForDiscard() {
    //     if (this.timesCheckedOut > 100) {
    //         this.discarded = 'yes';
    //     }
    // } 
}

class Manual extends Book {
    constructor() {
        super();
    }
    // checkForDiscard(currentYear) {
    //     if (currentYear - this.copyrightDate > 5) {
    //         this.discarded = 'yes';
    //     }
    // }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'no');

let shuttleBuilding = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'no');

// Code exercises 4 & 5 here:
console.log(shuttleBuilding);