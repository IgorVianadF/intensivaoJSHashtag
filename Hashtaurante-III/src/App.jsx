import { useState } from 'react'
import url from '../assets/hashtaurante.webp' 
import '../App.css'
import Navegacao from './Navegacao'
import { ItemCardapio } from './ItemCardapio'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio'

function App(){
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, updatePage] = useState(0);
    return(
      <>
          <img src={url} alt="" className='capa'/>
          <Navegacao updatePage={updatePage}/>
          <div className="menu">
            {paginasMenu[paginaSelecionada].map(item=><ItemCardapio 
            nome={item.nome} 
            preco={item.preco} 
            descricao={item.descricao} 
            imagem={item.imagem}/>)}
          </div>
      </>
    )
}

export default App