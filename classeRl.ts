class Usuario {
  email: string;
  senha: string;
  perfil: string;

  constructor(email: string, senha: string, perfil: string) {
    this.email = email;
    this.senha = senha;
    this.perfil = perfil;
  }

  autenticar(email: string, senha: string): void {
    if (email === this.email && senha === this.senha) {
      console.log("Login realizado com sucesso");
      return;
    }
    console.log("Email ou senha incorretos.");
  }

  // O método agora está dentro da classe e aceita string para manter o padrão
  alterarSenha(novaSenha: string): void {
    this.senha = novaSenha;
    console.log("Senha alterada com sucesso!");
  }
}

// Criando os usuários com os 3 parâmetros corretos
let usuario1 = new Usuario("carlos@email.com", "1234", "Admin");
let usuario2 = new Usuario("maria@email.com", "1233", "Admin");

// Testando os métodos (passando sempre email e senha como strings)
usuario1.autenticar("carlos@email.com", "1111"); // Errado
usuario1.autenticar("carlos@email.com", "1234"); // Correto

usuario1.alterarSenha("5678"); // Nova senha como string
usuario1.autenticar("carlos@email.com", "5678"); // Autenticando com a nova senha