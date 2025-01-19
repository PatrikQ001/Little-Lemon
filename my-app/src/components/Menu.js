import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";
import '../styles/Menu.css';
function Menu(){
    const handleOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure about your order?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I order it!"
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Confirmed!",
                text: "Your order has been processed",
                icon: "success"
              });
            }
        });
    }
    return(
        <div className='menu-container'>
            <div className="menu-header">
                <h2>This weeks specials</h2>
                <button>Order Menu</button>
            </div>
            <div className="cards">
                {
                    recipes.map(recipes => (
                        <div key={recipes.id} className="menu-items">
                            <img src={recipes.image} alt={recipes.name}/>
                            <div className="menu-content">
                                <div className="heading">
                                    <h3>{recipes.title}</h3>
                                    <p>{recipes.price}</p>
                                </div>
                                <p>{recipes.description}</p>
                                <button className="orderbtn" onClick={() => handleOrder(recipes.id)}>Order now</button>
                            </div>
                        </div>
                    ))
                        
                }
            </div>
        </div>
    )
}
export default Menu;