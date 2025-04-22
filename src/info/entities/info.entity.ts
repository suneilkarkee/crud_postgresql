import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Info {
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

  @Column()
  personal_preference: string;
}
