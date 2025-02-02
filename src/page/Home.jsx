import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { CiDark, CiLight } from "react-icons/ci";
import {menus} from "../components/sidebar.js";
import {ktk,porto,ikon} from '../components/portofolio.js';



const Home = () => {
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState(false);

  return (
    <section className={`flex ${mode ? "bg-gray-500 text-black" : "bg-black text-yellow-700"} duration-[400ms] transition-all ease-in-out`}>
      <div className={`${mode ? "bg-slate-300 text-black" : "bg-[#0e0e0e] text-yellow-700"} min-h-screen ${open ? "w-80" : "w-20"} duration-[1000ms] px-4 transition-all ease-in-out fixed top-0 left-0 h-full z-10`}>
        <div className="py-3 flex justify-center">
          <HiMenuAlt3 size={26} className={`${mode ? "text-black" : "text-yellow-700"} cursor-pointer opacity-50 ${mode ? "hover:text-black" : "hover:text-white"} hover:opacity-100 transition duration-300`} onClick={() => setOpen(!open)} />
        </div>
        <nav className="flex flex-col gap-4 mt-4">
          {menus.map((menu, index) => (
            <a onClick={() => setOpen(open)} href={`#${menu.link.substring(1)}`} key={index} className={`group text-center ${mode ? "hover:text-gray-500" : "hover:text-white"} flex items-center gap-3`}>
              <menu.icon size={24} />
              <span className={`${open ? "" : "hidden"} whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 oveflow-hidden'} `}>{menu.name}</span>
              <h4 className={`${open && 'hidden'} absolute left-48 bg-black text-black 
        ${!mode && 'bg-yellow-800 '} ${mode && 'text-gray-500'} font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 w-0 overflow-hidden py-1 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu.name}</h4>
            </a>
          ))}
          <a
            className={`group hover:text-gray-500 ${!mode && 'hover:text-white'}  flex items-center gap-2 mt-40 cursor-pointer`}
            onClick={() => setMode(!mode)}
          >
            {!mode ? <CiLight size={24} /> : <CiDark size={24} />}
            <span className={`${open ? "" : "hidden"}`}>{!mode ? "Terang" : "Gelap"}</span>
            <h4 className={`${open && 'hidden'} absolute left-48 bg-black text-black 
        ${!mode && 'bg-yellow-800 '} ${mode && 'text-gray-800'} font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 w-0 overflow-hidden py-1 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{!mode ? <div className='text-white'>Terangkan</div> : <div className='text-gray-800'>Gelapkan</div>}</h4>
          </a>
        </nav>
      </div>
      <div className={`flex-1 ${open ? "ml-[350px]" : "ml-[100px]"} transition-all duration-[1000ms]`}>
        <h2 className="text-2xl font-bold text-center cursor-pointer" id='profil'>Portofolio</h2>
        <h2 className="text-2xl font-bold text-center cursor-pointer">{menus[0].name} Firgenius Kolose Hombore</h2>
        <div className="flex justify-center mt-5" >
          <img src="https://avatars.githubusercontent.com/u/150876334?v=4" className={`w-48 h-48 rounded-full ${mode ? "bg-black duration-500" : "bg-yellow-700 duration-500"} border-4 bg-clip-border p-3 hover:scale-110 transition duration-300 cursor-pointer`} alt="FIRKOH" />
        </div>

        <div className='mt-5 text-xl'>
          <p>Halo, nama saya Firgenius Kolose Hombore; saya adalah Front End Developer Web asal Papua; saya memiliki pengalaman di bidang pemrograman Html, Css, dan Javascript dan juga framework seperti Bootstrap, Tailwind, React. saya mempunyai hobi lain yaitu mendengarkan musik dan bermain games.</p>
          <p>Saya adalah orang yang sangat tertarik dengan dunia IT dan saya sangat senang untuk belajar hal baru. jika anda inggin menghubungi saya, silahkan klik tombol kanan di</p>
        </div>
        <div className='my-10'>
          <h2 className="text-2xl font-bold text-center cursor-pointer" id='riwayat'>{menus[1].name}</h2>
          <ul className="mt-4 text-center text-xl ">
            <li>TK - TK Kartika Mimika (2007-2008)</li>
            <li>SD - SDN 4 Mimika (2008-2014)</li>
            <li>SMP - SMPN 2 Mimika (2014-2017)</li>
            <li>SMA - SMAN 2 Sorong (2017-2018)</li>
            <li>SMA - SMAN 1 Fakfak (2018-2020)</li>
            <li>S1 - Sistem Informasi, Universitas Victory Sorong (2020-2024)</li>
          </ul>
        </div>
        <div className='my-10'>
          <h2 className="text-2xl font-bold text-center cursor-pointer" id='pengalaman'>{menus[2].name}</h2>
          <div className={`text-center text-xl`}>
            {porto.map((a) => (
              <div className='my-2' key={a.judul}>
                <a className='hover:text-white unde' target='_blank' rel="noopener noreferrer" href={a.link}>{a.judul}</a>
              </div>
            ))}
          </div>
        </div>

{/* ikon html css js dan lain lain */}
        <div id='program' className="grid grid-cols-3 gap-4 my-10">
          {ikon.map((a)=>(
            <div className={`cursor-pointer flex flex-col items-center justify-center transition-colors duration-300 group ${a.bg}`}>
              <a.icon className={`${mode ? "text-black":"text-yellow-800"} w-16 h-16 md:w-20 md:h-20 p-2 rounded group-hover:text-white transition duration-300 hover:${a.hover}`}/>
              <span className="opacity-0 text-white group-hover:opacity-100 text-sm mt-1 transition-opacity duration-300">{a.name}</span>
            </div>
          ))}        </div>
{/* ini kontak  */}
        <div className='my-10'>
          <h2 className="text-2xl font-bold text-center" id='kontak'>{menus[4].name}</h2>
          <div className="flex justify-center space-x-4">
            {ktk.map((a) => (
              <a className='my-3 text-[80px] cursor-pointer' key={a.judul} target='_blank' rel="noopener noreferrer" href={a.link}>
                <a.icon className={`${a.classs}`} icon={a.judul} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;