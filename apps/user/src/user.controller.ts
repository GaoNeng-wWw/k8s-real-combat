import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
    CreateUserRequest,
    DeleteUserRequest,
    GetUserRequest,
    ListUserReuqest,
    UpdateUserRequest,
} from '@app/dto/user';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}
    @GrpcMethod('UserService')
    ListUsers(data: ListUserReuqest) {
        return this.userService.listUsers(data);
    }
    @GrpcMethod('UserService')
    GetUser(data: GetUserRequest) {
        return this.userService.getUser(data);
    }
    @GrpcMethod('UserService')
    CreateUser(data: CreateUserRequest) {
        return this.userService.createUser(data);
    }
    @GrpcMethod('UserService')
    UpdateUser(data: UpdateUserRequest) {
        return this.userService.updateUser(data);
    }
    @GrpcMethod('UserService')
    DeleteUser(data: DeleteUserRequest) {
        return this.userService.deleteUserRequest(data);
    }
}
