import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory() {
                console.log(
                    `Ready to connect ${
                        process.env.DB_URL ??
                        'mongodb://127.0.0.1:27017/?directConnection=true'
                    }`,
                );
                return {
                    uri:
                        process.env.DB_URL ??
                        'mongodb://127.0.0.1:27017/?directConnection=true',
                };
            },
        }),
    ],
})
export class DbModule {}
