import { User } from '@app/schema';
import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsObject,
    IsString,
} from 'class-validator';

export class ListUserReuqest {
    @IsNumber()
    offset: number;
    @IsNumber()
    limit: number;
}
export class GetUserRequest {
    @IsString()
    @IsNotEmpty()
    email: string;
}
export class CreateUserRequest {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    nick: string;
    @IsNotEmpty()
    @IsString()
    description: string;
    @IsNotEmpty()
    @IsString()
    password: string;
}
export class UpdateUserRequest {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsObject()
    user: User;
}
export class DeleteUserRequest {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
}
