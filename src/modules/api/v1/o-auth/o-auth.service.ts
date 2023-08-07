import { Inject, Injectable } from '@nestjs/common';
import {
    UserProviderModel,
    UserProviderType,
} from '../user-provider/models/user-provider.model';
import { UserService } from '../user/user.service';
import { UserProviderService } from '../user-provider/user-provider.service';
import UserProviders from '../user/user.providers';
import { UserModel } from '../user/models/user.model';


export interface IOAuthOptions {
    type: UserProviderType;
    email: string;
    uuid: string;
    avatar: string;
}

@Injectable()
export class OAuthService {

    constructor (
        @Inject(UserProviderModel.name) private readonly userProviderRepository: typeof UserProviderModel) {
    }

    public async auth (options: IOAuthOptions) {
        const userProvider: UserProviderModel = await this.userProviderRepository.findOne({
            where  : {
                type: options.type,
                uuid: options.uuid,
            },
            include: [ UserModel ],
        });

        if (userProvider) {

        }
    }

    public async create () {

    }

    public async login () {

    }

}