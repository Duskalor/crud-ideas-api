import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCategoriaDto: Prisma.categoriaCreateInput) {
    return await this.prisma.categoria.create({ data: createCategoriaDto });
  }

  async findAll() {
    return await this.prisma.categoria.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.categoria.findUnique({ where: { id } });
  }

  async update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    return await this.prisma.categoria.update({
      where: { id },
      data: updateCategoriaDto,
    });
  }

  async remove(id: string) {
    return this.prisma.categoria.delete({ where: { id } });
  }
}
