
import React, { useState } from "react";
import "./wrapper.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
             <div className="container wrapper__rec">
             <ul className="wrapper__list">
                {
                  booksEl.map((Element,index)=>{
                    return(
                        <li  key={index}>
                            <img src={Element.image} alt="" />
                            <h2>{Element.title}</h2>
                           <p>price : {Element.price}</p>
                       <div>
                       <span className="wrapper__shopping">
                            <AddShoppingCartIcon />
                            <h6>add to book</h6>
                        </span>
                       </div>
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