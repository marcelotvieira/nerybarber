import * as React from 'react'
import Logo from './Logo'
import { Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

export function Header() {
  const [isActiveMenu, setActiveMenu] = React.useState<boolean>(false)

  const menuItems = (
    <ul className="menu-list">
      <li><a target="_blank" rel="noreferrer" href="https://cashbarber.com.br/nerybarber">Agendar</a></li>
      <li><a href="/">Início</a></li>
      <li><a href="/about">Sobre a Barbearia</a></li>
      <li><a href="/professionals">Profissionais</a></li>
      <li><a href="/services">Serviços</a></li>
    </ul>
  )

  return (
    <header className="main-header">
      <div className="header-wrapper">
        <Logo />
        <nav>
          <Button
            className="club-btn"
            href="/club"
            type="primary"
          >CLUBE</Button>
          {menuItems}
          <Drawer
            autoFocus
            width={240}
            drawerStyle={{ backgroundColor: 'rgb(24, 24, 24)' }}
            placement="right"
            onClose={() => setActiveMenu(false)} open={isActiveMenu}
          >
            {menuItems}
          </Drawer>
          <Button
            className="menu-btn"
            type="text"
            icon={<MenuOutlined className="menu-icon" />}
            onClick={() => setActiveMenu(true)}
          />
        </nav>
      </div>


    </header>
  )
}
