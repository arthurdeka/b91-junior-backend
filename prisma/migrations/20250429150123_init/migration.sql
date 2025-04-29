-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(72) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transacao" (
    "id" UUID NOT NULL,
    "data" TIME NOT NULL,
    "valor_bruto" DECIMAL(9,2) NOT NULL,
    "valor_liquido" DECIMAL(9,2) NOT NULL,
    "tipo" VARCHAR(50) NOT NULL,
    "taxa" DECIMAL(4,2) NOT NULL,
    "parcelas" INTEGER,
    "cliente_id" UUID NOT NULL,

    CONSTRAINT "transacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "transacao" ADD CONSTRAINT "cliente_fk" FOREIGN KEY ("cliente_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
