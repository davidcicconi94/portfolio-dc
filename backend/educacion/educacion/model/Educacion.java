package educacion.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "educacion")
public class Educacion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @Column(name = "institucion", length = 60 , nullable = false)
	private String institucion;
	
    @Column(name = "titulo", length = 60 , nullable = false)
	private String titulo;

    @Column(name = "fechaInicio", length = 60 , nullable = false)
	private String fechaInicio;
	
    @Column(name = "fechaFin", length = 60 , nullable = false)
	private String fechaFin;

	public Educacion() {
		super();
	}

	public Educacion(Long id, String institucion, String titulo, String fechaInicio, String fechaFin) {
		super();
		this.id = id;
		this.institucion = institucion;
		this.titulo = titulo;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getInstitucion() {
		return institucion;
	}

	public void setInstitucion(String institucion) {
		this.institucion = institucion;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(String fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public String getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(String fechaFin) {
		this.fechaFin = fechaFin;
	}
}
