package educacion.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class EducacionExceptions extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
    public EducacionExceptions(String mensaje){
        super(mensaje);
    }
}
