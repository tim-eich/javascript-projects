// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numPages, hasBeenCheckedOut, discarded = 'No') {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.hasBeenCheckedOut = hasBeenCheckedOut;
        this.numPages = numPages;
        this.discarded = discarded;
    }
    checkout(checked = 1) {
        this.hasBeenCheckedOut += checked;
    }
}

// Define your Manual and Novel classes here:
class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    discard() {
        if (this.hasBeenCheckedOut > 100) {
            this.discarded = 'Yes';
        }
    } 
}

class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    discard(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.discarded = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'no');

let shuttleBuilding = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'no');

// Code exercises 4 & 5 here:
prideAndPrejudice.checkout(80);
prideAndPrejudice.discard();

console.log(prideAndPrejudice);

