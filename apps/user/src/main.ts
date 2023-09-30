import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const url = '0.0.0.0:3000' ?? process.env.USER_URL;
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        UserModule,
        {
            transport: Transport.GRPC,
            options: {
                url,
                package: 'User',
                protoPath: './proto/UserService.proto',
            },
        },
    );
    Logger.log(`App start at ${url}`);
    // app.useGlobalPipes(new ValidationPipe());
    await app.listen();
}
bootstrap();
