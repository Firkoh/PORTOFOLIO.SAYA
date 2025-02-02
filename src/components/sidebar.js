import { MdOutlineDashboard, MdOutlineCastForEducation } from 'react-icons/md';
import { TiContacts } from "react-icons/ti";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { FaAtlas } from "react-icons/fa";

export const menus = [
  { name: "Profil", link: "/profil", icon: MdOutlineDashboard },
  { name: "Riwayat", link: "/riwayat", icon: MdOutlineCastForEducation },
  { name: "Portofolio", link: "/pengalaman", icon: AiFillCodeSandboxSquare },
  { name: "Penguasaan Program", link: "/program", icon: FaAtlas },
  { name: "Kontak", link: "/kontak", icon: TiContacts },
];
