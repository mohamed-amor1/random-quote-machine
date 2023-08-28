import React from "react";
import "./App.css";
import RandomQuoteBox from "./features/randomQuote/randomQuote";
import { ChakraProvider } from "@chakra-ui/react";
import { FaGithubAlt } from "react-icons/fa";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <p class="">
            <code>Random Quote Machine</code>
          </p>
        </header>
        <RandomQuoteBox />

        <footer class="w-6/12		 bg-white rounded-lg shadow m-4 dark:bg-gray-800 mx-auto mt-6">
          <div class="w-6/12 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm font-mono text-gray-400 sm:text-center dark:text-gray-400 flex-grow">
              © 2023 Mohamed Amor
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li class="mr-2 ml-2">
                <a href="https://github.com/mohamed-amor1">
                  <FaGithubAlt size="20px" />
                </a>
              </li>
              <li class="mr-2 ml-2">
                <a href="mailto:mohamedamor654@gmail.com">
                  <i
                    style={{ fontSize: "20px" }}
                    class="fa fa-envelope"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
