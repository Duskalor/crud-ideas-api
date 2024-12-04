import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCategoria: Prisma.categoriaCreateInput) {
    return await this.prisma.categoria.create({ data: createCategoria });
  }

  async findAll() {
    return await this.prisma.categoria.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.categoria.findUnique({ where: { id } });
    if (!user) {
      throw new Error(`Categoria with id: ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateCategoria: Prisma.categoriaUpdateInput) {
    return await this.prisma.categoria.update({
      where: { id },
      data: updateCategoria,
    });
  }

  async remove(id: string) {
    return this.prisma.categoria.delete({ where: { id } });
  }
}
