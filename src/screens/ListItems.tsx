import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'

export interface Person{
    name:string
    age:number
}

export const ListItems = () => {

    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(10)
    
    const [People, setPeople] = useState<Person[]>([])
        
    useEffect(() => {
        let json = localStorage.getItem('people')
        if(json != null){
            setPeople(JSON.parse(json))
        }
    }, [])
        
    const ListOfPeople = People.map( (p) => (<Card key={ p.name+p.age } Person={p}/>)) 

    const Agregar = (e:any)=>{
        
        People.push({name,age})
        localStorage.setItem('people',JSON.stringify(People))
        setName('')
        setAge(0)
    }


    return (
        <div className="container mt-4">
          
            <div className="row">

                <div className="col-4">
                    <form>
                        <div className="mb-3">
                        <label htmlFor="" className="form-label">Nombre</label>

                        <input type="text" className="form-control" placeholder="Juan Perez"
                            onChange={({target:{value}})=> setName(value)} value={name} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Edad</label>
                            <input onChange={({target:{value}}) => setAge(Number(value)) }  
                                value={age} type="number"  className="form-control" min={10} />
                        </div>
                        
                        <button onClick={Agregar} className="btn btn-primary">Agregar</button>

                    </form>
                </div>

                <div className="col-4">
                    {
                        ListOfPeople
                    }
                </div>

            </div>
        </div>
    )
}
