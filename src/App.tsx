import * as React from 'react'
import './App.css'
import { Header } from './Components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './Components/Footer'
import Services from './Pages/Services'
import { WhatsAppOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Club } from './Pages/Club'
import { Professionals } from './Pages/Professionals'

export default function App() {
  return (
    <div>
      <BrowserRouter basename='/'>
        <Header />
        <div className="page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/club" component={Club} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/professionals" component={Professionals} />
          </Switch>
        </div>
        <div className="fixed-wpp-button">
          <Button target="_blank" type="link" href='https://wa.me/5531975013830'>
            <WhatsAppOutlined />
          </Button>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
