const express = require('express');
const router = express.Router();
const Todos = require('./TodosModel');

router
  .route('/')
  .get(
    async (req, res, next) => {
      try {
        const todos = await Todos.find();

        return res.status(200).json({
          success: true,
          data: todos
        })
      } catch (error) {
        return res.status(500).json({
          success: false,
          error: 'Server Error' + error
        })
      }
    }
  )
  .post(
    async (req, res, next) => {
      try {
        const { title, dueDate } = req.body
        const newTodo = await Todos.create(req.body)

        return res.status(201).json({
          success: true,
          data: newTodo
        })
      } catch (error) {
        if (error.name === 'ValidationError') {
          return res.status(400).json({
            success: false,
            error: `${error.name} : ${error.message}`
          })

        } else
          return res.status(500).json({
            success: false,
            error: 'Server Error: ' + error
          })
      }
    }
  )


router
  .route('/:id')
  .delete(
    async (req, res, next) => {
      try {
        const todo = await Todos.findById(req.params.id);
        if (!todo) {
          return res.status(404).json({
            success: false,
            error: "No todo found"
          })
        }
        await todo.remove(req.params.id);
        return res.status(200).json({
          success: true,
          data: {}
        })
      } catch (error) {
        return res.status(500).json({
          success: false,
          error: 'Server Error' + error
        })
      }
    }
  )


module.exports = router