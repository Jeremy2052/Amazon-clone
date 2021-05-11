import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="home__image" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
         {/* Product */}
         <div className="home__row">
            <Product 
                id='12321' 
                title="Cracking the Coding Interview" 
                price={11.96} 
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/51l5XzLln+L._SX348_BO1,204,203,200_.jpg"  
            />

            <Product 
                id='125434' 
                title="EVGA 06G-P4-2068-KR GeForce RTX 2060 KO Ultra Gaming, 6GB GDDR6, Dual Fans, Metal Backplate" 
                price={329.99} 
                rating={4} 
                image="https://m.media-amazon.com/images/I/71g0g+FBmBL._AC_UY218_.jpg"  
            />
         </div>
         <div className="home__row">
            <Product 
                id='144421' 
                title="Nodykka Women Tote Bags Top Handle Satchel" 
                price={14.99} 
                rating={5} 
                image="https://m.media-amazon.com/images/I/31KEmIKAacL._AC_SL260_.jpg"  
            />

            <Product 
                id='12321' 
                title="Polo Shirt" 
                price={15.00} 
                rating={4} 
                image="https://images-na.ssl-images-amazon.com/images/I/81Nq6uqIQmL._AC_UX679_.jpg"  
            />

            <Product 
                id='56341' 
                title="toyuugo 10x42 Compact Binoculars" 
                price={31.99} 
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/71gQH3UYs1L._AC_SL1500_.jpg"  
            />
         </div>

         <div className="home__row">
            <Product 
                id='66321' 
                title="Acer KG241Q Pbiip 23.6"
                price={249.99} 
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/81GG2z3Vr8L._AC_SL1500_.jpg"  
            />
            

         </div>
        
        </div>

        
    )
}

export default Home
