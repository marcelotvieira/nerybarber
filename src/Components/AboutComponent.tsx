import * as React from 'react'
import { Button, Carousel, Divider, } from 'antd'
import { FacebookFilled, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { ImageGrid } from './ImageGrid'
import { barberPics } from '../data'

export enum AboutVariant {
  'full',
  'reduced',
}

type Props = {
  variant: AboutVariant
}
export default function AboutComponent({ variant }: Props) {
  return (

    <div>
      {variant === AboutVariant.reduced && (
        <div className="container about flex mg3 gap3 justified-center wrappable aligned-center">
          <div className="column">
            <h1>QUEM SOMOS?</h1>
            <p>Nascida em 2020, a Nery Barber vem crescendo e proporcionado cada vez mais qualidade em seus atendimentos. Eleita uma das melhores barbearias de Sabará temos o orgulho de proporcionar atendimentos únicos e exclusividades que nenhuma outra barbearia possui, conheça um pouco mais sobre o nosso clube de assinaturas!</p>

            <Button href="/about" type="primary">Saber mais</Button>
          </div>
          <div className="column about-image">
          </div>
        </div>
      )}

      {variant === AboutVariant.full && <div>
        <div className="container about flex gap3 justified-center wrappable aligned-center">
          <div className="column">
            <h1>A BARBEARIA</h1>
            <p> A Nery Barber está em constante mudança, sempre inovando e trazendo os melhores procedimentos da área. Ao longo de nossa história atingimos um patamar de excelência em diversos aspectos.</p>
          </div>
          <div className="column about-image barbershop">
          </div>
        </div>
        <div className="container about flex gap3 justified-center wrappable-reversed aligned-center">
          <div className="column about-image confort">
          </div>
          <div className="column">
            <h1>CONFORTO E EXCELÊNCIA</h1>
            <p>Um ambiente totalmente planejado para receber você com a descontração e conforto que merece.</p>
          </div>
        </div>

        <div className="container about flex gap3 justified-center wrappable aligned-center">
          <div className="column">
            <h1>MELHOR EXPERIÊNCIA EM ATENDIMENTO</h1>
            <p> Oferecemos um experiência incrível com o compromisso de te deixar impecável. Escolhemos cuidadosamente nossos produtos e equipamentos para garantir o conforto que você merece!</p>
          </div>
          <div className="column about-image service">
          </div>
        </div>


        <div className="container about flex gap3 justified-center wrappable-reversed aligned-center">
          <div className="column about-image environment">
          </div>
          <div className="column">
            <h1>AMBIENTE AGRADÁVEL</h1>
            <p>Boas conversas, ótimo atendimento, espaço climatizado, bebidas geladinhas, guloseimas e petiscos para garantir mais conforto e satisfação a nossos clientes!</p>
          </div>
        </div>

        <Divider dashed type="horizontal" className="mg2" />


        <div className="about">
          <div className="about-structure-container">
            <h1 className="text-centered mg1">CONHEÇA MAIS EM</h1>
            <ul className="container flex justified-center gap2">
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/barbeariafreestyle.br?locale=pt_BR"><FacebookFilled />
                </a></li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/nery.barber/"><InstagramOutlined />
                </a></li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://wa.me/5531975013830"><WhatsAppOutlined />
                </a></li>
            </ul>
          </div>
        </div>

        <div className="container structure about flex columned gap3 justified-center wrappable aligned-center">
          <div className="about-structure-container">
            <h1>ESTRUTURA</h1>
            <ul>
              <li>7 Profissionais altamente capacitados.</li>
              <li>Bar com opções de bebidas.</li>
              <li>Ambiente climatizado.</li>
              <li>Som e vídeo para entretenimento.</li>
            </ul>
          </div>

        </div>

        <ImageGrid images={barberPics} />

      </div>


      }

    </div >
  )
}
