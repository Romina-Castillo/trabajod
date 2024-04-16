import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class UserDTO extends BaseDTO {
  @IsNotEmpty()
  nombre!: string;

  @IsNotEmpty()
  apellido!: string;

  @IsNotEmpty()
  caso!: string;

  @IsNotEmpty()
  barrio!: string;

  @IsNotEmpty()
  calle!: string;
}

export enum CasoType {
  GRUPOA = "GRUPO A",
  GRUPOB = "GRUPO B",
  GRUPOC = "GRUPO C",
}