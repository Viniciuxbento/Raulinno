import React from 'react';
import "../assets/css/Layoult.css";
import Wpp from '../assets/icons/whatsapp.png'

const Layoult = () => {
  return (
    <div className='layoult'>
      <div className='Zebra'>
        <div className='backgroundLay2'>
          <h1 className='h1-background2'>MÃO DE OBRA </h1>
        </div>
        <div className='backgroundLay'>
          <h1 className='h1-background1'> ESPECIALIZADA</h1>
        </div>
      </div>
      
      <div className='botao'>
        <button>
          <label htmlFor="contt"><img className='WppIcon' src={Wpp} alt="" /></label>
            <a className='linkLayoult' target='_blank' href="https://wa.me/5548991595451?text=Ol%C3%A1%21+Vim+pelo+Site+e+gostaria+de+saber+mais+sobre+a+Raulinno." id='contt'>
              Entrar em Contato
            </a>
          
        </button>
      </div>
    </div>
  );
}

export default Layoult;
