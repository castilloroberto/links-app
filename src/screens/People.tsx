import React, { useState } from 'react';


function App() {

  const [nombre, setNombre] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [counter, setCounter] = useState<number>(0)
  const [clave, setClave] = useState<string>('')

  const onChangePassword = ({target:{value}}:React.ChangeEvent<HTMLInputElement>)=>{
    
    
    setPassword(value)
    
    
  }
  
  
  const onChangeName = (e:React.ChangeEvent<HTMLInputElement>)=>{
    
    setNombre(e.target.value)
    
  }
  
  const Entrar = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    localStorage.setItem(password,nombre)
    setPassword('')
    setNombre('')
  }

  const SearchItem = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    let string = localStorage.getItem(clave)
    console.log(string);
    
    if(string != null)
      setNombre(string)
    else
      setNombre('Clave Incorrecta')
  }
  

  return (
    <div className="container mt-4">

        <h2>Local Storage App</h2>

            <div className="row">
              
            <div className="col-4 mt-4">

              <form>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Nombre</label>
                  <input type="text" className="form-control" onChange={onChangeName} value={nombre} />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input onChange={onChangePassword} value={password} type="password" className="form-control" />
                </div>
                <button onClick={Entrar} className="btn btn-primary">Entrar</button>

              </form>

            </div>

            <div className="col-4">

              <h3>Name: {nombre}</h3>
              <h3>password: {password}</h3>
              <h3>Counter: {counter}</h3>
              <button className="btn btn-outline-primary" onClick={()=> setCounter(counter +1 )}>+1</button>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input onChange={({target:{value}})=> setClave(value)} value={clave} type="password" className="form-control" />
                </div>
              <button className="btn btn-outline-primary" onClick={SearchItem}>Entrar</button>
            </div>
          </div>
    </div>
  );
}

export default App;
