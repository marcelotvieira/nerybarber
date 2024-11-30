import * as React from 'react'
import { ClubCard } from '../Components/ClubCard'
import { Button, Carousel, Divider } from 'antd'
import { partners } from '../data'
import telemedicina from '../assets/images/telemedicina.png'
import { ScheduleInvitePanel } from '../Components/ScheduleInvitePanel'
import { PlanVariations } from '../Components/PlanVariations'


export function Club() {
  return (
    <>
      <ScheduleInvitePanel button={{
        label: 'Fazer parte',
        href: 'https://app.galaxpay.com.br/landingpage3865984/principal',
      }} />
      <div className="page container flex columned aligned-center">

        <h1 className="text-centered mg1">CLUBE DO NERY</h1>

        <p className="text-centered pd1">O clube do Nery é parceiro de gigantes, e quem ganha com isso é você!</p>
        <div>
          <h2 className="text-centered">DESCONTOS DE ATÉ 90% EM MAIS DE <b>30.000</b> ESTABELECIMENTOS.</h2>
          <Carousel className="mg2" pauseOnHover={false} autoplay dots={false} fade autoplaySpeed={2000} style={{ width: '50vw', maxWidth: 400, margin: 'auto' }}>
            {partners.map((partner) => (
              <img className="partner-image mg2" key={partner.name} src={partner.image} alt={partner.name} />
            ))}
          </Carousel>

        </div>
        <Divider dashed type='horizontal' />

        {/* <h2 className="text-centered">TELEMEDICINA</h2>
        <div>
          <div className="container mg2 flex wrappable justified-center aligned-center">
            <div>
              <p className="text-centered pd1">A Telemedicina é a prestação de serviços de saúde à distânca por meio de tecnologias como videochamadas e mensagens online.</p>
              <p className="text-centered pd1">
                Serviços como <b>Solicitação de exames</b>, <b>Tele Orientação</b> e/ou <b>Video Orientação</b>.
              </p>
              <p className="text-centered pd1">O assinante do clube do Nery pode contar com estes serviços!</p>
            </div>
            <img style={{ maxWidth: 300 }} src={telemedicina} alt="telemedicina" />
          </div>
        </div>

        <Divider dashed type='horizontal' /> */}

        <h2 className="text-centered">CARTÃO PERSONALIZADO.</h2>

        <p className="text-centered pd1">Você terá acesso a um cartão personalizado para disfrutar de vantagens que só o clube do Nery oferece.</p>
        <div>
          <ClubCard />
        </div>

        <p className="text-centered pd1">Terá acesso tambem ao aplicativo com diversas categorias de produtos e serviços com <b>descontos</b> exclusivos para adquirir com o clube.</p>
        <Button type="primary" className="btn-enphasys" href="https://www.clubedahora.com.br/nerybarbearia/entrar" target="_blank">Acessar aplicativo</Button>

        <Divider dashed type='horizontal' />



        <PlanVariations />

        <Button type="primary" target="_blank" href="https://app.galaxpay.com.br/landingpage3865984/principal" className="btn-enphasys mg1">Fazer parte</Button>


      </div>
    </>
  )
}
