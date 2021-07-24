import React, { useState } from 'react'






export interface Link{
    Title:string
    Hora:string
    Link:string
}
export const Editar = () => {


    const [Links, setLinks] = useState<Link[]>([])
    const [Title, setTitle] = useState<string>('')
    const [Hora, setHora] = useState<string>('')
    const [Link, setLink] = useState<string>('')

    const Agregar = (e:any)=>{
        
        Links.push({Title,Hora,Link})
        localStorage.setItem('links',JSON.stringify(Links))
        setTitle('')
        setHora('')
        setLink('')
    }


    return (
        <div>
            <div className="container mt-4" style={{display:'flex',justifyContent:'center'}}>

             <div style={{width:'fit-content',paddingTop:20}}>
                        <form>
                            <div className="mb-3">
                            <label htmlFor="" className="form-label">Titulo</label>

                            <input type="text" className="form-control" placeholder="Matematicas"
                                onChange={({target:{value}})=> setTitle(value)} value={Title} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Hora</label>
                                <input onChange={({target:{value}}) => setHora(value) }  
                                    value={Hora} type="text" placeholder="1:00PM" className="form-control" min={10} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Link</label>
                                <input onChange={({target:{value}}) => setLink(value) }  
                                    value={Link} type="text" placeholder="https://zoom.us/j/99458674833" className="form-control" min={10} />
                            </div>
                            
                            <button onClick={Agregar} className="btn btn-primary">Agregar</button>

                        </form>
                    </div>
            </div>
        </div>
    )
}
