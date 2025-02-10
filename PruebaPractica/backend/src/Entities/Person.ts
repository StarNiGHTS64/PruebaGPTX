import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Person extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    patternLastName: string;

    @Column()
    matternLastName: string;

    @Column()
    address: string;

    @Column()
    phoneNumber: string;

}