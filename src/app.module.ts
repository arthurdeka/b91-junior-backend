import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaModule } from './prisma/prisma.module';
import { TransacoesModule } from './transacoes/transacoes.module';

@Module({
  imports: [UsuariosModule, PrismaModule, TransacoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
