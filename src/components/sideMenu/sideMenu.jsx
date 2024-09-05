import React, { useEffect, useRef, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

import "./sideMenuStyles.css";

function SideMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
    
    return (
        <>  
            {/* change so style changes to positon absolute at 70 percentScrolled */}
            <aside className="side-menu" tabIndex="0">
                <div className="collapsed-menu-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="side-menu-header">
                    <h2>Documents</h2>
                </div>
                <ul>
                    <li tabIndex="0">        
                    <ScrollIntoView selector="#forms">
                        Forms
                    </ScrollIntoView>
                    </li>
                    <li tabIndex="0"><button className={`dropdown-btn ${dropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
                    Dropdown 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={`dropdown-container ${dropdownOpen ? 'show' : ''}`}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div></li>
                    <li tabIndex="0"><span></span></li>
                    <li tabIndex="0"><span></span></li>
                </ul>
            </aside>
        </>
    );
}

export default SideMenu;
