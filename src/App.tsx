import { useState } from 'react'
import './App.css'

import LogoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState ("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0) // sempre começar com a primeira categoria selecionada

  // variavel js com um array de objetos com nome de categoria e as frases
  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'siga os bons',
        'Há ainda tanta coisa linda na vida para se descobrir.',
        'Que todos os nossos passos nos levem para o que nos faz feliz de verdade.',
        'Siga sempre confiante do seu potencial!',
        'Hoje é um novo dia. Não fique pensando no ontem.',
      ]
    },
    {
      id:2,
      nome: 'Bom dia',
      frases:[
        'Mais um dia começando! Vamos firmes e fortes alcançar nossos objetivos!',
        'Desejo que este dia seja marcado por novas oportunidades, muito amor e, principalmente, repleto de felicidade. Bom dia',
        'Agradeça por este dia maravilhoso. Bom dia!',
        'Desejo a todos um dia iluminado!',
        'Bom dia para você que acordou com a certeza de que dias melhores virão!',
      ]
    }
  ]

  return (
    <div className='container'>
      <img src={LogoImg} alt="logo frases"
      className='logo' />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) =>  (// map para percorrer os items
          <button
          key={item.id}
           className='category-button'>
            {item.nome}
            </button>
        ))}
      </section>
      <button className='button-frase'>Gerar frase</button>
      <p className='textoFrase'>
        {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}
      </p>
          
    </div>
  )
}

export default App
