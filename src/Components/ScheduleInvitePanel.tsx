import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { BaseButtonProps } from 'antd/es/button/button'
import * as React from 'react'

enum buttonType {
  'link',
  'primary'
}

type Props = {
  button: {
    label: string
    href: string
    icon?: React.ReactNode
  }
}


export function ScheduleInvitePanel({ button }: Props) {
  return (
    <div className="schedule-invite-panel container flex columned mg2">
      <Button
        target='_blank'
        type="primary"
        icon={button.icon && button.icon}
        className="btn-enphasys"
        href={button.href}
      >



        {button.label}
      </Button>
    </div>
  )
}
