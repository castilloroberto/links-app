import React, { CSSProperties, useState } from 'react'
import { Link } from '../screens/Editar'
import { Person } from '../screens/ListItems'

interface CardProps {
    Person?:Person
    Link?:Link
}

export const Card: React.FC<CardProps> = ({Person,Link}) => {
        
        let text = "Hora:"
        if(Person != null){
            text = "Edad"
        }
        const navegar = ()=>{
            if(Link)
                window.location.href = Link?.Link
        }


        const [styles, setStyles] = useState<CSSProperties>({width:'18rem',cursor:'pointer' })
        const onMouseOver = ()=>{
            setStyles({width:'18rem',cursor:'pointer',boxShadow:'0 0 6px gray'})
        }
        const onMouseLeave = ()=>{
            setStyles({width:'18rem',cursor:'pointer'})
            
        }


        return (
            <div className="card my-2" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} style={styles} 
                onClick={navegar}>
                <div className="card-body">

                    <h5 className="card-title">{Person?.name || Link?.Title}</h5>

                    <h6 className="card-subtitle mb-2 text-muted"> {text} {Person?.age || Link?.Hora}</h6>

                </div>
            </div>   
        )
}