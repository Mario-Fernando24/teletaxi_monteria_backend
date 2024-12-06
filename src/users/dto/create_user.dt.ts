//para saber que informacion vamos a mandar en la peticion
export class CreateUserDto{

    email: String;
    name: String;
    lastname: String;
    phone: String;
    image?: String;
    password: String;
    notification_token?: String;
}