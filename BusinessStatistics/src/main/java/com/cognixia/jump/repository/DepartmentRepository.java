package com.cognixia.jump.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognixia.jump.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {

}
