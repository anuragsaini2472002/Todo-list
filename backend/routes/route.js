const {Router} = require('express');
const { getTodo, addTodo } = require('../controllers/todoController');

const router = Router();

router.get('/getAllTodoCards', getTodo);
router.post('/addTodoCard', addTodo);

module.exports = router;