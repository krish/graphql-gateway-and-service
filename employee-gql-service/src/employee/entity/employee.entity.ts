import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity('public.Employee')
export class Employee {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  firstName: string;
  @Field()
  @Column()
  lastName: string;
  @Field()
  @Column()
  designation: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;

  @Column()
  @Field()
  projectId: string;

  @Column()
  @Field()
  locationId: string;
}
