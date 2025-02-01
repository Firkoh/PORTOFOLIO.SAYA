import { useState, useEffect } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard, MdOutlineCastForEducation } from 'react-icons/md';
import { TiContacts } from "react-icons/ti";
import { PiCertificateFill } from "react-icons/pi";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { CiDark, CiLight } from "react-icons/ci";
import { FaInstagram, FaFacebook, FaWhatsapp, FaAtlas } from "react-icons/fa";
import { Icon } from '@mui/material';

// gambar

const Home = () => {
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState(false);

  const menus = [
    { name: "Profil", link: "/profil", icon: MdOutlineDashboard },
    { name: "Riwayat", link: "/riwayat", icon: MdOutlineCastForEducation },
    { name: "Portofolio", link: "/pengalaman", icon: AiFillCodeSandboxSquare },
    { name: "Peguasaan program", link: "/pengalaman", icon: FaAtlas },
    { name: "Kontak", link: "/kontak", icon: TiContacts },
  ];

  const porto = [
    { judul: "Loka Pspl", link: "https://github.com/Firkoh/Kantor_Loka_PSPL_Sorong" },
    { judul: "Dinas Pendidikan", link: "https://github.com/Firkoh/web_Dinas_Pendidikan_sederhana" },
    { judul: "Dokumentasi React", link: "https://github.com/Firkoh/Tail" },
    { judul: "Web Distrik Mawabuan", link: "https://github.com/Firkoh/W_DM" },
    { judul: "Distrik Malasilen", link: "https://github.com/Firkoh/KMalasil" },
    { judul: "Portofolio Web", link: "https://github.com/Firkoh/Portofolio-Web" },
  ];

  const ktk = [
    { judul: "Instagram", link: "https://www.instagram.com/firgenius_hombore/", icon: FaInstagram, classs: "hover:text-red-500" },
    { judul: "Facebook", link: "https://www.facebook.com/share/1D7FMf74sN/", icon: FaFacebook, classs: "hover:text-blue-500" },
    { judul: "Hubungi WhatsApp", link: "https://wa.me/+6282248766797?text=hello%20Firgenius%20ingin%20membuat%20Website", icon: FaWhatsapp, classs: "hover:text-green-500" }
  ];

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
        ${!mode && 'bg-yellow-800 '} ${mode && 'text-gray-800'} font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 w-0 overflow-hidden py-1 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>Ganti Ke Mode {!mode ? <div className='text-white'>Terang</div> : <div className='text-gray-800'>Gelap</div>}</h4>
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:ml-10 mt-6 md:mt-0">
          <div className="flex items-center justify-center transition-colors duration-300">
            <img src="html.svg" className="w-16 h-16 md:w-20 md:h-20 p-2 rounded group-edit hover:bg-[#e34c26] transition duration-300" alt="HTML" />
          </div>
        </div>
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