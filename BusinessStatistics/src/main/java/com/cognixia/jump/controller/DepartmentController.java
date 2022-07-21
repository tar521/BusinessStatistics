package com.cognixia.jump.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.Department;
import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.DepartmentRepository;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api")
@Tag(name = "department", description = "API for user actions")
public class DepartmentController {

	@Autowired
	DepartmentRepository repo;
	
	@GetMapping("/dept")
	public List<Department> getDepts() {
		return repo.findAll();
	}
	
	@GetMapping("/dept/{id}")
	public ResponseEntity<?> getDeptById(@PathVariable int id) {
		Optional<Department> found = repo.findById(id);
		
		if(found.isEmpty()) {
			return ResponseEntity.status(404).body("Department with id of " + id + " was not found.");
		}
		else {
			return ResponseEntity.status(200).body(found.get());
		}
	}
	
	@PostMapping("/dept")
	public ResponseEntity<?> createDepartment(@RequestBody Department dept) {
		
		dept.setId(null);
		
		Department created = repo.save(dept);
		
		return ResponseEntity.status(201).body(created);
	}
	
	@PutMapping("/dept")
	public ResponseEntity<?> updateDept(@RequestBody Department dept) {
		boolean exists = repo.existsById(dept.getId());
		
		if (!exists) {
			return ResponseEntity.status(404).body("User not updated - user not found");
		}
		else {
			Department updated = repo.save(dept);
			return ResponseEntity.status(200).body(updated);
		}
	}
	
	@DeleteMapping("/dept")
	public ResponseEntity<?> deleteDept(@RequestBody Department dept) {
		Optional<Department> found = repo.findById(dept.getId());
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("User not deleted - user with id: " + dept.getId() + " was not found");
		}
		else {
			repo.deleteById(found.get().getId());
			return ResponseEntity.status(200).body("User with id: " + found.get().getId() + " deleted");
		}
	}
	
	@DeleteMapping("/dept/{id}")
	public ResponseEntity<?> deleteDeptById(@PathVariable int id) {
		Optional<Department> found = repo.findById(id);
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("User not deleted - user with id: " + id + " was not found");
		}
		else {
			repo.deleteById(found.get().getId());
			return ResponseEntity.status(200).body("User with id: " + found.get().getId() + " deleted");
		}
	}
		
}
