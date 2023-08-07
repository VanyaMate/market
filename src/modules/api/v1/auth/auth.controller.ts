import { Controller, Post } from '@nestjs/common';


@Controller('/api/v1/auth')
export class AuthController {

    @Post('/registration')
    public async registration () {

    }

    @Post('/login')
    public async login () {

    }

    @Post('/logout')
    public async logout () {

    }

    @Post('/validate')
    public async validate () {

    }


}