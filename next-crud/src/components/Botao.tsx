
interface BotaoProps  {
    children: any
    corBotao?: 'green' |'blue' | 'gray'
    className?: string
    onClick?: () => void
}
export default function Botao (props: BotaoProps){

    const corBotao = props.corBotao ?? 'gray' //caso nao esteja setado setar com gray
    return(
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${corBotao}-100 to-${corBotao}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}
            
        >
            {props.children}
        </button>
    )
}