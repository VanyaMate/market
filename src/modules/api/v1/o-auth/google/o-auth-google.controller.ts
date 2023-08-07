import {
    Controller,
    Get,
    Next,
    Post,
    Req,
    Res,
    UseGuards,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { IGoogleUser } from './o-auth-google.interface';


@Controller('/api/v1/oauth/google')
export class OAuthGoogleController {

    @Get('')
    @UseGuards(AuthGuard('google'))
    async googleLogin () {
    }

    @Get('success')
    @UseGuards(AuthGuard('google'))
    async googleLoginCallback (@Req() request: Request) {
        const { id, name, emails } = request.user as IGoogleUser;
    }

}