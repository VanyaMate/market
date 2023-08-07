import { Module } from '@nestjs/common';
import { OAuthGoogleController } from './google/o-auth-google.controller';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from '../../../../passport/google.strategy';


@Module({
    imports    : [
        PassportModule.register({ defaultStrategy: 'google' }),
    ],
    controllers: [
        OAuthGoogleController,
    ],
    providers  : [
        GoogleStrategy,
    ],
})
export class OAuthModule {
}