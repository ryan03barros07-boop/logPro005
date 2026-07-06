class ContaBancaria {
    titular: string;
    saldo: number;
    historico: string[];

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
        this.historico = [`Saldo inicial de R$ ${saldo}`];
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            this.historico.push(`Depósito de R$ ${valor} realizado`);
        } else {
            console.log("O valor de depósito deve ser maior que zero.");
        }
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            this.historico.push(`Saque de R$ ${valor} realizado`);
        } else if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de R$ ${valor}`);
            this.historico.push(`Tentativa de saque de R$ ${valor} negada (Saldo insuficiente)`);
        } else {
            console.log("O valor de saque deve ser maior que zero.");
        }
    }

    // Método que faltava implementar
    exibirSaldo(): void {
        console.log(`--- Extrato de ${this.titular} ---`);
        console.log(`Saldo Atual: R$ ${this.saldo}`);
        console.log("Histórico de Operações:");
        this.historico.forEach(operacao => console.log(` - ${operacao}`));
        console.log("-----------------------------------");
    }
}

// --- Simulação das Operações ---

// 1. Criando as 2 contas
const conta1 = new ContaBancaria("Alice", 1000);
const conta2 = new ContaBancaria("Bruno", 500);

// 2. Simulando operações na Conta 1
conta1.depositar(500);
conta1.sacar(200);
conta1.sacar(2000); // Deve dar saldo insuficiente
conta1.exibirSaldo();

// 3. Simulando operações na Conta 2
conta2.sacar(100);
conta2.depositar(300);
conta2.exibirSaldo();