import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import {
    OAUTH_GOOGLE_CLIENT_ID, OAUTH_GOOGLE_CLIENT_REDIRECT,
    OAUTH_GOOGLE_CLIENT_SECRET,
} from '../consts/env.consts';
import { Injectable } from '@nestjs/common';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor (private readonly configService: ConfigService) {
        super({
            clientID    : configService.get<string>(OAUTH_GOOGLE_CLIENT_ID),
            clientSecret: configService.get<string>(OAUTH_GOOGLE_CLIENT_SECRET),
            callbackURL : configService.get<string>(OAUTH_GOOGLE_CLIENT_REDIRECT),
            scope       : [ 'email', 'profile' ],
        });
    }

    public async validate (accessToken: string, refreshToken: string, profile: Profile): Promise<Profile> {
        return profile;
    }
}