import { Injectable } from '@nestjs/common';
import jwt, { DecodeOptions, SignOptions } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { JWT_SECRET_KEY } from '../../../../consts/env.consts';


export type JwtPayload =
    string
    | object
    | Buffer;

export type JwtDecode = null | string | jwt.JwtPayload;

@Injectable()
export class JwtService {

    constructor (private readonly configService: ConfigService) {
    }

    public encode (payload: JwtPayload, options: SignOptions = {}): string {
        return jwt.sign(payload, this.configService.get<string>(JWT_SECRET_KEY), options);
    }

    public decode (token: string, options: DecodeOptions = {}): JwtDecode {
        return jwt.decode(token, options);
    }

}