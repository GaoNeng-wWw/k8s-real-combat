import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'user',
                transport: Transport.GRPC,
                options: {
                    url: process.env.USER_URL ?? 'localhost:3000',
                    package: 'User',
                    protoPath: './proto/UserService.proto',
                },
            },
        ]),
    ],
    controllers: [AppController],
})
export class AppModule {}
