import { Inject, Injectable } from '@nestjs/common';
import {
    UserProviderModel,
    UserProviderType,
} from './models/user-provider.model';
import { Model } from 'sequelize-typescript';
import { UserModule } from '../user/user.module';
import { UserModel } from '../user/models/user.model';


@Injectable()
export class UserProviderService {

    constructor (@Inject(UserProviderModel.name) private readonly userProviderRepository: typeof UserProviderModel) {
    }

    public async create () {

    }

    public async findOne () {
    }

    public async delete () {

    }

}