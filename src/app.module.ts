import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { InfoModule } from './info/info.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'me_sunil',
      password: '123',
      database: 'crud_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    InfoModule,
  ],
})
export class AppModule {}