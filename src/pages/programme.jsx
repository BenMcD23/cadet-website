import Programme_pdf from "/programme.pdf"


function Programme() {
    return (
    <div className="lg:pt-20" style={{height:"90vh"}}>
        <embed src={`${Programme_pdf}#navpanes=0&scrollbar=0&view=Fit`} width="100%" height="100%"/>
    </div>
    );
}

export default Programme;