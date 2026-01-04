import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import Title from '../common/Title';
import Peragrap from '../common/Peragrap';
import { IoMdMail } from "react-icons/io";
import Button from '../common/Button';

const Contact = () => {
  return (
    <>
    <div className="pt-10">
        <Container>
            <div className="pb-10">
                <ul className='flex gap-x-5'>
                    {[
                        {name:'Home', path:'/'},
                        {name:'/'},
                        {name:'Contact', path:'/'},
                    ].map((item, index)=>(
                    <Link to={item.path} key={index}><li className='text-gray-500 font-poppin text-sm leading-6'>{item.name}</li></Link>
                    ))}
                </ul>
            </div>

            <Flex className={'py-10'}>
                <div className="w-[30%] shadow p-10 rounded">
                    <div className="">
                        <div className="flex items-center gap-x-5">
                        <div className="w-[40px] h-[40px] rounded-full bg-primery flex justify-center items-center">
                            <FaPhoneAlt className='text-white'/>
                        </div>
                            <Title className={'text-base text-black font-poppin font-medium leading-6'} text={'Call To Us'} as={'h5'}/>
                    </div>
                    <div className="border-b-1 border-black pb-5">
                        <Peragrap className={'text-black py-5'} peraText={'We are available 24/7, 7 days a week.'}/>
                        <Peragrap className={'text-black'} peraText={'Phone: +8801611112222'}/>
                    </div>
                    </div>

                     <div className="pt-10">
                        <div className="flex items-center gap-x-5">
                        <div className="w-[40px] h-[40px] rounded-full bg-primery flex justify-center items-center">
                            <IoMdMail className='text-white size-5'/>
                        </div>
                            <Title className={'text-base text-black font-poppin font-medium leading-6'} text={'Write To US'} as={'h5'}/>
                    </div>
                    <div className="">
                        <Peragrap className={'text-black py-5'} peraText={'Fill out our form and we will contact you within 24 hours.'}/>
                        <Peragrap className={'text-black'} peraText={'Emails: customer@exclusive.com'}/>
                        <Peragrap className={'text-black pt-3'} peraText={'Emails: support@exclusive.com'}/>
                    </div>
                    </div>
                </div>
                <div className="w-[68%] shadow p-10 rounded">
                    <div className="flex justify-between">
                        <input className='w-[32%] text-base text-black font-poppin leading-6 placeholder:text-gray-500 bg-gray-100 py-2.5 px-3 outline-0 ' type="text" placeholder='Your Name *' />
                        <input className='w-[32%] text-base text-black font-poppin leading-6 placeholder:text-gray-500 bg-gray-100 py-2.5 px-3 outline-0 ' type="text" placeholder='Your Email *' />
                        <input className='w-[32%] text-base text-black font-poppin leading-6 placeholder:text-gray-500 bg-gray-100 py-2.5 px-3 outline-0 ' type="text" placeholder='Your Phone *' />
                    </div>
                    <div className="pt-10">
                        <textarea name="" id="" className='h-[200px] p-5 w-full bg-gray-100 outline-0 text-base text-black font-poppin leading-6 placeholder:text-gray-500 ' placeholder='Your Massage'></textarea>
                        <div className="flex justify-end pt-5">
                            <Button btnText={'Send Massage'}/>
                        </div>
                    </div>
                </div>
            </Flex>
        </Container>
        <div className="pt-20">
             <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.039158573785!2d90.36556225082703!3d23.747030308759708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1767535033536!5m2!1sen!2sbd"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
        </div>
    </div>
    </>
  )
}

export default Contact