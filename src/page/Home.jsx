import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard, MdOutlineCastForEducation } from 'react-icons/md';
import { TiContacts } from "react-icons/ti";
import { PiCertificateFill } from "react-icons/pi";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { CiDark, CiLight } from "react-icons/ci";

import { Link } from 'react-router-dom';

const Home = () => {

  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState(false);

  const menus = [
    { name: "Profil", link: "/profil", icon: MdOutlineDashboard },
    { name: "Riwayat Pendidikan", link: "/riwayat", icon: MdOutlineCastForEducation },
    { name: "Pengalaman Programing", link: "/pengalaman", icon: AiFillCodeSandboxSquare },
    { name: "Sertifikat", link: "/sertifikat", icon: PiCertificateFill },
    { name: "Kontak", link: "/kontak", icon: TiContacts }
  ]

  return (
    <section className={`flex ${mode ? "bg-gray-500 text-yellow-500" : "bg-black text-yellow-700"} duration-[400ms] transition-all ease-in-out`}>
      <div className={`${mode ? "bg-slate-800 text-yellow-500" : "bg-[#0e0e0e] text-yellow-700"} min-h-screen ${open ? "w-80" : "w-20"} duration-[1000ms] text-gray-100 px-4 transition-all ease-in-out fixed top-0 left-0 h-full z-10`}>

        <div className="py-3 flex justify-center">
          <HiMenuAlt3 size={26} className={`${mode ? "text-yellow-500" : "text-yellow-700"} cursor-pointer opacity-50 hover:text-white hover:opacity-100 transition duration-300`} onClick={() => setOpen(!open)} />
        </div>
        <nav className="flex flex-col gap-4 mt-4">
          {menus.map((menu, index) => (
            <a href={menu.link} key={index} className=" text-center hover:text-white flex items-center gap-3" id={menu.link}>
              <menu.icon size={24} />
              <span className={`${open ? "" : "hidden"} `}>{menu.name}</span>
            </a>
          ))}
          <a
            className=" hover:text-white flex items-center gap-2 mt-40"
            onClick={() => setMode(!mode)}
          >
            {!mode ? <CiLight size={24} /> : <CiDark size={24} />}
            <span className={`${open ? "" : "hidden"} whitespace-pre transition duration-300`}>{!mode ? "Light" : "Dark"}</span>
          </a>
        </nav>
      </div>
      <div className={`flex-1 ${open ? "ml-[350px]" : "ml-[100px]"} transition-all duration-[1000ms]`}>
        <h2 className="text-2xl font-bold text-center cursor-pointer" id='profil'>Portofolio</h2>
        <h2 className="text-2xl font-bold text-center cursor-pointer">Profil</h2>
        <div className="flex justify-center mt-5" >
          <img src="https://avatars.githubusercontent.com/u/150876334?v=4" className={`w-48 h-48 rounded-full ${mode ? "bg-yellow-500" : "bg-yellow-700"} border-4 bg-clip-border p-3 hover:scale-110 transition duration-400 cursor-pointer`} alt="FIRKOH" />
        </div>
        <div className='mt-5 '>
          <p>Halo, nama saya Firgenius Kolose Hombore; saya adalah Front End Developer Web asal Papua; saya memiliki pengalaman di bidang pemrograman Html, Css, dan Javascript dan juga framework seperti Bootstrap, Tailwind, React. saya mempunyai hobi lain yaitu mendengarkan musik dan bermain games.</p>
          <p>Saya adalah orang yang sangat tertarik dengan dunia IT dan saya sangat senang untuk belajar hal baru. jika anda inggin menghubungi saya, silahkan klik tombol kanan di</p>
        </div>
        <div className='my-10'>
          <h2 className="text-2xl font-bold text-center cursor-pointer" id='riwayat'>Riwayat Pendidikan</h2>
        </div>

      </div>

    </section>
  );
};  

export default Home;

