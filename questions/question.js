const questions = [
  {
    "Eu sou...": {
      "I": "Idealista, criativo e visionário",
      "C": "Divertido, espiritual e benéfico",
      "O": "Confiável, meticuloso e previsível",
      "A": "Focado, determinado e persistente"
    }
  },
  {
    "Eu gosto de...": {
      "A": "Ser piloto",
      "C": "Conversar com os passageiros",
      "O": "Planear a viagem",
      "I": "Explorar novas rotas"
    }
  },
  {
    "Se quiser dar-se bem comigo...": {
      "I": "Dê-me liberdade",
      "O": "Deixe-me saber qual a sua expectativa",
      "A": "Lidere, siga ou saia do caminho",
      "C": "Seja amigável, carinhoso e compreensivo"
    }
  },
  {
    "Para conseguir obter bons resultados é preciso...": {
      "I": "Ter incertezas",
      "O": "Controlar o essencial",
      "C": "Diversão e celebração",
      "A": "Planear e obter recursos"
    }
  },
  {
    "Divirto-me quando...": {
      "A": "Me exercito",
      "I": "Tenho novidades",
      "C": "Estou com outras pessoas",
      "O": "Determino as regras"
    }
  },
  {
    "Penso que...": {
      "C": "Unidos venceremos, divididos perderemos",
      "A": "O ataque é melhor que a defesa",
      "I": "É bom ser manso, mas é sempre bom andar com um bastão",
      "O": "Um homem prevenido vale por dois"
    }
  },
  {
    "Preocupo-me em...": {
      "I": "Gerar a ideia global",
      "C": "Fazer com que as pessoas gostem",
      "O": "Fazer com que funcione",
      "A": "Fazer com que aconteça"
    }
  },
  {
    "Prefiro...": {
      "I": "Perguntas em vez de respostas",
      "O": "Ter todos os detalhes",
      "A": "Vantagens a meu favor",
      "C": "Que todos tenham hipóteses de serem ouvidos"
    }
  },
  {
    "Gosto de...": {
      "A": "Fazer progressos",
      "I": "Construir memórias",
      "O": "Fazer sentido",
      "C": "Deixar as pessoas confortáveis"
    }
  },
  {
    "Gosto de chegar...": {
      "A": "À frente",
      "C": "Junto",
      "O": "Na hora",
      "I": "Noutro lugar"
    }
  },
  {
    "Um ótimo dia para mim é quando...": {
      "A": "Consigo fazer muitas coisas",
      "C": "Me divirto com os amigos",
      "O": "Tudo segue conforme planeado",
      "I": "Desfruto de coisas novas e estimulantes"
    }
  },
  {
    "Vejo a morte como...": {
      "I": "Uma grande aventura misteriosa",
      "C": "Oportunidade para rever os falecidos",
      "O": "Um modo de receber recompensas",
      "A": "Algo que sempre chega muito cedo"
    }
  },
  {
    "A minha filosofia de vida é...": {
      "A": "Há ganhadores e perdedores, e acredito ser um ganhador",
      "C": "Para ganhar, ninguém precisa perder",
      "O": "Para ganhar é preciso seguir as regras",
      "I": "Para ganhar, é necessário inventar novas regras"
    }
  },
  {
    "Sempre gostei de...": {
      "I": "Explorar",
      "O": "Evitar surpresas",
      "A": "Focar na meta",
      "C": "Realizar uma abordagem natural"
    }
  },
  {
    "Gosto de mudanças se...": {
      "A": "Me der uma vantagem competitiva",
      "C": "For divertido e puder ser compartilhado",
      "I": "Me oferecer mais liberdade e variedade",
      "O": "Melhorar ou me der mais controlo"
    }
  },
  {
    "Não existe nada de errado em...": {
      "A": "Colocar-se à frente",
      "C": "Colocar os outros na frente",
      "I": "Mudar de ideia",
      "O": "Ser consistente"
    }
  },
  {
    "Gosto de pedir conselhos sobre...": {
      "A": "Pessoas bem-sucedidas",
      "C": "Anciãos e conselheiros",
      "O": "Autoridades no assunto",
      "I": "Lugares, os mais estranhos"
    }
  },
  {
    "O meu lema é...": {
      "I": "Fazer o que precisa de ser feito",
      "O": "Fazer bem feito",
      "C": "Fazer com a equipa",
      "A": "Simplesmente fazer"
    }
  },
  {
    "Gosto de...": {
      "I": "Complexidade, mesmo se confusa",
      "O": "Ordem e sistematização",
      "C": "Calor humano e animação",
      "A": "Coisas claras e simples"
    }
  },
  {
    "Tempo para mim é...": {
      "A": "Algo que detesto desperdiçar",
      "C": "Um grande ciclo",
      "O": "Uma flecha que leva ao inevitável",
      "I": "Irrelevante"
    }
  },
  {
    "Se eu fosse milionário...": {
      "C": "Faria doações a muitas entidades",
      "O": "Criaria uma poupança avantajada",
      "I": "Faria o que me desse na cabeça",
      "A": "Me exibiria bastante com algumas pessoas"
    }
  },
  {
    "Acredito que...": {
      "A": "O destino é mais importante do que a jornada",
      "C": "A jornada é mais importante do que o destino",
      "O": "Um cêntimo economizado é um cêntimo ganho",
      "I": "Bastam um navio e uma estrela para navegar"
    }
  },
  {
    "Acredito também que...": {
      "A": "Aquele que hesita está perdido",
      "O": "Grão a grão enche a galinha o papo",
      "C": "O que vai volta",
      "I": "Um sorriso ou uma careta é o mesmo para quem é cego"
    }
  },
  {
    "Acredito ainda que...": {
      "O": "É melhor prudência do que arrependimento",
      "I": "A autoridade deve ser desafiada",
      "A": "Ganhar é fundamental",
      "C": "O coletivo é mais importante do que o individual"
    }
  },
  {
    "Penso que...": {
      "I": "Não é fácil ficar encurralado",
      "O": "É preferível olhar, antes de pular",
      "C": "Duas cabeças pensam melhor do que uma",
      "A": "Se não tem condições de competir, não compita"
    }
  }
]

module.exports = questions;