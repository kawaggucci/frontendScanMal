

const Heading2 = () => {
    return (
        <header className="bg-white-500 py-10 text-left">
            <h3 className="text-2xl font-medium text-white-600 text-left">
            Upload file
            </h3>
            <p className="text-base text-white-500 leading-relaxed">
            Please upload your file in .pdf, .txt, .docx here. Click the button once it's uploaded and wait here. We'll analyse it and get back to you soon!
            </p>
        </header>
    );
};

export default Heading;



const Button = () => {
    /*const handleClick = () => {
        console.log('clicked');
    }*/

    return (
        <div className="text-lg text-white-500 mt-2 text-left">
        <button
            //onCLick={handleClick}
            className="bg-green-500 hover:bg-green-600 font-medium py-2 px-4 rounded">
                Scan File
        </button>
        </div>
    );
};

export default Button;