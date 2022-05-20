package com.example.backend.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "empleos")
public class Empleo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "empresa" , length = 60 , nullable = false)
    private String empresa;
    
    @Column(name = "puesto", length = 60 , nullable = false)
    private String puesto;
    
    @Column(name = "periodo", length = 60 , nullable = false)
    private String periodo;
    
    @Column(name = "descripcion", length = 60 , nullable = false)
    private String descripcion;

    public Empleo() {
    }

    public Empleo(Long id, String empresa, String puesto, String periodo, String descripcion) {
        this.id = id;
        this.empresa = empresa;
        this.puesto = puesto;
        this.periodo = periodo;
        this.descripcion = descripcion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getPuesto() {
        return puesto;
    }

    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }

    public String getPeriodo() {
        return periodo;
    }

    public void setPeriodo(String periodo) {
        this.periodo = periodo;
    }

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
    
    
}