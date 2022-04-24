import {useEffect} from 'react'

// import All Of Data
import Logo from '../../data/data-layout/Header/data-Logo.js';
import MenuInfo from '../../data/data-layout/Header/data-MenuInfo.json';
import dropdownItem from '../../data/data-layout/Header/data-dropdownItem.json';
import IcoName from '../../data/data-layout/Header/data-IcoName.json'

import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

import SecHeader from './SecHeader'


const Header = ({Title}) => {

  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])

  return (
    <>
      <Preloader Title={Title} />
      <SecHeader Logo={Logo} MenuInfo={MenuInfo} dropdownItem={dropdownItem} IcoName={IcoName} />

    </>
  );
}

export default Header;