package educacion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Empleo;
import com.example.backend.repository.EmpleoRepository;

import educacion.model.Educacion;
import educacion.repository.EducacionRepository;

@RestController
@RequestMapping("/api")
public class EducacionController {
	@Autowired
	private EducacionRepository repositorio;
	
	@GetMapping("/educacion")
	public List<Educacion>listarEducacion(){
		return repositorio.findAll();
	}
	
}
