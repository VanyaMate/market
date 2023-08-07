import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';


@Injectable()
export class HashService {

    public hash (string: string, salt: string): Promise<string> {
        return bcrypt.hash(string, salt);
    }

    public compare (string: string, encrypted: string): Promise<boolean> {
        return bcrypt.compare(string, encrypted);
    }

}