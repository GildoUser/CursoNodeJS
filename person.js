class Pessoa {
  constructor(name, cpf, votePresi, voteGov) {
    this.name = name;
    this.cpf = cpf;
    this.votePresi = votePresi;
    this.voteGov = voteGov;
  }

  sayMyName() {
    console.log(`Meu nome é ${this.name}`);
  }

  tranformToJson() {
    let conveterPessoa = {
      name: this.name,
      cpf: this.cpf,
      votePresi: this.votePresi,
      voteGov: this.voteGov,
    };

    return conveterPessoa;
  }
}

module.exports = {
  Pessoa,
};
