import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    AuthModule, 
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME//Cambiamos el nombre de la base de datos
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    
  }


}
