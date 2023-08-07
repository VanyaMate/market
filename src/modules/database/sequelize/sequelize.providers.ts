import {
    ConnectionError,
    ConnectionRefusedError,
    AccessDeniedError,
    HostNotFoundError,
    HostNotReachableError,
    InvalidConnectionError,
    ConnectionTimedOutError,
} from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { Dialect } from 'sequelize/types/sequelize';
import { UserModel } from '../../api/v1/user/models/user.model';
import {
    POSTGRES_DB,
    POSTGRES_DIALECT, POSTGRES_HOST,
    POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER,
} from '../../../consts/env.consts';


export const SEQUELIZE_PROVIDE_NAME = 'SEQUELIZE';

export const sequelizeProviders = [
    {
        provide   : SEQUELIZE_PROVIDE_NAME,
        useFactory: async (config: ConfigService) => {
            const sequelize = new Sequelize({
                dialect : config.get<Dialect>(POSTGRES_DIALECT),
                host    : config.get<string>(POSTGRES_HOST),
                port    : Number(config.get<number>(POSTGRES_PORT) ?? 5432),
                username: config.get<string>(POSTGRES_USER),
                password: config.get<string>(POSTGRES_PASSWORD),
                database: config.get<string>(POSTGRES_DB),
                logging : false,
                retry   : {
                    match  : [
                        ConnectionError,
                        ConnectionRefusedError,
                        AccessDeniedError,
                        HostNotFoundError,
                        HostNotReachableError,
                        InvalidConnectionError,
                        ConnectionTimedOutError,
                    ],
                    timeout: 2000,
                    max    : 10,
                },
            });
            sequelize.addModels([ UserModel ]);
            await sequelize.sync();
            return sequelize;
        },
        inject    : [ ConfigService ],
    },
];