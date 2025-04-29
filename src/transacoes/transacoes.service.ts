import { Injectable } from '@nestjs/common';
import { CreateTransacaoDto } from './dto/create-transacoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TransacoesService {
  constructor(private prisma: PrismaService) {}

  create(createTransacoesDto: CreateTransacaoDto) {
    return this.prisma.transacao.create({
      data: createTransacoesDto,
    });
  }

  findAll() {
    return `This action returns all transacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} transacoe`;
  }
}
