import { CheckCircleFilled, CloseOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import * as React from 'react'
import { plans } from '../data'

export function PlanVariations(): React.ReactElement {
  return (
    <>
      <h2 className="mg1">PLANOS</h2>
      <p className="text-centered">Veja os planos disponíveis no clube do Nery</p>
      <div className="container plans gap1 flex wrappable aligned-center justified-center">
        {
          plans.map((plan) => (
            <a key={plan.name} target='_blank' rel='noreferrer' href={plan.source}>
              <div className="column pd1">
                <h3>{plan.name}</h3>
                <span className="price mg1">
                  {(plan.price).toLocaleString('pt-br', {
                    style: 'currency', currency: 'BRL'
                  })}
                </span>
                <br />
                <small>{plan.description}</small>
                <Divider type="horizontal" className="mg1" />
                <ul>{
                  plan.benefits.map((benefit) => (
                    <li className="container mg1 gap2 flex aligned-center" key={benefit.name}>
                      {benefit.active ? <CheckCircleFilled className="colored-check" /> : <CloseOutlined />}
                      <p>{benefit.name}</p>
                    </li>
                  ))
                }
                </ul>
              </div>
            </a>
          ))
        }
        {/* <div className="column pd1">1</div>
        <div className="column pd1">1</div>
        <div className="column pd1">1</div> */}
      </div>

    </>
  )
}
