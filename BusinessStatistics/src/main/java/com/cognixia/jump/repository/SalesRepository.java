package com.cognixia.jump.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognixia.jump.model.Sales;

@Repository
public interface SalesRepository extends JpaRepository<Sales, Integer>{

	@Query("select s from Sales s where s.dept.id = ?1")
	public List<Sales> findSalesByDept(int id);
	
	@Query("select s from Sales s where s.user.id = ?1")
	public List<Sales> findSalesByUser(int id);
}
