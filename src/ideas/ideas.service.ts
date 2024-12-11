import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class IdeasService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createIdea: Prisma.ideaCreateInput) {
    return await this.prisma.idea.create({ data: createIdea });
  }

  findAll = async () => {
    const data = await this.prisma.idea.findMany();
    console.log({ data });
    return data;
  };
  findAllById = async (id: string) => {
    const data = await this.prisma.idea.findMany({
      where: { categoriaId: id },
    });
    console.log({ data });
    return data;
  };

  async findOne(id: string) {
    return await this.prisma.idea.findUnique({ where: { id } });
  }

  async update(id: string, updateIdea: Prisma.ideaUpdateInput) {
    return await this.prisma.idea.update({
      where: { id },
      data: updateIdea,
    });
  }

  async remove(id: string) {
    return this.prisma.idea.delete({ where: { id } });
  }

  async changeCompleted(id: string) {
    const idea = await this.prisma.idea.findFirst({ where: { id } });
    if (!idea) return;
    const newIdea = { ...idea, completado: !idea.completado };
    return await this.prisma.idea.update({
      data: newIdea,
      where: {
        id,
      },
    });
  }
}
