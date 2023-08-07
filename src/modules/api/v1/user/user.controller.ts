import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('/api/v1/user')
export class UserController {

    constructor (private readonly userService: UserService) {
    }

    @Post()
    create (@Body() body: { login: string }) {
        return this.userService.create(body.login);
    }

    @Get()
    get () {
        return this.userService.get();
    }

}