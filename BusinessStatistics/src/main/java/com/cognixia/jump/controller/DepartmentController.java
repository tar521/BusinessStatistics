package com.cognixia.jump.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.Department;
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
		Optional<Department> found = repo.findById(null);
		
		if(found == null) {
			return ResponseEntity.status(404).body("Department with id of " + id + " was not found.");
		}
		else {
			return ResponseEntity.status(200).body(found);
		}
		
		
	}
	
}
