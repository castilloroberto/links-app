import React from 'react'


const ListItem:React.FC<{value:number}> = ({value}) => {

    return (
        <li>{value}</li>
    )
}

export const NumberList:React.FC<{numbers?:number[]}> = ({numbers})=>{

    numbers = [10,20,30,40,50,60,70,80,90]
    const ListItems = numbers.map((n,i)=>

        <ListItem key={n+"key"+i} value={n}/>
    )

    return (    
        <ul>
            {ListItems}
        </ul>
    )
}

export const ListNumbers = () => {
    const numbers = [10,45,78,98,2,454,788]
    return (
        <div>
            <NumberList numbers={numbers}/>
        </div>
    )
}
