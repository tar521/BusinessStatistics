package com.cognixia.jump.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Department {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank
	@Column(nullable = false)
	private String name;
	
	@NotBlank
	@Column(nullable = false)
	private String productName;
	
	@OneToMany(mappedBy = "dept")
	@JsonIgnore
	private List<User> deptUsers;
	
	public Department() {}

	public Department(Integer id, @NotBlank String name, @NotBlank String productName) {
		super();
		this.id = id;
		this.name = name;
		this.productName = productName;
	}



	public List<User> getDeptUsers() {
		return deptUsers;
	}

	public void setDeptUsers(List<User> deptUsers) {
		this.deptUsers = deptUsers;
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

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	@Override
	public String toString() {
		return "Department [id=" + id + ", name=" + name + ", productName=" + productName + "]";
	}
	
	
	
	
}
