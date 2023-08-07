import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PORT } from './consts/env.consts';


async function bootstrap () {
    const app: INestApplication = await NestFactory.create(
        AppModule,
        {
            cors: {
                origin     : (origin, callback) => {
                    callback(null, origin);
                },
                credentials: true,
            },
        });

    const configService: ConfigService = app.get<ConfigService>(ConfigService);
    const port: string                 = configService.get<string>(PORT);

    app.use(cookieParser());

    await app.listen(port, () => console.log(`server started on: ${ port }`));
}

bootstrap();