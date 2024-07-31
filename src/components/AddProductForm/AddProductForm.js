import React, { useState } from "react"
import "./AddProductForm.css"
const AddProductForm = ({onAddProduct}) => {
    const [formData, setFormData] = useState({
        nama:"",
        harga:"",
        gambar:"",
        
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
            
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct(formData);
    }
    return (
        <div className="container">
            <section className="form">
            <div className="form-left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQph7GdiEgFNH5IJ85fFSHaMPM991r7Alf7vA&usqp=CAU" alt="" className="form-image"/>        
            </div>
            <div className="form-right">
                <h1 className="form-title">Add Product</h1>
                <form onSubmit={handleSubmit}>
                     <div className="form-inputgroup">
                        <label htmlfor="nama" className="form-label">Nama</label>
                        <input type="text" name="nama" id="nama" className="form-input" onChange={handleChange}/>
                    </div>
                    <div className="form-inputgroup">
                        <label htmlfor="harga" className="form-label">Harga</label>
                        <input type="text" name="harga" id="harga" className="form-input"onChange={handleChange}/>
                    </div>
                    
                    <div className="form-inputgroup">
                        <label htmlfor="gambar" className="form-label">gambar</label>
                        <input type="text" name="gambar" id="gambar" className="form-input" onChange={handleChange}/>
                    </div>
                    
                    <button type="submit" className="form-button">Submit</button>
                </form>
            </div>
            </section>
        </div>
    )
}

export default AddProductForm;