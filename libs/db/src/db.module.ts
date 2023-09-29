import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory() {
                return {
                    uri:
                        process.env.DB_URL ??
                        'mongodb://127.0.0.1:27017/?directConnection=true',
                    connectTimeoutMS: 500,
                    socketTimeoutMS: 500,
                    waitQueueTimeoutMS: 500,
                    serverSelectionTimeoutMS: 500,
                };
            },
        }),
    ],
})
export class DbModule {}
