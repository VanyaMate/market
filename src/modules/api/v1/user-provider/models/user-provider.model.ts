import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { UserModel } from '../../user/models/user.model';
import { UserProviderModule } from '../user-provider.module';
import { Col } from 'sequelize/types/utils';


export enum UserProviderType {
    GOOGLE = 'google'
}

@Table({
    tableName: 'user-provider',
})
export class UserProviderModel extends Model<UserProviderModel, any> {

    @Column({ type: DataType.ENUM, values: [ 'google' ], allowNull: false })
    type: UserProviderType;

    @Column({ type: DataType.STRING, allowNull: false })
    uuid: string;

    @ForeignKey(() => UserModel)
    user_id: number;

    @BelongsTo(() => UserModel, 'user_id')
    user: UserModel;

}