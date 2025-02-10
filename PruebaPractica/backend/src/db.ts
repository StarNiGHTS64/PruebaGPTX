import { createConnection} from 'typeorm';
import { Person } from './Entities/Person';

export const connectDB = async() => {
    await createConnection({
        type: 'mysql',
        username: 'root',
        password: 'password',
        port: 3306,
        host: 'localhost',
        database: 'persondb',
        entities: [Person],
        synchronize: true,
        ssl: false
    })
}