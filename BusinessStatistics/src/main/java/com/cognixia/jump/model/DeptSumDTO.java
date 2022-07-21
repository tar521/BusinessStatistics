package com.cognixia.jump.model;

public class DeptSumDTO {

	private Integer id;
	private String name;
	private String month;
	private Double total;
	
	public DeptSumDTO(Integer id, String name, Double total) {
		this.id = id;
		this.name = name;
		this.total = total;
		this.month = "";
	}
	
	public DeptSumDTO(Integer id, String name, String month, Double total) {
		this.id = id;
		this.name = name;
		this.month = month;
		this.total = total;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}
	
	
}
