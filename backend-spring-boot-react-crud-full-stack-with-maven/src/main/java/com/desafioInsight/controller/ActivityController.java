package com.desafioInsight.controller;

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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.desafioInsight.model.Activity;
import com.desafioInsight.model.User;
import com.desafioInsight.service.ActivityService;

@CrossOrigin("http://localhost:3000")
@RestController
public class ActivityController {

	@Autowired
	private ActivityService activityManagementService;

	@GetMapping("/courses")
	public List<Activity> getAllActivitys() {
		return activityManagementService.findAll();
	}
	
	@DeleteMapping("/courses/{id}/addUser/{idUser}")
	public ResponseEntity<Activity> removeUserOfActivity(@PathVariable Integer id, @PathVariable Integer idUser) {
		Activity activityUpdated = activityManagementService.removeUser(id, idUser);
		return new ResponseEntity<Activity>(activityUpdated, HttpStatus.OK);
	}
	
	@PutMapping("/courses/{id}/addUser/{idUser}")
	public ResponseEntity<Activity> addUserOnActivity(@PathVariable Integer id, @PathVariable Integer idUser) {
		Activity activityUpdated = activityManagementService.addUser(id, idUser);
		return new ResponseEntity<Activity>(activityUpdated, HttpStatus.OK);
		//URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("../").build().toUri();
		//return ResponseEntity.noContent().location(uri).build();
	}
	
	@GetMapping("/courses/{id}/addUser")
	public List<User> getUsersActivity(@PathVariable Integer id) {
		return activityManagementService.findUsersActivity(id);
	}
	
	@GetMapping("/courses/{id}/getUsers")
	public List<User> getUserNotOnActivity(@PathVariable Integer id) {
		return activityManagementService.findUsersNotOnActivity(id);
	}

	@GetMapping("/courses/{id}")
	public Activity getActivity( @PathVariable Integer id) {
		Activity activity = activityManagementService.findById(id);
		return activity;
	}

	@DeleteMapping("/courses/{id}")
	public ResponseEntity<Void> deleteActivity(@PathVariable Integer id) {
		activityManagementService.deleteById(id);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").build().toUri();
		return ResponseEntity.noContent().location(uri).build();
	}

	@PutMapping("/courses/{id}")
	public ResponseEntity<Activity> updateActivity(@PathVariable Integer id, @RequestBody Activity activity) {
		Activity activityUpdated = activityManagementService.save(activity);
		return new ResponseEntity<Activity>(activityUpdated, HttpStatus.OK);
	}

	@PostMapping("/courses")
	public ResponseEntity<Void> createActivity(@RequestBody Activity activity) {		
		Activity createdActivity = activityManagementService.save(activity);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdActivity.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

}