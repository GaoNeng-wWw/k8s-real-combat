import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'user',
                transport: Transport.GRPC,
                options: {
                    url: 'localhost:3000' ?? process.env.USER_URL,
                    package: 'User',
                    protoPath: './proto/UserService.proto',
                },
            },
        ]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
