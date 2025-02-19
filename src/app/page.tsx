'use client'

import classNames from 'classnames'
import GlobalContextProvider from './app-context'
import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import useSWR from 'swr'
import AIView from './ai/page'

export default function Home() {
  return (
    <GlobalContextProvider>
      <AIView />
    </GlobalContextProvider>
  )
}
