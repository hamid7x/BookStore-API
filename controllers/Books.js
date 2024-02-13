const booksData = require('../models/books');


exports.getAllBooks = (req, res) => {
    res.json(booksData);
}

exports.getBookByID = (req, res) =>{
    const {id} = req.params;
    const product = booksData.filter(el=>el.id == id);
    res.json(product);
}

exports.addNewBook = (req, res)=>{
    const newBook = req.body
    booksData.push(newBook)
    res.json(booksData)
}