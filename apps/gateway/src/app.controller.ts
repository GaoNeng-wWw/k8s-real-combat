import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Inject,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { UserService } from '../../user/src/user.service';
import {
    CreateUserRequest,
    DeleteUserRequest,
    UpdateUserRequest,
} from '@app/dto/user';

@Controller()
export class AppController {
    private service: UserService;
    constructor(
        @Inject('user')
        private client: ClientGrpc,
    ) {
        this.service = this.client.getService(UserService.name);
    }

    @Get('/users')
    async listUsers(
        @Query('offset') offset: number,
        @Query('limit') limit: number,
    ) {
        return this.service.listUsers({ offset, limit });
    }
    @Get('/user/:email')
    async getUser(@Param('email') email: string) {
        if (!email) {
            throw new HttpException(
                'EMAIL_SHOULD_NOT_EMPTY',
                HttpStatus.BAD_REQUEST,
            );
        }
        return this.service.getUser({ email });
    }
    @Post('/user')
    async createUser(@Body() user: CreateUserRequest) {
        return this.service.createUser(user);
    }
    @Put('/user')
    async updateUser(@Body() user: UpdateUserRequest) {
        return this.service.updateUser(user);
    }
    @Delete('/user')
    async deleteUser(@Body() data: DeleteUserRequest) {
        return this.service.deleteUserRequest(data);
    }
}
