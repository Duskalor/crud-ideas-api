import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { categorias, ideas } from 'seed';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World! desde el backend :D';
  }

  seed = async () => {
    const categoriasDB = await this.prisma.categoria.findMany();
    if (categoriasDB.length === 0) {
      // await this.prisma.categoria.createMany({ data: categorias });
      for (const categoria of categorias) {
        await delay(1000);
        await this.prisma.categoria.create({ data: categoria });
      }

      const newCategorias = await this.prisma.categoria.findMany();

      const newIdeas = ideas.map((i) => ({
        ...i,
        categoriaId:
          newCategorias[Math.floor(Math.random() * newCategorias.length)].id,
      }));
      await this.prisma.idea.createMany({ data: newIdeas });

      return 'Datos Agregados correctamente';
    }
    return 'Ya hay datos en la base de datos';
  };
  deleteSeed = async () => {
    await this.prisma.idea.deleteMany();
    await this.prisma.categoria.deleteMany();
    return 'Deleted';
  };
}
