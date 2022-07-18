package com.cognixia.jump.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognixia.jump.model.Department;

public interface DeptRepository extends JpaRepository<Department, Integer> {

}
