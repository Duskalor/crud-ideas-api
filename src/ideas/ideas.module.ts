import { Module } from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { IdeasController } from './ideas.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [IdeasController],
  providers: [IdeasService, PrismaService],
})
export class IdeasModule {}
