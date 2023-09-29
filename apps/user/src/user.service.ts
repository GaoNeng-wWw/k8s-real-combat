import {
    CreateUserRequest,
    DeleteUserRequest,
    GetUserRequest,
    ListUserReuqest,
    UpdateUserRequest,
} from '@app/dto/user';
import { User, UserDocument } from '@app/schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly User: Model<UserDocument>,
    ) {}
    async listUsers(data: ListUserReuqest) {
        const { offset, limit } = data;
        const users = await this.User.find<User>()
            .limit(limit)
            .skip(offset)
            .exec();
        const total = await this.User.count().exec();
        return {
            users,
            total,
        };
    }
    async getUser(data: GetUserRequest) {
        const { email } = data;
        return this.User.findOne<User>({ email }).exec();
    }
    async createUser(data: CreateUserRequest) {
        const user = new this.User(data);
        return (await user.save()).toObject<User>();
    }
    async updateUser(data: UpdateUserRequest) {
        const { email, user } = data;
        return await this.User.findOneAndUpdate(
            { email },
            { $set: { ...user } },
        )
            .lean<User>()
            .exec();
    }
    async deleteUserRequest(data: DeleteUserRequest) {
        const { email } = data;
        await this.User.deleteOne({ email }).exec();
        return;
    }
}
