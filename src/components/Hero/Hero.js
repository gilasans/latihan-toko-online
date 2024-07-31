import React from "react";
import "./Hero.css"
const Hero = () => {
    return (
        <div>
            <div class="container">
                <section className="hero">
                    <div className="hero-left">
                        <h2 className="hero-title">Ellipsesinc - Kaos Oversize Pria Wanita NY - Putih</h2>
                        <h3 className="hero-harga">Rp43.900</h3>
                        <p className="hero-description">
                        T-Shirt Ellipsesinc. adalah salah satu lini pakaian terbaik dan berkualitas tinggi di antara Local Brand Indonesia. Dibuat dengan bahan katun yang nyaman dipakai untuk menemani harimu dan memiliki desain yang unik. Dapatkan tshirt dengan warna cantik ini untuk tampil menarik setiap saat!
                        </p>
                        <div class="tombol">
                        <p className="hero-button_1">Beli</p>
                        <p className="hero-button_2">Simpan</p>

                        </div>
                    </div>
                    <div className="hero-right">
                        <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2024/2/23/16631e31-1e75-43ec-a7a5-3b5ef394597a.jpg" alt="hero-img" className="hero-image"/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero;