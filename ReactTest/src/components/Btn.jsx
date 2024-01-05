export function Btn({txt, onClick}){
    return(
        <button className={"Button"} onClick={onClick}>{txt}</button>
    )
}