import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

export class IdeasService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createIdeaDto: Prisma.ideaCreateInput) {
    return await this.prisma.idea.create({ data: createIdeaDto });
  }

  async findAll() {
    return await this.prisma.idea.findMany();
  }

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
}
