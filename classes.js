class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    determinarAtaque() {
      if (this.tipo === 'mago') {
        return 'usou magia';
      } else if (this.tipo === 'guerreiro') {
        return 'usou espada';
      } else if (this.tipo === 'monge') {
        return 'usou artes marciais';
      } else if (this.tipo === 'ninja') {
        return 'usou shuriken';
      } else {
        return 'usou ataque desconhecido';
      }
    }
  
    atacar() {
      let ataque = this.determinarAtaque();
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }

  