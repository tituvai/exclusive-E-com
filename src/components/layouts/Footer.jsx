import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { Link } from 'react-router-dom'
import Image from '../common/Image'
import logo from '/src/assets/footer.png'
import Title from '../common/Title'
import screen from '/src/assets/screen.png'
import google from '/src/assets/GooglePlay.png'
import apply from '/src/assets/AppStore.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="bg-black py-20">
      <Container>
        <Flex>
          <div className="w-[217px]">
            <picture>
              <Link><Image imgSrc={logo} imgAlt={'footer.png'}/></Link>
              <Title className={'text-xl text-white font-poppin font-medium leading-7 py-5'} text={'Subscribe'} as={'h4'}/>
              <Title className={'text-base text-white font-poppin leading-6 pb-2'} text={'Get 10% off your first order'} as={'h5'}/>
              <input className='w-[217px] text-base text-white font-poppin border-1 border-borderC py-2 px-3 outline-0 rounded' type="text" placeholder='Enter your email' />
            </picture>
          </div>
          <div className="w-[175px]">
            <Title className={'text-xl text-white font-poppin font-medium leading-7 py-5'} text={'Support'} as={'h4'}/>
            <ul>
              {[
                {name:"111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.", path:'/'},
                {name:"exclusive@gmail.com", path:'/'},
                {name:"+88015-88888-9999", path:'/'}
              ].map((item, index)=>(
                <Link to={item.path} key={index}><li className='text-base text-white font-poppin leading-6 py-2'>{item.name}</li></Link>
              ))}
            </ul>
          </div>
          <div className="">
             <Title className={'text-xl text-white font-poppin font-medium leading-7 py-5 '} text={'Account'} as={'h4'}/>
            <ul>
              {[
                {name:"My Account", path:'/'},
                {name:"Login / Register", path:'/'},
                {name:"Cart", path:'/'},
                {name:"Wishlist", path:'/'},
                {name:"Shop", path:'/'},
              ].map((item, index)=>(
                <Link to={item.path} key={index}><li className='text-base text-white font-poppin leading-6 py-2 hover:text-primery'>{item.name}</li></Link>
              ))}
            </ul>
          </div>
          <div className="">
             <Title className={'text-xl text-white font-poppin font-medium leading-7 py-5'} text={'Quick Link'} as={'h4'}/>
            <ul>
              {[
                {name:"Privacy Policy", path:'/'},
                {name:"Terms Of Use", path:'/'},
                {name:"FAQ", path:'/'},
                {name:"Contact", path:'/'},
              ].map((item, index)=>(
                <Link to={item.path} key={index}><li className='text-base text-white font-poppin leading-6 py-2 hover:text-primery'>{item.name}</li></Link>
              ))}
            </ul>
          </div>
          <div className="">
            <Title className={'text-xl text-white font-poppin font-medium leading-7 py-5'} text={'Download App'} as={'h4'}/>
            <Title className={'text-xs text-white font-poppin font-medium leading-4 '} text={'Save $3 with App New User Only'} as={'h4'}/>
            <div className="flex items-center gap-x-1 pt-2">
              <div className="">
                <Image imgSrc={screen} imgAlt={'screen.png'}/>
              </div>
              <div className="">
                <Image imgSrc={google} imgAlt={'GooglePlay.png'}/>
                <Image imgSrc={apply} imgAlt={'AppStore.png'}/>
              </div>
            </div>
            <div className="flex items-center gap-x-5 pt-5">
              <Link to={'/'}><FaFacebookF className='size-5 text-white hover:text-offerC'/></Link>
              <Link to={'/'}><FaTwitter className='size-5 text-white hover:text-offerC' /></Link>
              <Link to={'/'}><FaInstagram className='size-5 text-white hover:text-offerC' /></Link>
              <Link to={'/'}><FaLinkedinIn className='size-5 text-white hover:text-offerC'  /></Link>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Footer