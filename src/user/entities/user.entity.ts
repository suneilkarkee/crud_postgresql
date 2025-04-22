import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  age: number;

  @Column()
  sex: string;

  @Column()
  email: string;

  @Column({ name: 'personal_preference' })
  personalPreference: string;
}
