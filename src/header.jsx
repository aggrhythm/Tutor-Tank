import logo from "/logo.png"

function Header() {

    return (
        <div className="bg-white fixed top-0 left-0  h-20 z-50 p-7 flex justify-between header-div" style={{ width: "100vw" }}>
            <div className="flex items-center justify-between w-full">
                <img src={logo} width={160} />

            </div >
        </div >
    );
}

export default Header;