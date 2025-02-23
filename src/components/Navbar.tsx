const Navbar = () => {
    return (
        <div className={`w-full h-20 bg-slate-900 text-white flex items-center justify-between px-20`}>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold">ChaosImage</span>       
            <div className="hidden sm:flex gap-4 sm:text-sm md:text-base">
                <button>Login</button>
                <button>Register</button>
            </div> 
        </div>
    )
}

export default Navbar;