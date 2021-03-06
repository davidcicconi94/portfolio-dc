package educacion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import educacion.model.Educacion;

@Repository
public interface EducacionRepository extends JpaRepository<Educacion, Long> {

}
