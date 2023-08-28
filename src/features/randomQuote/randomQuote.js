import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Container,
  Stack,
  Box,
  StackDivider,
  Heading,
  Spacer,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

import "./quote.css";
import { FaTwitter } from "react-icons/fa";

export default function RandomQuoteBox() {
  const [quoteData, setQuoteData] = useState({
    content: "",
    author: "",
  });

  const [color, setColor] = useState({
    hex: "",
  });

  const [isFadingOut, setIsFadingOut] = useState(false); // Add state to control fade-out

  const handleClick = () => {
    setIsFadingOut(true); // Trigger the fade-out effect
    setTimeout(() => {
      fetchRandomQuote(); // Fetch a new quote after the fade-out effect
      fetchRandomColor();
      setTimeout(() => {
        setIsFadingOut(false); // Reset the fade-out state after a delay
      }, 500); // Adjust the delay as needed to match your CSS transition duration (1s in this case)
    }, 500); // Adjust the delay as needed to match your CSS transition duration (1s in this case)
  };
  const fetchRandomColor = () => {
    fetch("https://x-colors.yurace.pro/api/random")
      .then((response) => response.json())
      .then((data) => {
        setColor({
          hex: data.hex,
        });
        console.log(data.hex);
      })
      .catch((error) => {
        console.error("Error fetching color data:", error);
      });
  };

  const fetchRandomQuote = () => {
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuoteData({
          content: data[0].content,
          author: data[0].author,
        });
      })
      .catch((error) => {
        console.error("Error fetching quote data:", error);
      });
  };

  useEffect(() => {
    fetchRandomColor();
    fetchRandomQuote(); // Fetch a random quote when the component mounts
  }, []);

  return (
    <Container
      maxW="768px"
      p="6"
      className="dynamic-bg-color"
      style={{
        backgroundColor: color.hex,
        borderRadius: "10px",
        border: "60px",
      }}
    >
      <Card id="quote-box">
        <CardBody>
          <Stack
            divider={<StackDivider />}
            spacing="4"
            className={isFadingOut ? "fade-out-text" : "fade-in-text"}
          >
            <Box>
              <Heading
                size="lg"
                display="inline-block"
                style={{ color: color.hex }}
              >
                "{quoteData.content}"
              </Heading>
            </Box>
            <Box>
              <Text
                pt="2"
                fontSize="lg"
                align="right"
                style={{ color: color.hex }}
              >
                <code>— {quoteData.author}</code>
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          {" "}
          <Container maxW="900px">
            <Flex>
              <Button colorScheme="twitter" borderRadius="100px" width="30px">
                <a
                  href={`https://twitter.com/intent/tweet?text="${quoteData.content}" - ${quoteData.author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="tweet-quote"
                >
                  <FaTwitter />
                </a>
              </Button>
              <Spacer />
              <Button colorScheme="gray" onClick={handleClick}>
                New quote
              </Button>
            </Flex>
          </Container>
        </CardFooter>
      </Card>
    </Container>
  );
}
