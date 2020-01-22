const db = require("../../db/config")
const Book = require('./model')

const index = (req, res) => {
    Book.find({})
    .then(
        books => res.send(books)
    )
    .catch(
        err => res.send(err)
    )
}



const show = (req, res) => {
    const id = req.params.id
    Book.findById(id)
    .then(
        book => res.send(book)
    )
    .catch(
        err => res.send(err)
    )
}


const create = (req, res) => {
   const bookParams = req.body
    const book = new Book(bookParams)
    book.save()
    .then(
        book => res.send(book)
    )
    .catch(
        err => res.send(err)
    )
}



const destroy = (req, res) => {
    const id = req.params.id
    Book.findById(id)
    .then(
        book => book.remove()
        .then(
            book => res.send(book.title + " deleted")
        )
        .catch(
            err => res.send(err)
        )
    )
    .catch(
        err => res.send(err)
    )
}



const update = (req, res) => {
    const title = req.body.title
    const id = req.params.id
    Book.update(
        {_id: id},
        {$set: {title: title}}
    )
    .then(
        processDetail => res.send(processDetail)
    )
    .catch(
        err => res.send(err)
    )
}

module.exports = {
    index,
    show,
    create,
    destroy,
    update
}
