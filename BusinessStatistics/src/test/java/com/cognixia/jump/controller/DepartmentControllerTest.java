package com.cognixia.jump.controller;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.cognixia.jump.filter.JwtRequestFilter;
import com.cognixia.jump.model.Department;
import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.DepartmentRepository;
import com.cognixia.jump.service.MyUserDetails;
import com.cognixia.jump.service.MyUserDetailsService;
import com.cognixia.jump.util.JwtUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(value = DepartmentController.class, includeFilters = {
		@ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = JwtUtil.class) })
public class DepartmentControllerTest {

	private static final String STARTING_URI = "http://localhost:8080/api";

	@Autowired
	private MockMvc mvc;

	@MockBean
	private MyUserDetailsService myUserDetailsService;

	@MockBean
	private DepartmentRepository repo;

	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private JwtRequestFilter filter;
	
	@Test
	void testGetDepts() throws Exception {
		String uri = STARTING_URI + "/dept";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		List<Department> allDepts = new ArrayList<Department>();
		Department dept1 = new Department(1, "Candy Factory", "Candy");
		Department dept2 = new Department(2, "Shirt Factory", "Shirts");
		Department dept3 = new Department(3, "Shoe Factory", "Shoes");
		allDepts.add(dept1);
		allDepts.add(dept2);
		allDepts.add(dept3);
		
		when(repo.findAll()).thenReturn(allDepts);
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
		
		mvc.perform(request).andDo(print()).andExpect(status().isOk())
			.andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
			.andExpect(jsonPath("$.length()").value(allDepts.size()))
			.andExpect(jsonPath("$[0].id").value(allDepts.get(0).getId()))
			.andExpect(jsonPath("$[0].name").value(allDepts.get(0).getId()))
			.andExpect(jsonPath("$[0].productName").value(allDepts.get(0).getId()))
			.andExpect(jsonPath("$[1].id").value(allDepts.get(1).getId()))
			.andExpect(jsonPath("$[1].name").value(allDepts.get(1).getId()))
			.andExpect(jsonPath("$[1].productName").value(allDepts.get(1).getId()))
			.andExpect(jsonPath("$[2].id").value(allDepts.get(2).getId()))
			.andExpect(jsonPath("$[2].name").value(allDepts.get(2).getId()))
			.andExpect(jsonPath("$[2].productName").value(allDepts.get(2).getId()));
		
		verify(repo, times(1)).findAll();
		verifyNoMoreInteractions(repo);
	}
	
	@Test
	void testGetDeptById() throws Exception {
		String uri = STARTING_URI + "/dept/{id}";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);

		int id = 1;
		Department dept1 = new Department(id, "Candy Factory", "Candy");		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri, id)
				.header("Authorization", "Bearer " + jwtToken);

		when(repo.findById(id)).thenReturn(Optional.of(dept1));
		when(myUserDetailsService.loadUserByUsername("admin2")).thenReturn(dummy);
		
		mvc.perform(request).andDo(print()).andExpect(status().isOk())
			.andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
			.andExpect(jsonPath("$.id").value(dept1.getId())) 
			.andExpect(jsonPath("$.name").value(dept1.getName()))
			.andExpect(jsonPath("$.productName").value(dept1.getProductName()));
		
		verify(repo, times(1)).findById(id);
		verifyNoMoreInteractions(repo);
	}
	
	@Test
	void testCreateDepartment() throws Exception {
		String uri = STARTING_URI + "/dept";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);

		int id = 1;
		Department dept1 = new Department(id, "Candy Factory", "Candy");		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.post(uri)
				.content(asJsonString(dept1))
				.contentType(MediaType.APPLICATION_JSON_VALUE)
				.header("Authorization", "Bearer " + jwtToken);

		when(repo.save(Mockito.any(Department.class))).thenReturn(dept1);
		when(myUserDetailsService.loadUserByUsername("admin2")).thenReturn(dummy);
		
		mvc.perform(request).andDo(print()).andExpect(status().isOk())
			.andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
			.andExpect(jsonPath("$.id").value(dept1.getId())) 
			.andExpect(jsonPath("$.name").value(dept1.getName()))
			.andExpect(jsonPath("$.productName").value(dept1.getProductName()));
		
		verify(repo, times(1)).save(Mockito.any(Department.class));
		verifyNoMoreInteractions(repo);
	}
	
	@Test
	void testUpdateDept() throws Exception {
		String uri = STARTING_URI + "/dept";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);

	}
	
	@Test
	void testDeleteDept() throws Exception {
		String uri = STARTING_URI + "/dept";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);

	}
	
	@Test
	void testDeleteDeptById() throws Exception {
		String uri = STARTING_URI + "/dept/{id}";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);

	}
	
	public static String asJsonString(final Object obj) {
		
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (JsonProcessingException e) {
			throw new RuntimeException();
		}
		
	}
}
