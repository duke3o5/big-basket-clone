import ham from "../../Images/hamburger.png";
import Close from "../../Images/close.png";
import login from "../../Images/user.png";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../Styling/User/nav.css";
import logo from "../../Images/main_logo.jpg";
import Cart from "../../Images/shopping-cart.png";
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverFooter,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { Button } from "@chakra-ui/button";
import { FiSearch } from "react-fi";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { Center, HStack, Heading, Img, useToast } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Logout } from "../../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCart } from "../../Redux/ProductReducer/action";

const Nav = ({ setSearch }) => {
  const [open, close] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [cartLength, setCartlength] = useState(0);
  const toast = useToast();
  const { cart } = useSelector((state) => state.productReducer);
  console.log(cart);

  function func(e) {
    if (e.keyCode === 13) {
      setSearch(e.target.value);
      navigate("/search");
    }
  }

  // function getCart() {
  //   axios.get("https://big-basket-api.onrender.com/Cart")
  //     .then((res) => setCartlength(res.data.length));
  // }

  useEffect(() => {
    dispatch(getCart);
  }, [cart]);

  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  const handleLogout = () => {
    dispatch(Logout);
    toast({
      description: "Logout successful",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
    console.log(isAuth);
  };

  return (
    <>
      <header className="site-header">
        <div className="wrapper site-header__wrapper">
          <div className="site-header__start">
            <Link to="/" className="brand">
              <img src={logo} />
            </Link>
          </div>
          <div className="site-header__middle">
            <nav className="nav">
              <button
                onClick={() => close((pre) => !pre)}
                className="nav__toggle"
                aria-expanded="false"
                type="button"
              >
                {open ? (
                  <img
                    src={Close}
                    width={"30px"}
                    style={{ margin: "15px 0 0" }}
                  />
                ) : (
                  <img
                    src={ham}
                    width={"30px"}
                    style={{ margin: "15px 0 0" }}
                  />
                )}
              </button>
              <ul className={open ? "nav__wrapper active" : "nav__wrapper"}>
                <p
                  className="nav__item"
                  ref={btnRef}
                  onClick={onOpen}
                  style={{ cursor: "pointer" }}
                >
                  {open ? <a>Search</a> : <FiSearch />}
                </p>
                <Drawer
                  isOpen={isOpen}
                  placement="top"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerHeader></DrawerHeader>
                  <DrawerContent height={"90px"}>
                    <DrawerBody>
                      <Input
                        onKeyUp={func}
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        focusBorderColor="#84c225"
                        height={"70px"}
                        variant={"flushed"}
                        placeholder="Search by name, brand..."
                      />
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
                <Popover trigger="hover">
                  <PopoverTrigger>
                    <li className="nav__item">
                      <Link to="/products">Vegetables</Link>
                    </li>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverBody>
                      <ul>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Potato, Onion & Tomato
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Cucumber & Capsicum
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Leafy Vegetables
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Root Vegetables
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Beans, Brinjals & Okra
                        </li>
                      </ul>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Popover trigger="hover">
                  <PopoverTrigger>
                    <li className="nav__item">
                      <Link to="/products">Dairy</Link>
                    </li>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverBody>
                      <ul>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Curd
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Paneer, Tofu & Cream
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Butter & Margarine
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Condensed, Powdered Milk
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Cheese
                        </li>
                      </ul>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <Popover trigger="hover">
                  <PopoverTrigger>
                    <li className="nav__item">
                      <Link to="/products">Fruits</Link>
                    </li>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverBody>
                      <ul>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Banana, Sapota & Papaya
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Kiwi, Melon, Citrus Fruit
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Apples & Pomegranate
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Seasonal Fruits
                        </li>
                        <li style={{ lineHeight: "40px", fontSize: "18px" }}>
                          Mangoes
                        </li>
                      </ul>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <li className="nav__item">
                  <div style={{ display: "flex" }}>
                    <Link to="/cart" style={{ marginLeft: open ?"16.5%":"0px",marginRight: open ?"-10px":"-25px" }}>
                      {open ? <p >Cart</p> : <img width="35px" src={Cart} />}
                    </Link>
                    {isAuth && (
                      <h1
                        style={{
                          marginRight: "30px",
                          marginTop: "4px",
                          fontWeight: "1000",
                          color: "red",
                          padding: "1px 6px",
                          height: "fit-content",
                          borderRadius: "50%",
                          backgroundColor: "#84c225",
                          display:!open?'block':'none'
                        }}
                      >
                        {cart.length}
                      </h1>
                    )}
                  </div>
                </li>
                <Popover trigger="hover">
                  <PopoverTrigger>
                    <li className="nav__item">
                      {" "}
                      <Link>
                        {open ? (
                          "Sign In / Sign Up"
                        ) : (
                          isAuth?<img style={{borderRadius:'50%',height:'50px',width:'50px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/678px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" />:<img  width="30px" src={login} />
                          
                        )}
                      </Link>
                    </li>
                  </PopoverTrigger>

                  <PopoverContent>
                    <PopoverHeader fontWeight="semibold">
                      <Center fontSize={20}>{isAuth?'Welcome Elon Musk !':'Create Account'}</Center>
                    </PopoverHeader>
                    <PopoverBody>
                      <Center>
                      <p >{isAuth?'Access account & manage your orders':'Login or Sign Up to get the full access'}</p>
                      
                      </Center>
                    </PopoverBody>
                    <PopoverFooter display="flex" justifyContent="center">
                       {isAuth ? (
                          <div>
      
                            <Button color={"white"}
                              bg={"#84c225"} onClick={handleLogout}>Logout</Button>
                          </div>
                        ) : (
                          <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                            <Button
                              onClick={() => navigate("/signup")}
                              color={"white"}
                              bg={"#84c225"}
                            >
                              Sign Up
                            </Button>
                            <Button
                              onClick={() => navigate("/login")}
                              color={"white"}
                              bg={"#84c225"}
                            >
                              Sign In
                            </Button>
                          </div>
                        )}
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>

    // {isAuth ? (
    //   <Button onClick={handleLogout}>Logout</Button>
    // ) : (
    //   <Link to={isAuth ? "/" : "/login"}>
    //     {open ? (
    //       "Sign In / Sign Up"
    //     ) : (
    //       <img width="30px" src={login} />
    //     )}
    //   </Link>
    // )}

    // <DIV>
    //     <div>
    //         <img src={logo}/>
    //         <p>{'Anubhav'}</p>
    //     </div>
    //     <div>
    //         <div>
    //             <Link to='/' home'>Home</Link>
    //         </div>
    //         <div>
    //             <Link to='/' about'>About</Link>
    //         </div>
    //         <div>
    //             <Link to='/' skills'>Skills</Link>
    //         </div>
    //         <div>
    //             <Link to='/' projects'>Projects</Link>
    //         </div>
    //         <div>
    //             <Link to='/' contact'>Contact</Link>
    //         </div>
    //         <div>
    //             <button onClick={viewResume}>Resume</button>
    //         </div>
    //         <div id='ham'>
    //             {open?<CloseIcon/>:<HamburgerIcon/>}
    //         </div>
    //     </div>
    // </DIV>
  );
};

export default Nav;

// const DIV=styled.div`
//     padding: 20px 30px;
//     border: 1px solid red;
//     display: flex;
//     /* justify-content: space-between; */
//     align-items: center;
//     height: 70px;
//     gap:48%;

//     div:first-child{
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;

//         img{
//             width: 60px;
//             padding: 0 10px;
//         }
//         p{
//             font-size: 35px;
//             font-family: cursive;
//             font-weight: 600;
//         }
//     }
//     div:last-child{
//         /* width: 50%; */
//         display: flex;
//         align-items: center;

//         div{
//             padding: 0 4.4%;
//             height:70px;
//             line-height: 70px;
//             font-size: 16px;
//             font-weight: 600;

// button{
//     font-size: 18px;
//     font-weight: 600;
//     margin: auto;
//     line-height: normal;
//     background-color: #FFD500;
//     padding:10px 25px;
//     border-radius: 10px;
// }
//         }

//         #ham{
//             display: none;
//         }
//     }
// `
