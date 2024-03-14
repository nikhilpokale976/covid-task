import React from 'react';
import { FaVirusCovid } from "react-icons/fa6";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineSick } from "react-icons/md";
import { GrTest } from "react-icons/gr";
import { FcDonate } from "react-icons/fc";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
const HorizontalNavBar = () => {
    return (
        <div className='h-screen w-16 bg-slate-700 rounded-full flex flex-col justify-around '>
            <div className='ml-3 pt-10 flex flex-col '>
            <FaVirusCovid  size={30}  color='white'/>
            </div>
            <div className='ml-3'>
            <CgMenuGridR   size={30}  color='white' />
            <MdOutlineSick  size={30}  color='white'/>
            <GrTest   size={30}  color='white'/>
            <FcDonate  size={30}  color='white' />
            <BiMessageRoundedDetail  size={30}  color='white'/>
            </div>
            <div className='ml-4'>
            <CiSettings  size={30}  color='white'/>
            </div>

        </div>
    );
}

export default HorizontalNavBar;
