
import React, { useState } from "react";
import "./wrapper.scss";


function Wrapper(){
    const [booksEl , setBook] = useState([])

    
 const handle =(e)=>{
     if(e.key == "Enter"){
        let res = e.target.value
            fetch(`https://api.itbook.store/1.0/search/${res}`)
            .then(response => response.json())
            .then(data =>{
                let reskuma = data.books
                setBook(reskuma);
                console.log(booksEl);
            })
    
     }
 }

    return(
        <div className="wrapper">
              <div className="container wrapper__box" >
              <input type="text" onKeyPress={handle} />
              </div>
             <div className="container">
             <ul className="wrapper__list">
                {
                  booksEl.map((Element,index)=>{
                    return(
                        <li key={index}>
                            {Element.title}
                        </li>
                    )
                  })
                }
               
              </ul>
             </div>
        </div>
    )
}

export default Wrapper;