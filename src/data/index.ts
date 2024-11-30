import Acabamento from '../assets/images/Acabamento.jpg'
import Barba from '../assets/images/Barba.jpg'
import Barboterapia from '../assets/images/Barboterapia.jpg'
import Corte from '../assets/images/Corte.jpg'
import Hidratacao from '../assets/images/Hidratacao.jpg'
import Infantil from '../assets/images/Infantil.jpg'
import Luzes from '../assets/images/Luzes.jpg'
import Relaxamento from '../assets/images/Relaxamento.jpg'
import Selagem from '../assets/images/Selagem.jpg'
import Sobrancelha from '../assets/images/Sobrancelha.jpg'
import Cone from '../assets/images/cone.jpg'
import Nasal from '../assets/images/Nasal.png'


type Service = {
  name: string,
  image: any
  description: string,
  duration: number,
  icon: string,
}

type Partner = {
  name: string,
  image: any,
}

const diegoPrices = [
  { name: 'Corte com Nery', value: 50 },
  { name: 'Kids', value: 50 },
  { name: 'Corte Máquina', value: 30 },
  { name: 'Barba Express', value: 35 },
  { name: 'Barboterapia (Ozônio)', value: 40 },
  { name: 'Sobrancelha', value: 15 },
  { name: 'Acabamento (Pezinho)', value: 20 },
  { name: 'Hidratação Cabelo', value: 19.9 },
  { name: 'Hidratação Barba', value: 14.9 },
  { name: 'Camuflagem Cabelo', value: 34.9 },
  { name: 'Camuflagem Barba', value: 19.9 },
  { name: 'Relaxamento', value: 39.9 },
  { name: 'Selagem', value: 69.9 },
  { name: 'Luzes', value: 84.9 },
  { name: 'Depilação Nasal', value: 24.90 },
  { name: 'Terapia Cone Hindu', value: 44.99 },
]

  
export const samuelPedroPrices = [{ name: 'Corte', value: 45 }, ...(diegoPrices
  .map((s, i) => ({
    ...s,
    value: i === 1 ? s.value - 5 : s.value 
  })).slice(1))]

export const ramonPrices = samuelPedroPrices

export const samuelTadeuPrices = samuelPedroPrices

export const igorPrices = samuelPedroPrices


export const variablePrices = [
  'Luzes',
  'Selagem',
  'Relaxamento',
]



export const services: Service[] = [
  {
    name: 'Corte',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Transforme seu visual com um corte de cabelo feito sob medida para realçar sua personalidade.',
    image: Corte,
    duration: 40,
  },
  {
    name: 'Barba Express',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Agilidade e estilo em um serviço rápido e preciso de barbear.',
    image: Barba,
    duration: 40,
  },
  {
    name: 'Barboterapia (Ozônio)',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Relaxe enquanto cuidamos da sua barba, proporcionando uma experiência revigorante.',
    image: Barboterapia,
    duration: 40,
  },
  {
    name: 'Sobrancelha',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Destaque seu olhar com um serviço especializado em designer de sobrancelhas masculinas.',
    image: Sobrancelha,
    duration: 40,
  },
  {
    name: 'Acabamento (Pezinho)',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Refine seu estilo com um acabamento preciso, incluindo detalhes no contorno.',
    image: Acabamento,
    duration: 40,
  },
  {
    name: 'Kids',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Cuidado e estilo para os pequenos, proporcionando cortes adaptados às crianças.',
    image: Infantil,
    duration: 40,
  },
  {
    name: 'Hidratação Cabelo',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Restaure o brilho e força dos seus cabelos com nossos tratamentos de hidratação profunda.',
    image: Hidratacao,
    duration: 40,
  },
  {
    name: 'Hidratação Barba',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Restaure a vitalidade da sua barba com nossos tratamentos de hidratação profunda.',
    image: Hidratacao,
    duration: 40,
  },
  {
    name: 'Camuflagem Cabelo',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Cobre fios brancos do cabelo de forma sutil e natural.',
    image: Hidratacao,
    duration: 40,
  },
  {
    name: 'Camuflagem Barba',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Disfarça fios brancos, mantendo a cor natural da barba.',
    image: Hidratacao,
    duration: 40,
  },
  {
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    name: 'Selagem',
    description: 'Devolve o brilho, resistência e maciez para seus fios, alisando e fortalecendo seus cabelos.',
    image: Selagem,
    duration: 40,
  },
  {
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    name: 'Relaxamento',
    description: 'Alise e reduza o volume de seus fios, eliminando a necessidade do uso de chapinhas ou outros métodos de alisamentos temporários.',
    image: Relaxamento,
    duration: 40,
  },
  {
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    name: 'Terapia Cone Hindu',
    description: 'Revitalize mente e corpo com a terapia cone hindu, uma experiência única de bem-estar.',
    image: Cone,
    duration: 40,
  },
  {
    name: 'Depilação Nasal',
    icon: require('../assets/svgs/barber-brush-svgrepo-com.svg'),
    description: 'Utilizando técnicas seguras e eficazes, remova os pelos indesejados da narina, garantindo conforto e higiêne.',
    image: Nasal,
    duration: 40,
  },
  {
    icon: require('../assets/svgs/barbershop-svgrepo-com.svg'),
    name: 'Luzes',
    description: 'Ilumine seu visual com destaques precisos de cores que complementam seu estilo.',
    image: Luzes,
    duration: 40,
  },
]




export const partners: Partner[] = [
  {
    name: 'ASUS',
    image: require('../assets/images/asus.png'),
  },
  {
    name: 'Buser',
    image: require('../assets/images/buser.png'),
  },
  {
    name: 'O Boticário',
    image: require('../assets/images/boticario.png'),
  },
  {
    name: 'Netshoes',
    image: require('../assets/images/netshoes.png'),
  },
  {
    name: 'Centauro',
    image: require('../assets/images/centauro.png'),
  },
]

type Benefit = {
  name: string
  active: boolean
}

type Plan = {
  name: string
  price: number
  description: string
  benefits: Benefit[]
  source: string
}

export const plans: Plan[] = [
  {
    name: 'Economy',
    source: 'https://celcash.celcoin.com.br/landingpage3865984/principal/assinar/economy/19',
    price: 89.90,
    description: 'Escolha um plano que combine com você.',
    benefits: [
      {
        name: 'Corte ilimitado (seg a quarta)',
        active: true,
      },
      {
        name: 'Barba ilimitada (seg a quarta)',
        active: false,
      },
      {
        name: 'Acabamento pezinho (seg a quarta)',
        active: true,
      },
      {
        name: 'Corte ilimitado',
        active: false,
      },
      {
        name: 'Barba Express ilimitada',
        active: false,
      },
      {
        name: 'Acabamento pezinho ilimitado',
        active: false,
      },
      // {
      //   name: 'Desconto em Produtos e Serviços',
      //   active: true,
      // },
      {
        name: 'Benefícios com mais de 30.000 Empresas',
        active: true,
      },
      {
        name: 'TV Gratuita no App',
        active: true,
      },
      {
        name: 'Sorteios Exclusivos',
        active: true,
      },
      {
        name: 'Intransferível',
        active: true,
      },
    ]
  },
  {
    name: 'Prime',
    source: 'https://celcash.celcoin.com.br/landingpage3865984/principal/assinar/prime/18',
    price: 144.90,
    description: 'Escolha um plano que combina com você.',
    benefits: [
      {
        name: 'Corte ilimitado (seg a quarta)',
        active: true,
      },
      {
        name: 'Barba ilimitada (seg a quarta)',
        active: true,
      },
      {
        name: 'Acabamento pezinho (seg a quarta)',
        active: true,
      },
      {
        name: 'Corte ilimitado',
        active: false,
      },
      {
        name: 'Barba Express ilimitada',
        active: false,
      },
      {
        name: 'Acabamento pezinho ilimitado',
        active: false,
      },
      // {
      //   name: 'Desconto em Produtos e Serviços',
      //   active: true,
      // },
      {
        name: 'Benefícios com mais de 30.000 Empresas',
        active: true,
      },
      {
        name: 'TV Gratuita no App',
        active: true,
      },
      {
        name: 'Sorteios Exclusivos',
        active: true,
      },
      {
        name: 'Intransferível',
        active: true,
      },
    ]
  },
  {
    name: 'Gold',
    source: 'https://celcash.celcoin.com.br/landingpage3865984/principal/assinar/gold/15',
    price: 119.90,
    description: 'Escolha um plano que combine com você.',
    benefits: [
      {
        name: 'Corte ilimitado (seg a quarta)',
        active: false,
      },
      {
        name: 'Barba ilimitada (seg a quarta)',
        active: false,
      },
      {
        name: 'Acabamento pezinho (seg a quarta)',
        active: false,
      },
      {
        name: 'Corte ilimitado',
        active: true,
      },
      {
        name: 'Barba Express ilimitada',
        active: false,
      },
      {
        name: 'Acabamento pezinho ilimitado',
        active: true,
      },
      // {
      //   name: 'Desconto em Produtos e Serviços',
      //   active: true,
      // },
      {
        name: 'Benefícios com mais de 30.000 Empresas',
        active: true,
      },
      {
        name: 'TV Gratuita no App',
        active: true,
      },
      {
        name: 'Sorteios Exclusivos',
        active: true,
      },
      {
        name: 'Intransferível',
        active: true,
      },
    ]
  },
  {
    name: 'Black',
    source: 'https://celcash.celcoin.com.br/landingpage3865984/principal/assinar/black/17',
    price: 219.90,
    description: 'Escolha um plano que combine com você.',
    benefits: [
      {
        name: 'Corte ilimitado (seg a quarta)',
        active: false,
      },
      {
        name: 'Barba ilimitada (seg a quarta)',
        active: false,
      },
      {
        name: 'Acabamento pezinho (seg a quarta)',
        active: false,
      },
      {
        name: 'Corte ilimitado',
        active: true,
      },
      {
        name: 'Barba Express ilimitada',
        active: true,
      },
      {
        name: 'Acabamento pezinho ilimitado',
        active: true,
      },
      // {
      //   name: 'Desconto em Produtos e Serviços',
      //   active: true,
      // },
      {
        name: 'Benefícios com mais de 30.000 Empresas',
        active: true,
      },
      {
        name: 'TV Gratuita no App',
        active: true,
      },
      {
        name: 'Sorteios Exclusivos',
        active: true,
      },
      {
        name: 'Intransferível',
        active: true,
      },
    ]
  },
  {
    name: 'Platinum',
    source: 'https://celcash.celcoin.com.br/landingpage3865984/principal/assinar/platinum/16',
    price: 109.90,
    description: 'Escolha um plano que combine com você.',
    benefits: [
      {
        name: 'Corte ilimitado (seg a quarta)',
        active: false,
      },
      {
        name: 'Barba ilimitada (seg a quarta)',
        active: false,
      },
      {
        name: 'Acabamento pezinho (seg a quarta)',
        active: false,
      },
      {
        name: 'Corte ilimitado',
        active: false,
      },
      {
        name: 'Barba Express ilimitada',
        active: true,
      },
      {
        name: 'Acabamento pezinho ilimitado',
        active: false,
      },
      // {
      //   name: 'Desconto em Produtos e Serviços',
      //   active: true,
      // },
      {
        name: 'Benefícios com mais de 30.000 Empresas',
        active: true,
      },
      {
        name: 'TV Gratuita no App',
        active: true,
      },
      {
        name: 'Sorteios Exclusivos',
        active: true,
      },
      {
        name: 'Intransferível',
        active: true,
      },
    ]
  },
]

type Professional = {
  firstName: string
  lastName: string
  picture: any
  portfolio: any[]
  priceTable: { name: string, value: number }[]
}

export const professionals: Professional[] = [
  {
    firstName: 'Diego',
    lastName: 'Nery',
    picture: require('../assets/images/professionals/diego1.jpg'),
    portfolio: [

    ],
    priceTable: diegoPrices
  },
  {
    firstName: 'Samuel',
    lastName: 'Tadeu',
    picture: require('../assets/images/professionals/samuel1.jpg'),
    portfolio: [

    ],
    priceTable: samuelTadeuPrices
  },
  {
    firstName: 'Samuel',
    lastName: 'Pedro',
    picture: require('../assets/images/professionals/samuelpedro1.jpg'),
    portfolio: [

    ],
    priceTable: samuelPedroPrices
  },
  {
    firstName: 'Igor',
    lastName: 'Augustus',
    picture: require('../assets/images/professionals/igor1.jpg'),
    portfolio: [

    ],
    priceTable: igorPrices

  },
  {
    firstName: 'Ramon',
    lastName: 'Eduardo',
    picture: require('../assets/images/professionals/ramon1.jpg'),
    portfolio: [

    ],
    priceTable: ramonPrices

  },
  {
    firstName: 'Janielle',
    lastName: 'Paixão',
    picture: require('../assets/images/professionals/janielle1.jpg'),
    portfolio: [
    ],
    priceTable: samuelTadeuPrices
  },
  {
    firstName: 'Gabriel',
    lastName: 'Santos',
    picture: require('../assets/images/professionals/gabriel1.jpg'),
    portfolio: [

    ],
    priceTable: ramonPrices

  },
  {
    firstName: 'Pierre',
    lastName: 'Rocha',
    picture: require('../assets/images/professionals/pierre1.jpg'),
    portfolio: [
    ],
    priceTable: samuelTadeuPrices
  },
]

export const barberPics: any[] = [
  require('../assets/images/Corte.jpg'),
  require('../assets/images/Luzes.jpg'),
  require('../assets/images/Acabamento.jpg'),
  require('../assets/images/Tintura.jpg'),
  require('../assets/images/Infantil.jpg'),
  require('../assets/images/Hidratacao.jpg'),
  require('../assets/images/Barba.jpg'),
  require('../assets/images/Selagem.jpg'),
]