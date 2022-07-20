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
	
	@Query(value = "SELECT * FROM sales WHERE year(date_of_sale) = ? ORDER BY date_of_sale", nativeQuery = true)
	public List<Sales> findSalesByYear(int year);
	
	@Query(value = "SELECT * FROM sales WHERE year(date_of_sale) = ?2 "
			+ "and month(date_of_sale) = ?1 ORDER BY date_of_sale", nativeQuery = true)
	public List<Sales> findSalesByYearMonth(int month, int year);

	@Query(value = "SELECT * FROM sales WHERE dept_id = ?1 "
			+ "and year(date_of_sale) = ?2 ORDER BY date_of_sale", nativeQuery = true)
	public List<Sales> findSalesByDeptByYear(int id, int year);

	@Query(value = "SELECT * FROM sales WHERE dept_id = ?1 "
			+ "and year(date_of_sale) = ?2 and month(date_of_sale) = ?3 ORDER BY date_of_sale", nativeQuery = true)
	public List<Sales> findSalesByDeptByYearMonth(int id, int year, int month);
}
