export class CreateTransacaoDto {
  data: Date;
  valor_bruto: number;
  valor_liquido: number;
  tipo: string;
  taxa: number;
  parcelas?: number;
  cliente_id: string;
}
