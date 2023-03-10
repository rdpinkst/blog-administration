function Navbar() {
    return (
        <nav className="flex justify-between pt-7 pb-7 pr-14 pl-14 border-b bg-eggplant text-white">
            <h1 className="text-2xl font-semibold">Blog Administration</h1>
            <ul className="flex justify-evenly space-x-9 text-lg font-medium">
                <li>Sign-in</li>
                <li>Sign-up</li>
            </ul>
        </nav>
    )
}

export default Navbar;