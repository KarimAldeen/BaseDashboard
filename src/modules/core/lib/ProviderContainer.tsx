import React, { ReactNode } from 'react'
import QueryProvider from './ReactQueryProvider'
import { BrowserRouter } from 'react-router-dom'
import ToastProvider from './ToastProvider'

type ProviderContainerProps =  {
    children:ReactNode

}
function ProviderContainer({children}:ProviderContainerProps) {
  return (
    <BrowserRouter  basename='/'>
     <QueryProvider>
        <ToastProvider>
             {children}
        </ToastProvider>
    </QueryProvider>
</BrowserRouter>
    )
}

export default ProviderContainer