package com.desafioInsight.controller;

import org.springframework.security.crypto.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.desafioInsight.model.Papel;
import com.desafioInsight.model.User;
import com.desafioInsight.service.UserService;

@CrossOrigin("http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	private UserService userManagementService;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userManagementService.findAll();
	}

	@GetMapping("/users/{id}")
	public User getUser(@PathVariable Integer id) {
		User user = userManagementService.findById(id);
		return user;
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
		userManagementService.deleteById(id);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").build().toUri();
		return ResponseEntity.noContent().location(uri).build();
	}

	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		User userUpdated = userManagementService.save(user);
		return new ResponseEntity<User>(userUpdated, HttpStatus.OK);
	}
	
	public interface PasswordEncoder {
		
	}
	
	@PostMapping("/user")
	public ResponseEntity<Void> createUser(@RequestBody User user) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);
		String hashedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(hashedPassword);
		User createdUser = userManagementService.save(user);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdUser.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

}