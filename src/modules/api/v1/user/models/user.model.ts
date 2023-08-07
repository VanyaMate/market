import { Column, DataType, Model, Table } from 'sequelize-typescript';


export interface IUserModelCreate {
    login: string;
}


@Table({
    tableName: 'user',
})
export class UserModel extends Model<UserModel, IUserModelCreate> {

    @Column({
        type         : DataType.INTEGER,
        allowNull    : false,
        autoIncrement: true,
        primaryKey   : true,
    })
    id: number;

    @Column({
        type     : DataType.STRING,
        allowNull: false,
    })
    login: string;

}