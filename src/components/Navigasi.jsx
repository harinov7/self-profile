import { useState } from "react"
import Dummy_Profile from "../assets/Dummy_Profile.jpg"

export default function Navigasi() {

    const [hamburger, setHamburger] = useState(false);

    function handleClickHamburger() {
        setHamburger(!hamburger)
    }

    return (
        <nav className="flex fixed top-0 left-0 z-60 font-main w-full">
            <div className="z-50 w-full backdrop-blur-md">
                <div className="text-2xl text-white font-bold bg-cyan-400 w-10 h-10 bg-secondary rounded-full flex items-center justify-center m-3 shadow-lg">
                    <button className="hamburger" onClick={handleClickHamburger}>
                        &#9776;
                    </button>
                </div>
            </div>


            <aside className={`fixed h-dvh bg-main z-40 w-60 px-5 pt-20 shadow-lg shadow-[0_0_15px_rgba(122,209,117,0.2)] transition duration-500 ${hamburger ? `translate-x-0` : `-translate-x-60`}`}>
                <div className="flex items-center justify-center gap-4">
                    <img src={Dummy_Profile} alt="Dummy_Profile" className="w-10 rounded-full" />
                    <h2 className="font-bold">Fadhil Ibnu Adhari</h2>
                </div>
            </aside>
        </nav>
    )
}