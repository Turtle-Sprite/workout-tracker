const express = require('express')
const {
    createWorkout,
    getAllWorkouts,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers.js')


const router = express.Router()
const db = require('../models/Workout')

//get ALL workouts
router.get('/', getAllWorkouts)

//get ONE workout
router.get('/:id', getWorkouts)

router.post('/', createWorkout)

router.put('/:id', updateWorkout)

router.delete('/:id', deleteWorkout)


module.exports = router 