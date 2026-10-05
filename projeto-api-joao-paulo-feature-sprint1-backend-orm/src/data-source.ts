import 'reflect-metadata'; 
import { DataSource } from 'typeorm'; 
import { User } from
'./entities/User'; 
export const AppDataSource = new DataSource({ type: 'postgres', host: 'lo
calhost', port: 5432, username: 'postgres', password: 'secretpassword', database: 'apidb', 
synchronize: true, 
[User], });
