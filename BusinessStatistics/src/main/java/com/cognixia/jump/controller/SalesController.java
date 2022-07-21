package com.cognixia.jump.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

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
import com.cognixia.jump.model.DeptSumDTO;
import com.cognixia.jump.model.Sales;
import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.SalesRepository;
import com.cognixia.jump.service.SalesService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("api")
@Tag(name = "sales", description = "API for user actions")
public class SalesController {
	
	@Autowired
	SalesRepository repo;
	
	@Autowired
	SalesService service;
	
	@GetMapping("/sales")
	public List<Sales> getSales() {
		return repo.findAll();
	}
	
	@GetMapping("/sales/{id}")
	public ResponseEntity<?> getSaleById(@PathVariable int id) {
		Optional<Sales> found = repo.findById(null);
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("Sale with id: " + id + " was not found.");
		}
		else {
			return ResponseEntity.status(200).body(found.get());
		}
	}
	
	@GetMapping("/sales/dept")
	public List<Sales> getSalesByDept(@RequestBody Department dept) {
		return repo.findSalesByDept(dept.getId());
	}
	
	@GetMapping("/sales/dept/{id}")
	public List<Sales> getSalesByDeptId(@PathVariable int id) {
		return repo.findSalesByDept(id);
	}
	
	@GetMapping("/sales/year/{year}") 
	public List<Sales> getSalesByYear(@PathVariable int year) {
		return repo.findSalesByYear(year);
	}
	
	@GetMapping("/sales/year/sum/{year}")
	public List<DeptSumDTO> getSalesTotalByYear(@PathVariable int year) {
		
		List<DeptSumDTO> salesTotal = service.sumByYear(year);

		return salesTotal;
	}
	
	@GetMapping("/sales/month")
	public List<Sales> getSalesByYearMonth(@PathParam(value = "month")int month, @PathParam(value = "year")int year) {
		return repo.findSalesByYearMonth(month, year);
	}
	
	@GetMapping("/sales/dept/year")
	public List<Sales> getSalesByDeptByYear(@PathParam(value = "id")int id, @PathParam(value = "year")int year) {
		return repo.findSalesByDeptByYear(id, year);
	}
	
	
	@GetMapping("/sales/dept/month")
	public List<Sales> getSalesByDeptByYearMonth(@PathParam(value = "id")int id, @PathParam(value = "year")int year, @PathParam(value = "year")int month) {
		return repo.findSalesByDeptByYearMonth(id, year, month);
	}
	
	
	@GetMapping("/sales/user")
	public List<Sales> getSalesByUser(@RequestBody User user) {
		return repo.findSalesByUser(user.getId());
	}
	
	@GetMapping("/sales/user/{id}")
	public List<Sales> getSalesByUserById(@PathVariable int id) {
		return repo.findSalesByUser(id);
	}
	
	@PostMapping("/sales")
	public ResponseEntity<?> createSale(@RequestBody Sales sale) {
		
		sale.setId(null);
		sale.setSaleDate(LocalDateTime.now());
		
		Sales created = repo.save(sale);
		
		return ResponseEntity.status(201).body(created);
	}
	
	@PutMapping("/sales")
	public ResponseEntity<?> updateSale(@RequestBody Sales sale) {
		boolean exists = repo.existsById(sale.getId());
		
		if (!exists) {
			return ResponseEntity.status(404).body("User not updated - user not found");
		}
		else {
			Sales updated = repo.save(sale);
			return ResponseEntity.status(200).body(updated);
		}
	}
	
	@DeleteMapping("/sales")
	public ResponseEntity<?> deleteSale(@RequestBody Sales sale) {
		Optional<Sales> found = repo.findById(sale.getId());
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("User not deleted - user with id: " + sale.getId() + " was not found");
		}
		else {
			repo.deleteById(found.get().getId());
			return ResponseEntity.status(200).body("User with id: " + found.get().getId() + " deleted");
		}
	}
	
	@DeleteMapping("/sales/{id}")
	public ResponseEntity<?> deleteSaleById(@PathVariable int id) {
		Optional<Sales> found = repo.findById(id);
		
		if (found.isEmpty()) {
			return ResponseEntity.status(404).body("User not deleted - user with id: " + id + " was not found");
		}
		else {
			repo.deleteById(found.get().getId());
			return ResponseEntity.status(200).body("User with id: " + found.get().getId() + " deleted");
		}
	}
	
}
