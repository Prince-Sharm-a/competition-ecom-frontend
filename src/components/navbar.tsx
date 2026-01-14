import { ModeToggle } from "./ui/darkModeToggle";

export default function Navbar(){
    return (
        <div className="flex items-center p-2 w-full">
            <h2 className="text-2xl font-semibold">Shopy</h2>

            <div className="ml-auto">
                <ModeToggle />
            </div>
        </div>
    )
}