import { Module } from '@nestjs/common';
import { JwtModule } from './jwt/jwt.module';
import { ImageModule } from './image/image.module';
import { HashModule } from './hash/hash.module';


@Module({
    imports: [
        JwtModule,
        ImageModule,
        HashModule,
    ],
})
export class CommonV1Module {
}