//para saber que informacion vamos a mandar en la peticion
export class CreateUserDto{

    email: string;
    name: string;
    lastname: string;
    phone: string;
    image?: string;
    password: string;
    notification_token?: string;
}