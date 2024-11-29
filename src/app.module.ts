import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CategoriaModule } from './categoria/categoria.module';
import { IdeasModule } from './ideas/ideas.module';

@Module({
  imports: [CategoriaModule, IdeasModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
