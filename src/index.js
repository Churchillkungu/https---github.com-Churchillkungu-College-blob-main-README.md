import React  from "react";
import ReactDOM  from "react-dom";
import Tvet from "./Components/Tvet";
import About from "./Components/About";
import Signup from "./Components/Signup";
import Update from "./Components/Update";
import Disaster from "./Components/Disaster";
import Social from "./Components/Social";
import Community from "./Components/Community";
import Business from "./Components/Business";
import IT from "./Components/IT";
import Building from "./Components/Building";
import Accounting from "./Components/Accounting";
import Journalism from "./Components/Journalism";
import Electrical from "./Components/Electrical";
import Supply from "./Components/Supply";
import CPA  from "./Components/CPA";
import Software from "./Components/Software";
import Human from "./Components/Human";
import Fashion from "./Components/Fashion";
import Kenya from "./Components/Kenya";
import Food from "./Components/Food";
import Bakery from "./Components/Bakery";
import Tourism from "./Components/Tourism";
import Animal from  "./Components/Animal";
import Hosipitality  from "./Components/Hosipitality";
import Civil from "./Components/Civil";
import Industrial from "./Components/Industrial";
import Telecommunication from "./Components/Telecommunication";
import General from "./Components/General";
import Registration from"./Components/Registration";
import RegUpdate from './Components/RegUpdate';
import Plumbing from "./Components/Plumbing";
import DisMa from './Components/DisMa';
import AnMa from "./Components/AnMa";
import SoWo from './Components/SoWo';
import CoDe from './Components/CoDe';
import BuMa from './Components/BuMa';
import InTech from './Components/InTech';
import AcNt  from './Components/AcNt';
import  JoNal from './Components/JoNal';
import SuCha from './Components/SuCha';
import ElEng from './Components/ElEng';
import CePu  from './Components/CePu';
import SoEng from './Components/SoEng';
import HuRes from './Components/HuRes';
import FaDe from './Components/FaDe';
import KeRe from './Components/KeRe';
import  FoPro from './Components/FoPro';
import  Bky from './Components/Bky';
import  ToMa from './Components/ToMa';
import HoMa from  './Components/HoMa';
import  InMech from './Components/InMech';
import Plb from './Components/Plb';
import CiEng from './Components/CiEng'
import TelCom from './Components/TelCom';
import  GeAgri from './Components/GeAgri';
import  BuTech from './Components/BuTech'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tvet />} />
      <Route path="About" element={<About />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Update" element={<Update />} />
      <Route path="Disaster" element={<Disaster />} />
      <Route path="Social" element={<Social />} />
      <Route path="Community" element={<Community />} />
      <Route path="Business" element={<Business />} />
      <Route path="IT" element={<IT />} />
      <Route path="Building" element={<Building />} />
      <Route path="Accounting" element={<Accounting />} />
      <Route path="Journalism" element={<Journalism />} />
      <Route path="Electrical" element={<Electrical />} />
      <Route path="Supply" element={<Supply />} />
      <Route path="CPA" element={<CPA />} />
      <Route path="Software" element={<Software />} />
      <Route path="Human" element={<Human />} />
      <Route path="Fashion" element={<Fashion />} />
      <Route path="Kenya" element={<Kenya />} />
      <Route path="Food" element={<Food />} />
      <Route path="Bakery" element={<Bakery />} />
      <Route path="Tourism" element={<Tourism />} />
      <Route path="Hosipitality" element={<Hosipitality />} />
      <Route path="Industrial" element={<Industrial />} />
      <Route path="Civil" element={<Civil />} />
      <Route path="Animal" element={<Animal />} />
      <Route path="Telecommunication" element={<Telecommunication />} />
      <Route path="General" element={<General />} />
      <Route path="Registration" element={<Registration />} />
      <Route path="RegUpdate" element={<RegUpdate />} />
      <Route path="Plumbing" element={<Plumbing />} />
      <Route path="DisMa" element={<DisMa />} />
      <Route path="SoWo" element={<SoWo />} />
      <Route path="CoDe" element={<CoDe />} />
      <Route path="BuMa" element={<BuMa />} />
      <Route path="InTech" element={<InTech />} />
      <Route path="AcNt" element={<AcNt />} />
      <Route path="JoNal" element={<JoNal />} />
      <Route path="SuCha" element={<SuCha />} />
      <Route path="ElEng" element={<ElEng />} />
      <Route path="CePu" element={<CePu />} />
      <Route path="SoEng" element={<SoEng />} />
      <Route path="HuRes" element={<HuRes />} />
      <Route path="FaDe" element={<FaDe />} />
      <Route path="KeRe" element={<KeRe />} />
      <Route path="FoPro" element={<FoPro />} />
      <Route path="Bky" element={<Bky />} />
      <Route path="ToMa" element={<ToMa />} />
      <Route path="HoMa" element={<HoMa />} />
      <Route path="InMech" element={<InMech />} />
      <Route path="Plb" element={<Plb />} />
      <Route path="CiEng" element={<CiEng />} />
      <Route path="TelCom" element={<TelCom />} />
      <Route path="GeAgri" element={<GeAgri />} />
      <Route path="BuTech" element={<BuTech />} />
      <Route path = "AnMa" element={<AnMa/>}/>
     

      

    </Routes>
  </BrowserRouter>,
    //  <Tvet />,
  document.getElementById('root'));





