import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import userProviders from './user.providers';
import { UserService } from './user.service';


@Module({
    providers  : [
        UserService,
        ...userProviders,
    ],
    controllers: [
        UserController,
    ],
})
export class UserModule {

}