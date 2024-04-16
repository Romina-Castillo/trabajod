import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { UserDTO } from "../dto/user.dto";
import { HttpResponse } from "../../shared/response/http.response";

export class UserMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  userValidator(req: Request, res: Response, next: NextFunction) {
    const { nombre, apellido, caso, barrio, calle } =
      req.body;

    const valid = new UserDTO();

    valid.nombre = nombre;
    valid.apellido = apellido;
    valid.caso = caso;
    valid.barrio = barrio;
    valid.calle = calle;

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.Error(res, err);
      } else {
        next();
      }
    });
  }
}