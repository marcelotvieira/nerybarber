import * as React from 'react'
import Logo from './Logo'
import { CopyrightCircleOutlined, EnvironmentOutlined, FacebookFilled, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'


export default function Footer() {
  return (
    <footer className="container flex aligned-center justified-center">

      <Logo />

      <ul>
        <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/barbeariafreestyle.br?locale=pt_BR">
          <FacebookFilled />
        </a></li>
        <li><a target="_blank" rel="noreferrer" href="https://wa.me/5531975013830">
          <WhatsAppOutlined />
        </a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/nery.barber/">
          <InstagramOutlined />
        </a></li>
      </ul>

      <p><EnvironmentOutlined /> Rua vereador José Maria Moreira, n°465, Bairro Praia dos bandeirantes, Sabará - MG, 34525-010</p>

      <p className="text-centered">
        <CopyrightCircleOutlined style={{ fontSize: 16 }} />  Nery Barber
        <br />
        Desenvolvido por
        <a target="_blank" rel="noreferrer" href="https://marcelotvieira.github.io"> Marcelo Vieira</a>
      </p>


    </footer>
  )
}
