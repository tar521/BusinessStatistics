package com.cognixia.jump.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognixia.jump.model.DeptSumDTO;
import com.cognixia.jump.model.Department;
import com.cognixia.jump.model.Sales;
import com.cognixia.jump.repository.DepartmentRepository;
import com.cognixia.jump.repository.SalesRepository;

@Service
public class SalesService {
	
	@Autowired
	SalesRepository salesRepo;
	
	@Autowired
	DepartmentRepository deptRepo;
	
	
	// SALES SUM BY YEAR
	public List<DeptSumDTO> sumByYear(int year) {
		List<Department> depts = deptRepo.findAll();
		List<DeptSumDTO> sums = new ArrayList<DeptSumDTO>();
		
		for (Department d : depts) {
			if (d.getName().equals("Administration")) {
				continue;
			}
			Double sum = 0.00;
			List<Sales> sales = salesRepo.findSalesByDeptByYear(d.getId(), year);
			
			for (Sales s : sales) {
				sum = sum + s.getTotal();
			}
			sums.add(new DeptSumDTO(d.getId(), d.getName(), sum));
		}
		
		
		return sums;
	}
}
