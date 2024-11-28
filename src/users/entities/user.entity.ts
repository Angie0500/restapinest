import { Roles } from "src/utility/common/user-roles.enum";
import{ Column, Entity, PrimaryGeneratedColumn } from "typeorm";
Entity();

@Entity('users')
export class UserEntity{
@Column()
id:number;
@Column()
nom:string;
@Column()
adresse:string;
@Column()
telephone:number;
@Column({type:'enum',enum:Roles,array:true,default:[Roles.USER]})
roles:Roles[]
}
export class User {}
