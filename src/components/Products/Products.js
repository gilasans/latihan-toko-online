import { useState } from "react"
import Product from "../Product/Product";
import "./Products.css"
import AddProductForm from "../AddProductForm/AddProductForm";
const Products = () => {
    const [datas, setDatas] = useState([
        {
            nama:"Kursi Gaming Fantech ",
            harga:2.350,
            gambar:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/2/19/8f51dc7f-50de-4b90-8945-55956ce825c4.png",
            message:"Beli Sekarang ?",
        },
        {
            nama:"Poco X6 Pro",
            harga:4.999,
            gambar:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/24/7f62ea42-943f-43d9-a2a1-8017026f5984.jpg",
            message:"Beli Sekarang ?",
        },
        {
            nama:"SSD Seagate 1 TB Gen 4",
            harga:2.450,
            gambar:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/9/6/f344bf28-1f9b-4982-9a42-6f008261753e.png",
            message:"Beli Sekarang ?",
        },
        {
            nama:"Gamepad single Usb",
            harga:230,
            gambar:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/6/17/15a87b63-aaad-4c96-a419-945fcdcbba49.jpg",
            message:"Beli Sekarang ?",
        },
        {
            nama:"Mouspad Gaming Sades",
            harga:2.350,
            gambar:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/10/20/4343c9e1-51c0-4b7e-9c0b-a5d54157a5b9.png",
            message:"Beli Sekarang ?",
        },
         {
            nama:"Asus Vivobook 14",
            harga:2.350,
            gambar:"https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/2/21/76b45976-e772-4524-a37c-e2652fc0bdc5.png",
            message:"Beli Sekarang ?",
        },
    ]);
    const handleClick = () => {
        const product = {
          nama: "Asus Vivobook 14",
          harga: 2.50,
          gambar: "https://picsum.photos/200/300",
          message:"Beli Sekarang ?",
        };
        // array baru (product)
        setDatas([...datas, product]);
      };
    const addProduct = (product) => {
        setDatas([...datas,product]);
    };
    
      console.log(datas);
      


    return(
        <div>
            <h1>Bayar di tempat</h1>
            <div className="products-container">
            {datas.map((data) => {
          return (
            <Product
              nama={data.nama}
              harga={data.harga}
              gambar={data.gambar}
              message={data.message}
            />
          );
        })
    }
    <button className="btn" onClick={handleClick}>Add Product</button>
            </div>
            <AddProductForm onAddProduct={addProduct}/>
        </div>
    );
}

export default Products;