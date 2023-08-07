import { Module } from '@nestjs/common';
import { CommonV1Module } from './v1/common-v1.module';


@Module({
    imports: [
        CommonV1Module,
    ],
})
export class CommonModule {
}