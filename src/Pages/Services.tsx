import { Avatar, Button, Card, Divider } from 'antd'
import * as React from 'react'
import { services } from '../data'
import { PlusOutlined } from '@ant-design/icons'
import { ScheduleInvitePanel } from '../Components/ScheduleInvitePanel'

export default function Services() {
  return (
    <div>


      <ScheduleInvitePanel
        button={{
          label: 'Agendar',
          href: 'https://cashbarber.com.br/nerybarber',
          icon: <PlusOutlined />
        }}
      />
      <div className="container flex columned aligned-center">
        <h1 className="text-centered mg1">NOSSOS SERVIÇOS</h1>
        <p className='text-centered pd1'>Prestamos uma variedade de serviços para diferentes gostos e estilos, veja mais abaixo:</p>
      </div>
      <div
        className="container flex wrappable width-limited gap2 justified-center">

        {services.map((service, i) => (
          <Card
            bordered={false}
            key={i}
            style={{ width: 320 }}
            cover={
              <img
                className='service-image'
                style={{ objectFit: 'cover' }}
                height={240}
                alt={service.name}
                src={service.image}
              />
            }
          >
            <Card.Meta
              title={service.name}
              description={(
                <>
                  <p>{service.description}</p>
                  <p className='copy2'>Tempo Aprox: {service.duration} minutos.</p>

                </>
              )}

            />
          </Card>
        ))}
      </div>

      <div className="column" style={{ margin: '1rem auto' }}>
        <div className="container flex wrappable gap2 justified-center ">
          <h2 style={{ textAlign: 'center', maxWidth: '70%' }}>AGENDE ONLINE!</h2>
          <Button icon={<PlusOutlined />} target="_blank" href="https://cashbarber.com.br/nerybarber" type="primary" className="btn-enphasys">

            Agendar
          </Button>
        </div>
      </div>
    </div>
  )
}
