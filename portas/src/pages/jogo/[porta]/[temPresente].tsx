import styles from '../../../styles/Jogo.module.css'
import { useState } from "react"

import Portas from "@/components/Portas"
import { atualizarPortas, criarPortas } from "@/functions/portas"
import Botao from '@/components/Botao'
import Link from 'next/link'

export default function jogo() {
    const [portas, setPortas] = useState(criarPortas(3, 3, [5, 2])) // eh uma funcao return new PortaModel(numeroDaPorta, temPresente)

    function renderizarPortas() {
        return portas.map(porta => {
            return <Portas key={porta.qntPorta} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }
    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div>
                <Link href={`/`}>
                    <Botao children={"Reiniciar"} style={{color: "white"}}/>
                </Link>
            </div>
        </div>
    )
}

//<Portas value={porta} onChange={novaPorta => console.log(novaPorta)} />

/* vídeo: usando o evento onchange na PORTA ele funciona como um input next 07.mp4

https://www.cod3r.com.br/courses/take/nextjs/lessons/25743627-adicionando-eventos-a-porta-02

*/
// const [porta, setPorta] = useState(new PortaModel(1))
// // const [texto, setTexto] = useState('...')
// return (
//   <div style={{display:"flex"}}>
//     {/* <input type="text" value={texto}
//       onChange={e => setTexto(e.target.value)}/> */}
//       <Portas value={porta} onChange={novaPorta => setPorta(novaPorta)}/>

//   </div>
// )

//return <Portas key={porta.numero} value={porta} onChange={console.log}/>