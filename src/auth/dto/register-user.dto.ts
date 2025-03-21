import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

//para saber que informacion vamos a mandar en la peticion
export class RegisterUserDto{

    //Asegurarse que sea de tipo string
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    lastname: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail({}, {message: 'El email no es valido'})
    email: string;
    @IsNotEmpty()
    @IsString()
    phone: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(10,{ message: 'La contraseña debe tener 10 digitos'})
    password: string;

}