import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  dateOfBirth: Date;

  @Column()
  address: string;

  @Column()
  country: string;

  @Column()
  aboutMe: string;

  @Column()
  profilePicture: string;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];
}
