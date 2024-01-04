import logo from "./logo.png"
export function Nav({txt1, txt2, txt3}){
    return(
        <div>
            <header>
                <img src={logo} alt={"logo"} className={"logo"}/>
                <nav>
                    <ul className="navigace_list">
                        <li>{txt1}</li>
                        <li>{txt2}</li>
                        <li>{txt3}</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}