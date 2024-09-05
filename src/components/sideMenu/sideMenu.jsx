import ScrollIntoView from 'react-scroll-into-view';

import "./sideMenuStyles.css";


function SideMenu() {

    return (
        <>
        <div className="side-menu" tabIndex ="0">
            
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
                <li tabIndex ="0"><span>Forms</span></li>
                <li tabIndex ="0"><span></span></li>
                <li tabIndex ="0"><span></span></li>
                <li tabIndex ="0"><span></span></li>
            </ul>
        </div>


        </>
    );
}

export default SideMenu;