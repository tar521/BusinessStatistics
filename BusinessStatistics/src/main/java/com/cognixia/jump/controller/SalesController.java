package com.cognixia.jump.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.Sales;
import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.SalesRepository;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("api")
@Tag(name = "sales", description = "API for user actions")
public class SalesController {
	
	@Autowired
	SalesRepository repo;
	
	@GetMapping("/sales")
	public List<Sales> getSales() {
		return repo.findAll();
	}
	
	@GetMapping("/sales/{id}")
	public ResponseEntity<?> getUserById(@PathVariable int id) {
		Optional<Sales> found = repo.findById(null);
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("Sale with id: " + id + " was not found.");
		}
		else {
			return ResponseEntity.status(200).body(found.get());
		}
	}
}
