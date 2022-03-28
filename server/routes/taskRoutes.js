const router = require('express').Router();
const { getTasks, setTasks, updateTasks, deleteTasks } = require('../controllers/taskController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTasks).post(protect, setTasks);

router.route('/:id').delete(protect, deleteTasks).put(protect, updateTasks);

module.exports = router
