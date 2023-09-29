import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DbModule } from '@app/db';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@app/schema';

@Module({
    imports: [
        DbModule,
        MongooseModule.forFeature([
            {
                name: User.name,
                collection: User.name.toLowerCase(),
                schema: UserSchema,
            },
        ]),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
