import React, { useEffect, useRef, useState } from 'react';
import "./sideMenuStyles.css";

function SideMenu() {

    return (
        <>  
            {/* change so style changes to positon absolute at 70 percentScrolled */}
            <div className="side-menu" tabIndex="0">
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
                    <li tabIndex="0"><span>Forms</span></li>
                    <li tabIndex="0"><span></span></li>
                    <li tabIndex="0"><span></span></li>
                    <li tabIndex="0"><span></span></li>
                </ul>
            </div>
        </>
    );
}

export default SideMenu;
