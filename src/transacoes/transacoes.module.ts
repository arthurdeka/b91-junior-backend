import { Module } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { TransacoesController } from './transacoes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TransacoesController],
  providers: [TransacoesService],
  imports: [PrismaModule],
})
export class TransacoesModule {}
