import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Link } from './Editar'



export const Links = () => {
   
    
    const [Links, setLinks] = useState<Link[]>([])
        
    useEffect(() => {
        let json = localStorage.getItem('links')
        if(json != null){
            setLinks(JSON.parse(json))
        }
    }, [])
        
    const ListOfLinks = Links.map( (l) => (<Card key={ l.Link } Link={l}/>)) 

    return (
        <div>
            <div className="container mt-4">
                
                <div className="row">

                   

                    <div className="col-4">
                        {
                            ListOfLinks
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
