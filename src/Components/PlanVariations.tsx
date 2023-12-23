import * as React from 'react'
import { plans } from '../data'
import { Divider } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

export function PlanVariations() {
  return (
    <>
      <h2 className="mg1">PLANOS</h2>
      <p className="text-centered">Veja os planos disponíveis no clube do Nery</p>
      <div className="container plans gap1 flex wrappable aligned-center justified-center">
        {
          plans.map((plan) => (
            <div key={plan.name} className="column pd1">
              <h3>{plan.name}</h3>
              <span className="price mg1">
                {(plan.price).toLocaleString('pt-br', {
                  style: 'currency', currency: 'BRL'
                })}
              </span>

              <p>{plan.description}</p>

              <Divider type="horizontal" className="mg1" />

              <ul>{
                plan.benefits.map((benefit) => (
                  <li className="container mg1 gap2 flex aligned-center" key={benefit.name}>
                    {benefit.active ? <CheckOutlined /> : <CloseOutlined />}
                    <p>{benefit.name}</p>
                  </li>
                ))
              }
              </ul>
            </div>
          ))
        }
        {/* <div className="column pd1">1</div>
        <div className="column pd1">1</div>
        <div className="column pd1">1</div> */}
      </div>

    </>
  )
}
