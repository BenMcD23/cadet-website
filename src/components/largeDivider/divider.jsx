import "./dividerStyles.css"


function Divider() {
    return (
        <>
        <div className="projcard-container">
                <div className="projcard projcard-customcolor" style = {{ '--projcard-color': '#76d0f2'}} >
                    <div className="projcard-innerbox">
                        <img className="projcard-img" src="https://picsum.photos/800/600?image=1041" />
                        <div className="projcard-textbox">
                            <div className="projcard-title">Last Card</div>
                            <div className="projcard-subtitle">That's the last one. Have a nice day!</div>
                            <div className="projcard-bar"></div>
                            <div className="projcard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                            <div className="projcard-tagbox">
                                <span className="projcard-tag">iOS</span>
                                <span className="projcard-tag">Android</span>
                                <span className="projcard-tag">Cordova</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="projcard projcard-customcolor" style = {{ '--projcard-color': '#76d0f2'}} >
                    <div className="projcard-innerbox">
                        <img className="projcard-img" src="https://picsum.photos/800/600?image=1039" />
                        <div className="projcard-textbox">
                            <div className="projcard-title">And a Third Card</div>
                            <div className="projcard-subtitle">You know what this is by now</div>
                            <div className="projcard-bar"></div>
                            <div className="projcard-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
                            <div className="projcard-tagbox">
                                <span className="projcard-tag">Excel</span>
                                <span className="projcard-tag">VBA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Divider;