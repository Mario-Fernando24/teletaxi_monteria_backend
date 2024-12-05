import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//esta haciendo referencia a una tabla de la base de dato
@Entity({name: 'users'})
export class User{
   
    @PrimaryGeneratedColumn()
    id:number;
    @Column({unique: true})
    email: String;
    @Column()
    name: String;
    @Column()
    lastname: String;
    @Column({unique: true})
    phone: String;
    @Column({nullable: true})
    image: String;
    @Column()
    password: String;
    @Column({nullable: true})
    notification_token: String;
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    update_at: Date;

}