import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { Prisma } from '@prisma/client';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Post()
  create(@Body() createIdea: Prisma.ideaCreateInput) {
    return this.ideasService.create(createIdea);
  }

  @Get()
  findAll() {
    return this.ideasService.findAll();
  }
  @Get(':id')
  findAllById(@Param('id') id: string) {
    return this.ideasService.findAllById(id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ideasService.findOne(id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdea: Prisma.ideaUpdateInput) {
    return this.ideasService.update(id, updateIdea);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ideasService.remove(id);
  }
}
