import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from './models/user.model';


@Injectable()
export class UserService {

    constructor (@Inject(UserModel.name) private userRepository: typeof UserModel) {
    }

    public async create (login: string): Promise<UserModel> {
        const user: UserModel = await this.userRepository.create({ login });
        return user;
    }

    public async get (): Promise<UserModel[]> {
        return await this.userRepository.findAll();
    }

}