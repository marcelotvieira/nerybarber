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
import AOS from 'aos'
import { Helmet } from 'react-helmet-async'

export default function App() {

  React.useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    })
  }, [])

  return (
    <div>
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return; n=f.fbq=function() {
                n.callMethod ?
                n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              };
              if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
              n.queue=[]; t=b.createElement(e); t.async=!0;
              t.src=v; s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '445174198644146');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=445174198644146&ev=PageView&noscript=1" />`,
          }}
        />
      </Helmet>
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
