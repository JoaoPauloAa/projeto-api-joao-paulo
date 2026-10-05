import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn }
   from 'typeorm'; @E
ntity('users') export class User
{ 
  @PrimaryGeneratedColumn() id!: number; @Column({ type: 'v
archar', length: 100 }) name!: string; @Column({ type: 'varchar', length: 100, unique: true
 } ) email!: string; @Column({ type: 'varchar', length: 255 }) password!: string; @CreateDateC
olumn() createdAt!: Date; }
