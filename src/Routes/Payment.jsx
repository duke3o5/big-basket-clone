import {
  Box,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  useToast,
  Center
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

import { AiOutlineCreditCard } from "react-icons/ai";
import { BsArrowRightCircle, BsCashCoin, BsGift } from "react-icons/bs";
import { SiPaytm } from "react-icons/si";

import Paytm from "./Payment/Paytm";
import CreditCard from "./Payment/CreditCard";
import GiftCard from "./Payment/GiftCard";
import Cod from "./Payment/Cod";
// import { price } from "./Payment/Cod";
// import {cartCount} from "./Payment/Cod";
import axios from "axios";


export let price = 0;
export let cartCount = 0;
function PaymentPage() {
  const [Price, setPrice] =useState(price);
  const [cart, Cart] = useState([]);
  const [total, Total] = useState(0);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();


  // console.log(cartCount);
  // const ItemCount = 3;
  // const price=249;
  const deliveryAddress = "";

  const [method, setMethod] = useState("Card");

  const HandleClick = () => {
    if (total > 0) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        
        toast({
          description: "Payment Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        navigate("/");
      }, 2500);
    }
  };

  function getCart() {
    axios
      .get("https://big-basket-api.onrender.com/Cart")
      .then((res) => Cart(res.data));
  }

  // console.log(cart);
  useEffect(() => {
    getCart();
  }, [cart]);

  useEffect(() => {
    let sum = 0;
    cart.forEach((el) => (sum += el.Price * el.qty));
    Total(sum);
    price = total;
    // console.log(price);
    cartCount = cart.length;
  }, [cart]);

  return (
    <Center>
    <Flex
      
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      gap={{
        base: 10,
        sm: 10,
        md: 10,
        lg: 0,
        xl: 0,
        "2xl": 0,
      }}
      width="90%"
      margin="auto"
      justifyContent="space-around"
      marginTop="20px"
      marginBottom="150px"
      padding="10px"
    >
      <Flex
        direction="column"
        gap="10"
        // border="1px solid red"
        width={{
          base: "90%",
          sm: "90%",
          md: "90%",
          lg: "60%",
          xl: "60%",
          "2xl": "60%",
        }}
      >
        <Flex direction="column">
          <Heading
            as="h1"
            fontSize="36px"
            fontWeight="600"
            fontFamily="Inter,sans-serif"
          >
            Choose payment method
          </Heading>
          {/* <Text fontSize="14px" fontFamily="Inter,sans-serif">
            Choose the Payment method you prefer
          </Text> */}
        </Flex>

        <Flex direction="column" gap="5" borderTop="1px solid gainsboro">
          {/* <Text fontSize="20px" fontWeight="600" fontFamily="sans-serif">
            Payment Method Options
          </Text> */}
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            // borderTop="1px solid grey"
            // border="1px solid gainsboro"
            borderRight="1px solid gainsboro"
            // borderRadius="0.5rem"
            justifyContent={"space-around"}
            padding="20px"
          >
            <Flex
              direction="column"
              gap="1.5"
              border="0px solid blue"
              marginLeft="10px"
            >
              <Flex
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => setMethod("Card")}
                // border="1px solid gainsboro"
                border={method === "Card" ? "2px solid #689f38":"1px solid gainsboro"}
                padding="2"
                boxShadow="md"
                borderRadius="6px"
                width={{
                  lg: "298px",
                  "2xl": "298px",
                  md: "298px",
                }}
              >
                <Box border="0px solid red">
                  <AiOutlineCreditCard size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Credit/Debit Card
                  </Heading>
                  <Text color="grey">Visa,Mastercard,Rupay & more</Text>
                </Flex>
                {method === "Card" && (
                  <Box border="0px solid red" margin="auto">
                    <BsArrowRightCircle size="25" />
                  </Box>
                )}
              </Flex>
              <Flex
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => setMethod("Cod")}
                gap="1"
                // border="1px solid gainsboro"
                border={method === "Cod" ? "2px solid #689f38":"1px solid gainsboro"}
                padding="2"
                boxShadow="md"
                borderRadius="6px"
              >
                <Box border="0px solid red">
                  <BsCashCoin size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Cash on delivery
                  </Heading>
                  <Text color="grey">Pay at your doorstep</Text>
                </Flex>
                {method === "Cod" && (
                  <Box border="0px solid red" margin="auto">
                    <BsArrowRightCircle size="25" />
                  </Box>
                )}
              </Flex>
              <Flex
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => setMethod("Gift")}
                gap="1"
                // border="1px solid gainsboro"
                border={method === "Gift" ? "2px solid #689f38":"1px solid gainsboro"}
                padding="2"
                boxShadow="md"
                borderRadius="6px"
              >
                <Box border="0px solid red">
                  <BsGift size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Gift card
                  </Heading>
                  <Text color="grey">One card for all</Text>
                </Flex>
                {method === "Gift" && (
                  <Box border="0px solid red" margin="auto">
                    <BsArrowRightCircle size="25" />
                  </Box>
                )}
              </Flex>
              <Flex
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => setMethod("Paytm")}
                gap="1"
                // border="1px solid gainsboro"
                border={method === "Paytm" ? "2px solid #689f38":"1px solid gainsboro"}
                padding="2"
                boxShadow="md"
                borderRadius="6px"
              >
                <Box border="0px solid red">
                  <SiPaytm size="25" />
                </Box>
                <Flex border="0px solid red" flexDirection="column">
                  <Heading
                    as="h6"
                    fontSize="16px"
                    fontWeight="500"
                    fontFamily="sans-serif"
                  >
                    Paytm Wallet
                  </Heading>
                  <Text color="grey">Link Paytm wallet and pay</Text>
                </Flex>
                {method === "Paytm" && (
                  <Box border="0px solid red" margin="auto">
                    <BsArrowRightCircle size="25" />
                  </Box>
                )}
              </Flex>
            </Flex>
            <Box border="0px solid black" marginTop="5px">
              {" "}
              {method === "Cod" ? (
                <Cod totalCartPrice={price}/>
              ) : method === "Card" ? (
                <CreditCard totalCartPrice={price}/>
              ) : method === "Gift" ? (
                <GiftCard totalCartPrice={price}/>
              ) : method === "Paytm" ? (
                <Paytm totalCartPrice={price}/>
              ) : null}
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        borderTop="1px solid gainsboro"
        margin="auto"
        marginTop="83.5px"
        marginLeft={"-3px"}
        gap="15"
      >
        <Box>
          <Image
          // padding={2}
            src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/payment-icon.svg"
            width=""
            height=""
            alt=""
            margin={'auto'}
          />
        </Box>
        <Box width={"100%"}padding={5}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                  >
                    <Heading as="h1" fontSize="16px">
                      Bag
                    </Heading>
                    <Heading fontSize="14px">{cartCount} Items</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                display="flex"
                justifyContent={"space-between"}
              >
                <Flex flexDirection="column">
                  <Text>{cartCount} items in the Cart</Text>
                  <Heading as="h3" fontSize="large" fontWeight="medium">
                    Delivery address
                  </Heading>
                  <Text>{deliveryAddress.name}</Text>
                  <Text>{deliveryAddress.email}</Text>
                  <Text>{deliveryAddress.phone}</Text>
                  <Text>{deliveryAddress.address}</Text>
                  <Text>{deliveryAddress.pincode}</Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem></AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    textAlign="left"
                  >
                    <Heading as="h1" fontSize="16px">
                      Price Details
                    </Heading>
                    {<Heading fontSize="14px">₹{price.toFixed(1)}</Heading>}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Bag MRP ({cartCount} items)</span>
                  <span>₹{price.toFixed(1)}</span>
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>After Discount</span>
                  <span>₹{price.toFixed(1)}</span>
                </Text>
                <Text display={"flex"} justifyContent="space-between">
                  <span>Saving at this Time</span>
                  <span color="green">
                    {price.toFixed(1) - price.toFixed(1)}
                  </span>
                </Text>
                <Heading
                  display={"flex"}
                  justifyContent="space-between"
                  as="h1"
                  fontSize="16px"
                >
                  <span>You Pay</span> <span>₹{total.toFixed(1)}</span>{" "}
                </Heading>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box display="flex" gap="10px" mt="12px" p="12px 17px">
            <Text fontSize={"12px"}>
              Buy authentic products. Pay securely. Easy returns and exchange
            </Text>
            <Image
              w="39px"
              h="37px"
              src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png"
              alt="image"
            />
          </Box>
        </Box>
      </Flex>
    </Flex>
    </Center>
  );
}

export default PaymentPage;
