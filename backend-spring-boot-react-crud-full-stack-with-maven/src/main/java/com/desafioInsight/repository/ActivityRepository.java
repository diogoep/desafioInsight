package com.desafioInsight.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.desafioInsight.model.Activity;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Integer> {
	

}