'use client'

import classNames from 'classnames'
import { useEffect } from 'react'
import MessageTip from './MessageTip'
import AiList from './AiList'

export default function AIView() {
  return (
      <div className='h-full bg-black overflow-scroll'>
        <MessageTip 
            tips='Note: To prevent crawlers, user data is delayed by 1 hour for non-login users'
        />
        <AiList />
      </div>
  )
}

