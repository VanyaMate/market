import { UserModel } from './models/user.model';


export default [
    {
        provide : UserModel.name,
        useValue: UserModel,
    },
];