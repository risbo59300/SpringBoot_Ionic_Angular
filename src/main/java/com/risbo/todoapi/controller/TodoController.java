package com.risbo.todoapi.controller;

import com.risbo.todoapi.entities.Todo;
import com.risbo.todoapi.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin("http://localhost:8100")
public class TodoController {

    @Autowired
    TodoRepository todoRepos;

    @PostMapping
    public Todo newTodo(@RequestBody Todo todo) {
        return  todoRepos.save(todo);
    }

    @GetMapping
    public List<Todo> GetTodos() {
        return  todoRepos.findAll();
    }

    @GetMapping("/{todoId}")
    public Todo GetTodoById(@PathVariable("todoId") Long id) {
        return  todoRepos.findById(id).get();
    }

    @PutMapping ("/{todoId}")
    public Todo updateTodo(@RequestBody Todo todo) {
        return  todoRepos.save(todo);
    }

    @DeleteMapping ("/{todoId}")
    public void deleteTodo(@PathVariable("todoId") Todo todo) {
        todoRepos.delete(todo);
    }

}
