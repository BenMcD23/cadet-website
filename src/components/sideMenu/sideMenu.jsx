import ScrollIntoView from 'react-scroll-into-view';

import "./sideMenuStyles.css";


function SideMenu() {


    return (
        <>
            <div className="side-menu">
                <ScrollIntoView selector="#scroll-into-view">
                    <div className="">

                        test


                    </div>
                </ScrollIntoView>
                <ScrollIntoView selector="#scroll-into-view">
                    <div className="">

                        test


                    </div>
                </ScrollIntoView>
                <ScrollIntoView selector="#scroll-into-view">
                    <div className="">

                        test


                    </div>
                </ScrollIntoView>
            </div>
        </>
    );
}

export default SideMenu;