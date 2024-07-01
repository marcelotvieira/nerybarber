import { Avatar, Button, Carousel, Divider, Space } from 'antd'
import * as React from 'react'
import { AboutVariant } from '../Components/AboutComponent'
import AboutComponent from '../Components/AboutComponent'
import { PlusOutlined } from '@ant-design/icons'
import { ClubCard } from '../Components/ClubCard'
import { ScheduleInvitePanel } from '../Components/ScheduleInvitePanel'
import { partners, professionals, services } from '../data'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <div>
      <Carousel autoplay pauseOnHover={false} autoplaySpeed={7000} infinite >
        <div className="presentation">
          <h1>CLUBE DO NERY</h1>
          <div>
            <p>Um clube para homens que valorizam a aparência. Desfrute de benefícios exclusivos e da melhor experiência em barbearia.
            </p>
            <Button className="btn-enphasys" type="primary" href="/club">Saiba mais</Button>
          </div>
        </div>


        <div className="presentation pres2">
          <h1>NOSSA LOJA</h1>
          <div>
            <p>Sofisticação e conforto na hora de cortar o seu cabelo. Oferecemos todo o tipo de tecnologia para facilitar seu atendimento, app de agendamento, iluminação estratégica, ar condicionado e muito mais!
            </p>
            <Button icon={<PlusOutlined />} target="_blank" className="btn-enphasys" type="primary" href="https://cashbarber.com.br/nerybarber/">Agendar</Button>
          </div>
        </div>

      </Carousel>

      <AboutComponent variant={AboutVariant.reduced} />


      <div className="container mg3 club-resume flex columned aligned-center">
        <h1 className="title text-centered">NOSSO CLUBE</h1>
        <p className="text-centered pd1">Já pensou em fazer a barba e cortar o cabelo sempre que quiser? Este e outros benefícios exclusivos disponíveis apenas para membros do nosso clube!</p>

        <ClubCard />

        <h2 className="text-centered">PARCEIROS DE GIGANTES</h2>

        <div className="container flex wrappable aligned-center justified-center">
          <Carousel className="mg2" pauseOnHover={false} autoplay dots={false} fade autoplaySpeed={2000} style={{ width: '50vw', maxWidth: 400, margin: 'auto' }}>
            {partners.map((partner) => (
              <img className="partner-image mg2" key={partner.name} src={partner.image} alt={partner.name} />
            ))}
          </Carousel>

          <p className="text-centered pd1 column">Parcerias de sucesso! Marcas referências em seus setores fazem parte do nosso clube de vantagens. Venha conferir!</p>

        </div>
        <h2 className="text-centered">VANTAGENS NA BARBEARIA</h2>

        <p className="text-centered pd1 column">Conheça os planos, encontre o que mais combina com você!</p>

        <Button href="/club" type="primary" className="btn-enphasys">Conhecer o clube</Button>

      </div>



      <div className="container professionals-resume flex columned aligned-center mg1">
        <h1 className="title text-centered mg1">NOSSO TIME</h1>


        <a type="default" href='/professionals' className='container flex aligned-center wrappable mg2 justified-center' >


          <p className="text-centered pd1 column">Oferecemos serviços exclusivos com os melhores profissionais da área.<br />
            <Button
              href="/professionals"
              className='mg1'
              type="primary"
            >Saber mais
            </Button>
          </p>

          <div className="flex aligned-center wrappable justified-center">

            {
              professionals.map((p) => (
                <Avatar
                  style={{
                    borderColor: 'rgb(var(--callout-rgb))',
                    margin: -10, border: '2px solid white',
                    backgroundImage: 'linear-gradient(45deg, rgb(var(--gold-rgb-1)), rgb(var(--gold-rgb-2)), rgb(var(--gold-rgb-3)), rgb(var(--gold-rgb-4)))'
                  }} key={p.lastName} size={64} src={p.picture} />
              ))
            }


          </div>
        </a>

        <p className="mg1 text-centered">As melhores mãos, e os melhores produtos para você ter a melhor experiência.</p>

      </div>

      <div className="container services-resume flex columned aligned-center mg2">
        <h1 className="title text-centered mg1">SERVIÇOS</h1>

        <p className="text-centered pd1">Atendimento único e adaptado aos desejos e necessidades de cada cliente, de cortes personalizados a tratamentos relaxantes e terapêuticos. A Nery Barber é referência quando o assunto é beleza masculina. Confira abaixo alguns de nossos serviços!<br />
          <Button
            href="/services"
            className='mg1'
            type="primary"
          >Saber mais
          </Button>
        </p>


        <div className="container mg1 gap1 flex width-limited aligned-center wrappable justified-center">
          {
            services.map((s) => (
              <p key={s.name} className='service-name-coin copy2'>{s.name}</p>

            ))
          }
        </div>




      </div>
    </div >
  )
}
