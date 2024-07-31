import React from "react";
import "./Product.css"
const Product = (props) => {
    const {gambar,nama,harga,message} = props ;
    return (
        <div className="content">
            <img src={gambar} alt="" width={200}></img>
            <div class="text">
                <h5>{nama}</h5>
                <p>Rp {harga}.000 </p>
            <button onClick={message}>Beli</button>
            </div>
        </div>
    );
};

export default Product;