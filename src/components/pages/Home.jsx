import React, { useState } from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { Link } from 'react-router-dom'
import Banner from '../section/Banner'
import Categori from '../section/Categori'
import BestSell from '../section/BestSell'
import Offer from '../section/Offer'
import ExploreProduct from '../section/ExploreProduct'
import NewArrival from '../section/NewArrival'

const Home = () => {

    // Active part Start 
    const[menuActive, setMenuActive] =useState(false);

    const heandelActive = (index)=>{
        setMenuActive(index)
    }
    // Active part End

  return (
    <>
    <div className="">
        <Container>
            <Flex className={'border-t-1 border-borderC'}>
                <div className="w-[25%] border-r-1 border-borderC pt-10">
                    <ul>
                        {[
                            {name:"Woman’s Fashion", path:'/'},
                            {name:"Men’s Fashion", path:'/'},
                            {name:"Electronicsn", path:'/'},
                            {name:"Home & Lifestyle", path:'/'},
                            {name:"Medicine", path:'/'},
                            {name:"Sports & Outdoor", path:'/'},
                            {name:"Baby’s & Toys", path:'/'},
                            {name:"Groceries & Pets", path:'/'},
                            {name:"Health & Beauty", path:'/'},
                        ].map((item, index)=>(
                            <Link to={item.path} key={index} onClick={()=>heandelActive(index)}><li className={`text-base font-poppin text-black hover:text-primery leading-7 ${menuActive === index ? ' text-primery' : ''}`}>{item.name}</li></Link>
                        ))}
                    </ul>
                </div>
                <div className="w-[70%] pt-10">
                    <Banner/>
                </div>
            </Flex>
        </Container>
    </div>
    <Categori/>
    <BestSell/>
    <Offer/>
    <ExploreProduct/>
    <NewArrival/>
    </>
    
  )
}

export default Home