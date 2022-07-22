package com.cognixia.jump.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.UserRepository;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("api")
@Tag(name = "user", description = "API for user actions")
public class UserController {

	@Autowired
	UserRepository repo;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/user/info")
	public ResponseEntity<?> getUserInfo() {
		UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		String username = userDetails.getUsername();

		Optional<User> found = repo.findByUsername(username);
		
		if(found.isEmpty()) {
			return ResponseEntity.status(404).body("User not found");
		}
		else {
			return ResponseEntity.status(200).body(found.get());
		}
	}
	
	@GetMapping("/user")
	public List<User> getUsers() {
		return repo.findAll();
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<?> getUserById(@PathVariable int id) {
		Optional<User> found = repo.findById(id);
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("User with id: " + id + " was not found.");
		}
		else {
			return ResponseEntity.status(200).body(found.get());
		}
	}
	
	@GetMapping("/user/{username}")
	public ResponseEntity<?> getUserByUsername(@PathVariable String username) {
		Optional<User> found = repo.findByUsername(username);
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("User not found.");
		}
		else {
			return ResponseEntity.status(200).body(found.get());
		}
		
	}
	
	@PutMapping("/user")
	public ResponseEntity<?> updateUser(@RequestBody User user) {
		boolean exists = repo.existsById(user.getId());
		
		if (!exists) {
			return ResponseEntity.status(404).body("User not updated - user not found");
		}
		else {
			User updated = repo.save(user);
			return ResponseEntity.status(200).body(updated);
		}
	}
	
	@DeleteMapping("/user")
	public ResponseEntity<?> deleteUser(@RequestBody User user) {
		Optional<User> found = repo.findById(user.getId());
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("User not deleted - user with id: " + user.getId() + " was not found");
		}
		else {
			repo.deleteById(found.get().getId());
			return ResponseEntity.status(200).body("User with id: " + found.get().getId() + " deleted");
		}
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<?> deleteUserById(@PathVariable int id) {
		Optional<User> found = repo.findById(id);
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("User not deleted - user with id: " + id + " was not found");
		}
		else {
			repo.deleteById(found.get().getId());
			return ResponseEntity.status(200).body("User with id: " + found.get().getId() + " deleted");
		}
	}
	
}
