import React from 'react'
import "../assets/css/QuemSomos.css"
import Icon from "../assets/icons/aperto-de-mao.png"
import Grpb from "../assets/images/Garopaba-background.jpg"
const QuemSomos = () => {
  return (
    <div className='container'>
        <div className='div'>
          
          <div className='container-texto'>
              <h1 className='h1'>Trabalho em família <img className='icon' src={Icon} alt="icon"/></h1>
              <p className='p1'>Somos uma equipe com vasta experiência no ramo da construção civil. Há mais de 30 anos atuamos no mercado de Garopaba, acumulando conhecimento, experiência e cultivando relacionamentos sólidos com nossos clientes. Somos reconhecidos por muitos arquitetos como a verdadeira definição de excelência em acabamento e trabalho em equipe.
              </p>
              <p className='p2'>"Somos uma empresa familiar que trabalha com paixão, buscando a perfeição em cada detalhe, refletindo o comprometimento pessoal de cada membro da equipe."</p>
              <p className='p3'>-Raulinno Construções.</p>
          </div>
          <div className='container-foto'><img className='Grpb' src={Grpb} alt="" /></div>
        </div>
    </div>
  )
}

export default QuemSomos