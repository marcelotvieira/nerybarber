import { Button, Carousel, Divider } from 'antd'
import * as React from 'react'
import { professionals, variablePrices } from '../data'
import { ScheduleInvitePanel } from '../Components/ScheduleInvitePanel'


export function Professionals() {
  console.log(professionals)
  return (
    <div className="page container margedTop flex columned aligned-center">

      <h1 className="text-centered mg1">NOSSO TIME</h1>
      <p className="text-centered pd1">
        Contamos com profissionais altamente <b>treinados</b> para oferecer o serviço de <b>excelência</b> que você merece.
      </p>
      <p className="text-centered pd1">
        Arraste para o lado para conhece-los
      </p>

      <Carousel
        className=""
        dotPosition='top'
        draggable
        autoplay
        pauseOnFocus
        autoplaySpeed={5000}
        style={{ width: '98vw', maxWidth: '100%', margin: 'auto' }}
      >
        {
          professionals.map((professional) => (
            <div key={professional.lastName} className="container mg1 professional">
              <div className="container flex wrappable gap2 aligned-center justified-center">

                <div className="pd1">
                  <h2>{professional.firstName} {professional.lastName}</h2>

                </div>

                <div>
                  <img className="professional-avatar" src={professional.picture} alt={professional.lastName} />
                </div>


              </div>
              <Divider dashed type="horizontal" className='mg1' />

              <h1 className="text-centered mg1 title">Serviços de {professional.firstName}</h1>
              <p className="mg2 text-centered">
                Além de preparados técnicamente, a equipe está pronta para prezar pelo conforto e boa experiência de quem conhece a loja. Tudo para que você se sinta em casa.
              </p>

              <p className="mg1 text-centered">
                Consulte a disponibilidade de horários.
              </p>

              <Button type='primary' href="https://cashbarber.com.br/nerybarber" className='btn-enphasys mg1' target="_blank">Agendar</Button>


              <ul>
                {
                  professional.priceTable.map((p) => (
                    <li key={p.name} >
                      <p>{p.name}</p>
                      <span className="price">
                        {variablePrices.includes(p.name) && 'a partir de '}
                        <span>
                          {(p.value).toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                          })}
                        </span>
                      </span>
                    </li>
                  ))
                }
              </ul>

              <Divider dashed type="horizontal" className='mg2' />


            </div>
          ))
        }
      </Carousel>

      <ScheduleInvitePanel
        button={{
          label: 'Agendar',
          href: 'https://cashbarber.com.br/nerybarber',
        }}
      />



    </div>
  )
}
