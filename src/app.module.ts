import { Module } from '@nestjs/common';
import { RootModule } from './modules/root.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from './modules/database/sequelize/sequelize.module';


@Module({
    imports: [
        RootModule,
        ConfigModule.forRoot({
            envFilePath: `.${ process.env.NODE_ENV }.env`,
            isGlobal   : true,
        }),
        SequelizeModule,
    ],
})
export class AppModule {
}
