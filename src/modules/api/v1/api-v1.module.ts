import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OAuthModule } from './o-auth/o-auth.module';


@Module({
    imports: [
        AuthModule,
        UserModule,
        OAuthModule,
    ],
})
export class ApiV1Module {
}