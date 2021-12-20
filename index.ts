function soma(a: number, b: number) {
  return a + b;
}

// types
// interfaces

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquático";
  domestico: boolean;
  //   executarRugido(alturaEmDB: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICaninno extends IAnimal {
  porte: "pequeno" | "medio" | "grande";
}

type IDomestico = IFelino | ICaninno;

const animal: IDomestico = {
  domestico: true,
  nome: "costelinha",
  porte: "medio",
  tipo: "terrestre",
};

// const animal: IAnimal = {
//   nome: "Elefante",
//   tipo: "terrestre",
//   executarRugido: (alturaEmDB) => `${alturaEmDB}dB`,
// };

// const felino: IFelino = {
//   nome: "Leão",
//   tipo: "terrestre",
//   visaoNoturna: true,
// };
