package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Empleo;
import com.example.backend.repository.EmpleoRepository;

import educacion.repository.EducacionRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class EmpleoController {
	
	@Autowired
	private EmpleoRepository repositorio;
	
	
	@GetMapping("/empleos")
	public List<Empleo> listarTodosLosEmpleos(){
		return repositorio.findAll();
	}
	
	@GetMapping("/edu")
	public String saludo() {
		return "Hola";
	}
	
	
	@PostMapping("/empleos")
	public Empleo guardarEmpleo( @RequestBody Empleo empleo ) {
		return repositorio.save(empleo);
	}
	
}
