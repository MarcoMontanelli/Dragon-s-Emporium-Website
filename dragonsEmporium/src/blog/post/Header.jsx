import React, { useRef } from 'react';
import Breadcrumbs from "./Breadcrumb.jsx";

const Header = ({date, title, directories}) => {
    
    return (
        <header class="mb-4 lg:mb-6 not-format">
              <Breadcrumbs directories={directories} />
              <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime={date} >{date}</time></p>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-5xl text-white">{title}</h1>
          </header>
    );
};

export default Header;
