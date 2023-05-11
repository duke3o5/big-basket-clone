import Spacer from './spacer';
import logo from '../Images/main_logo.jpg';
import profile from '../Images/profile.PNG'
import cart from '../Images/Cart.png'
import search from '../Images/search.PNG'
import '../Styling/nav.css';
import React, { useContext, useEffect, useState } from 'react'
import {HamburgerIcon,CloseIcon,SearchIcon } from '@chakra-ui/icons'
import { Tag,Drawer,DrawerBody,DrawerOverlay,DrawerContent,useDisclosure,HStack,Input,IconButton,Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import { Context } from '../Context/Context';


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ text,setText]=useState('');
    // const {Search}=useContext(Context);

    function func(e){
      
        // if(e.keyCode===13){
        //     Search(e.target.value)
        // }
      
    }

  return (
    <div >
        <nav style={{display:'flex',justifyContent:'space-between'}}>
      <div className="wrapper">
        <div className="logo"><Link to="/"><img src={logo} alt=""/></Link></div>
        <input type="radio" name="slider" id="menu-btn"/>
        
        <input type="radio" name="slider" id="close-btn"/>
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
          <li>
            <Link><a href="#" className="desktop-item">WOMEN</a>
            <input type="checkbox" id="showMega"/>
            <label htmlFor="showMega" className="mobile-item">WOMEN</label></Link>
            <div className="mega-box">
              <div className="content">
              <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Ethintic Wear</a></Tag></li>
                    <li><a href="#">Kurta Kurtis</a></li>
                    <li><a href="#">Sarees</a></li>
                    <li><a href="#">Ethnic Sets</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><a href="#">Ethnic Dresses</a></li>
                    <li><Tag h={10}><a href="#">Bags & Wallets</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Western Wear</a></Tag></li>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Tees</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Tunics</a></li>
                    <li><a href="#">Jumpsuits</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Activewear</a></Tag></li>
                    <li><a href="#">Swim Wear</a></li>
                    <li><a href="#">Topwear</a></li>
                    <li><a href="#">Bottomwear</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><Tag h={10}><a href="#">Belts & Watches</a></Tag></li>
                    <li><Tag h={10}><a href="#">Sunglasses & Hats</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Jewellery</a></Tag></li>
                    <li><a href="#">Fashion Jewellery</a></li>
                    <li><a href="#">Imitation Jewellery</a></li>
                    <li><a href="#">Earrings</a></li>
                    <li><Tag h={10}><a href="#">Footwear</a></Tag></li>
                    <li><a href="#">Flats</a></li>
                    <li><a href="#">Heels</a></li>
                    <li><a href="#">Casual Shoes</a></li>
                    <li><a href="#">Flip Flops</a></li>
                    <li><a href="#">Heels</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Brands</a></Tag></li>
                    <li><a href="#">Karigari</a></li>
                    <li><a href="#">Aurelia</a></li>
                    <li><a href="#">Alcis</a></li>
                    <li><a href="#">Shaily</a></li>
                    <li><a href="#">Cottinfab</a></li>
                    <li><a href="#">Ksut</a></li>
                    <li><a href="#">Oxolloxo</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to='/mens'><a href="#" className="desktop-item">MEN</a></Link>
            <input type="checkbox" id="showMega"/>
            <label htmlFor="showMega" className="mobile-item"><Link to='/mens'>MEN</Link></label>
            <div className="mega-box">
              <div className="content">
              <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Ethintic Wear</a></Tag></li>
                    <li><a href="#">Kurta Kurtis</a></li>
                    <li><a href="#">Sarees</a></li>
                    <li><a href="#">Ethnic Sets</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><a href="#">Ethnic Dresses</a></li>
                    <li><Tag h={10}><a href="#">Bags & Wallets</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Western Wear</a></Tag></li>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Tees</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Tunics</a></li>
                    <li><a href="#">Jumpsuits</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Activewear</a></Tag></li>
                    <li><a href="#">Swim Wear</a></li>
                    <li><a href="#">Topwear</a></li>
                    <li><a href="#">Bottomwear</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><Tag h={10}><a href="#">Belts & Watches</a></Tag></li>
                    <li><Tag h={10}><a href="#">Sunglasses & Hats</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Jewellery</a></Tag></li>
                    <li><a href="#">Fashion Jewellery</a></li>
                    <li><a href="#">Imitation Jewellery</a></li>
                    <li><a href="#">Earrings</a></li>
                    <li><Tag h={10}><a href="#">Footwear</a></Tag></li>
                    <li><a href="#">Flats</a></li>
                    <li><a href="#">Heels</a></li>
                    <li><a href="#">Casual Shoes</a></li>
                    <li><a href="#">Flip Flops</a></li>
                    <li><a href="#">Heels</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Brands</a></Tag></li>
                    <li><a href="#">Karigari</a></li>
                    <li><a href="#">Aurelia</a></li>
                    <li><a href="#">Alcis</a></li>
                    <li><a href="#">Shaily</a></li>
                    <li><a href="#">Cottinfab</a></li>
                    <li><a href="#">Ksut</a></li>
                    <li><a href="#">Oxolloxo</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link><a href="#" className="desktop-item" style={{marginRight:'23px'}}>KIDS</a>
            <input type="checkbox" id="showMega"/>
            <label htmlFor="showMega" className="mobile-item">KIDS</label></Link>
            <div className="mega-box">
              <div className="content">
              <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Ethintic Wear</a></Tag></li>
                    <li><a href="#">Kurta Kurtis</a></li>
                    <li><a href="#">Sarees</a></li>
                    <li><a href="#">Ethnic Sets</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><a href="#">Ethnic Dresses</a></li>
                    <li><Tag h={10}><a href="#">Bags & Wallets</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Western Wear</a></Tag></li>
                    <li><a href="#">Tops</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Tees</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Tunics</a></li>
                    <li><a href="#">Jumpsuits</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Activewear</a></Tag></li>
                    <li><a href="#">Swim Wear</a></li>
                    <li><a href="#">Topwear</a></li>
                    <li><a href="#">Bottomwear</a></li>
                    <li><a href="#">Suits & Dress Materials</a></li>
                    <li><a href="#">Lehengas</a></li>
                    <li><a href="#">Blouses</a></li>
                    <li><a href="#">Dupattas</a></li>
                    <li><Tag h={10}><a href="#">Belts & Watches</a></Tag></li>
                    <li><Tag h={10}><a href="#">Sunglasses & Hats</a></Tag></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Jewellery</a></Tag></li>
                    <li><a href="#">Fashion Jewellery</a></li>
                    <li><a href="#">Imitation Jewellery</a></li>
                    <li><a href="#">Earrings</a></li>
                    <li><Tag h={10}><a href="#">Footwear</a></Tag></li>
                    <li><a href="#">Flats</a></li>
                    <li><a href="#">Heels</a></li>
                    <li><a href="#">Casual Shoes</a></li>
                    <li><a href="#">Flip Flops</a></li>
                    <li><a href="#">Heels</a></li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="mega-links">
                    <li><Tag h={10}><a href="#">Brands</a></Tag></li>
                    <li><a href="#">Karigari</a></li>
                    <li><a href="#">Aurelia</a></li>
                    <li><a href="#">Alcis</a></li>
                    <li><a href="#">Shaily</a></li>
                    <li><a href="#">Cottinfab</a></li>
                    <li><a href="#">Ksut</a></li>
                    <li><a href="#">Oxolloxo</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li><Link><Text fontWeight={600} fontSize={19} cursor='pointer' bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'marginLeft={5}>OFFERS</Text></Link></li>
          <li><Spacer/></li>
          <li >
            <button color='blue' onClick={onOpen}>
            <img className='icon' src={search} alt="" style={{width:'60px',marginTop:'30px'}}/>
            <label style={{borderTop:'1px solid black', marginLeft:'20px'}} htmlFor="search" className="mobile-item">SEARCH</label>
            </button>
            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent h='70px'>
                <DrawerBody >
                    <HStack>
                    <Input value={text} onKeyUp={func} onChange={(e)=>
                      setText(e.target.value)
                      } variant='unstyled' placeholder='Search brand, category or products' h={'54px'} fontSize='20px'/>
                    <IconButton
                    // onClick={()=>Search(text)}
                    h={'54px'}
                    w={'69px'}
                    bg='#8BC34A'
                    color='white'
                    aria-label='Search database'
                    icon={<SearchIcon fontSize={'2xl'}/>}
                    />
                    </HStack>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
          </li>
          <li >
          <Link to ='/cart'><img className='icon' src={cart} alt="" style={{width:'77px',margin:'17px',cursor:'pointer'}}/>
          <label htmlFor="search" className="mobile-item">CART</label></Link>
          </li>
          <li >

          <Link to ='/login'><img className='icon' src={profile} alt="" style={{width:'60px',margin:'15px' }}/>
          <label htmlFor="search" className="mobile-item">PROFILE</label></Link>
          </li>
        </ul>
        
        <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
      </div>
    </nav>
    </div>
  )
}

export default Navbar;


















































































// import React from "react";

// export const Nav = () => {
//   return (
//     <div>
//       <header className="site-header" id="navbar">
//         <div className="wrapper site-header__wrapper">
//           <div className="site-header__start">
//             <a className="brand" href="http://localhost:3000/products">
//               <img src="./Apna Basket_files/main_logo.2318417ea405156d7c94.jpg" />
//             </a>
//           </div>
//           <div className="site-header__middle">
//             <nav className="nav">
//               <button className="nav__toggle" aria-expanded="false" type="button">
//                 <img
//                   src="data:image/png;base64,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"
//                   width="30px"
//                   style={{margin: "15px 0px 0px"}}
//                 />
//               </button>
//               <ul className="nav__wrapper active">
//                 <p className="nav__item">
//                   <a>Search</a>
//                 </p>
//                 <li
//                   className="nav__item"
//                   id="popover-trigger-:r3:"
//                   aria-haspopup="dialog"
//                   aria-expanded="false"
//                   aria-controls="popover-content-:r3:"
//                 >
//                   <a href="http://localhost:3000/productsproducts">
//                     Vegetables
//                   </a>
//                 </li>
//                 <div
//                   className="chakra-popover__popper css-1qq679y"
//                   style={{
//                       visibility: "hidden",
//                       minWidth: "max-content",
//                       popperTransformOrigin: "top center",
//                       position: "absolute",
//                       inset: "0px auto auto 0px",
//                       margin: "0px",
//                       transform: "translate(581px, 79px)"
//                     }}
//                   data-popper-placement="bottom"
//                 >
//                   <section
//                     id="popover-content-:r3:"
//                     tabindex="-1"
//                     role="tooltip"
//                     className="chakra-popover__content css-sjj62m"
//                     aria-describedby="popover-body-:r3:"
//                     style={{
//                         transformOrigin:' var(--popper-transform-origin)',
//                         opacity:'0',
//                         visibility: 'hidden',
//                         transform:' scale(0.95) translateZ(0px)'
//                     }}
//                   >
//                     <div
//                       id="popover-body-:r3:"
//                       className="chakra-popover__body css-1ews2c8"
//                     >
//                       <ul>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Potato, Onion &amp; Tomato
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Cucumber &amp; Capsicum
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Leafy Vegetables
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Root Vegetables
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Beans, Brinjals &amp; Okra
//                         </li>
//                       </ul>
//                     </div>
//                   </section>
//                 </div>
//                 <li
//                   className="nav__item"
//                   id="popover-trigger-:r5:"
//                   aria-haspopup="dialog"
//                   aria-expanded="false"
//                   aria-controls="popover-content-:r5:"
//                 >
//                   <a href="http://localhost:3000/productsproducts">Dairy</a>
//                 </li>
//                 <div
//                   className="chakra-popover__popper css-1qq679y"
//                   style={{
//                       visibility: "hidden",
//                       position: "absolute",
//                       minWidth: "max-content",
//                       inset: "0px auto auto 0px"}}
//                 >
//                   <section
//                     id="popover-content-:r5:"
//                     tabindex="-1"
//                     role="tooltip"
//                     className="chakra-popover__content css-sjj62m"
//                     aria-describedby="popover-body-:r5:"
//                     style={{
//                         transformOrigin:' var(--popper-transform-origin)',
//                         opacity:'0',
//                         visibility: 'hidden',
//                         transform:' scale(0.95) translateZ(0px)'
//                     }}
//                   >
//                     <div
//                       id="popover-body-:r5:"
//                       className="chakra-popover__body css-1ews2c8"
//                     >
//                       <ul>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>Curd</li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Paneer, Tofu &amp; Cream
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Butter &amp; Margarine
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Condensed, Powdered Milk
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Cheese
//                         </li>
//                       </ul>
//                     </div>
//                   </section>
//                 </div>
//                 <li
//                   className="nav__item"
//                   id="popover-trigger-:r7:"
//                   aria-haspopup="dialog"
//                   aria-expanded="false"
//                   aria-controls="popover-content-:r7:"
//                 >
//                   <a href="http://localhost:3000/productsproducts">Fruits</a>
//                 </li>
//                 <div
//                   className="chakra-popover__popper css-1qq679y"
//                   style={{
//                       visibility: "hidden",
//                       position: "absolute",
//                       minWidth: "max-content",
//                       inset: "0px auto auto 0px"}}
//                 >
//                   <section
//                     id="popover-content-:r7:"
//                     tabindex="-1"
//                     role="tooltip"
//                     className="chakra-popover__content css-sjj62m"
//                     aria-describedby="popover-body-:r7:"
//                     style={{
//                         transformOrigin:' var(--popper-transform-origin)',
//                         opacity:'0',
//                         visibility: 'hidden',
//                         transform:' scale(0.95) translateZ(0px)'
//                     }}
//                   >
//                     <div
//                       id="popover-body-:r7:"
//                       className="chakra-popover__body css-1ews2c8"
//                     >
//                       <ul>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Banana, Sapota &amp; Papaya
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Kiwi, Melon, Citrus Fruit
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Apples &amp; Pomegranate
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Seasonal Fruits
//                         </li>
//                         <li style={{lineHeight: '40px',fontSize: '18px'}}>
//                           Mangoes
//                         </li>
//                       </ul>
//                     </div>
//                   </section>
//                 </div>
//                 <li className="nav__item">
//                   <a href="http://localhost:3000/productscart">Cart</a>
//                 </li>
//                 <li className="nav__item">
//                   <a href="http://localhost:3000/productslogin">
//                     Sign In / Sign Up
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };
