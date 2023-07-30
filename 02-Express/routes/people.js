const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPersonPostman,
    putPerson,
    deletePerson
} = require('../controllers/people');


// => Methodology # 1:
// Method: GET
// router.get('/', getPeople);
// Methods - POST (Javascript Example)
// router.post('/', createPerson);
// POSTMAN - POST (JSON Example)
// router.post('/postman', createPersonPostman);
// Methods - PUT
// router.put('/:id', putPerson);
// Methods - DELETE
// router.delete('/:id', deletePerson);

// => Methodology # 2:
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(putPerson).delete(deletePerson);

module.exports = router;