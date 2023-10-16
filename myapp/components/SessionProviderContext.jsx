"use client"

import {SessionProvider} from 'next-auth/react';

const SessionProviderContext = ({children,session}) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default SessionProviderContext;