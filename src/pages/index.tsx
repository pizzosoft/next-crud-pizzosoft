import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const clientes = [
    new Cliente('Ana1', 34, '1'),
    new Cliente('Ana2', 33, '2'),
    new Cliente('Ana3', 32, '3'),
    new Cliente('Ana4', 31, '4'),
    new Cliente('Ana5', 30, '5')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'from'>('tabela')

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao
                className='mb-4'
                cor="green"
                onClick={() => setVisivel("from")}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario cliente={clientes[3]}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")} />
        )}


      </Layout>
    </div>
  )
}
