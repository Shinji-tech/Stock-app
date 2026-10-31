'use client';

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react"
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () =>{
        router.push("/sign-in");
    }

    const user = {name: 'John', email: 'contact@gmail.com'};

  return (
    <DropdownMenu>
        <DropdownMenuTrigger
            render={
                <Button
                    variant="ghost"
                    className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
                />
            }
        >
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                        {user.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                </div>
        </DropdownMenuTrigger>
    <DropdownMenuContent
        align="end"
        className="w-48 max-w-[calc(100vw-1rem)] text-gray-400"
    >
            <DropdownMenuGroup>
                <DropdownMenuLabel>
                    <div className="flex min-w-0 items-center gap-2 py-1">
                        <Avatar className="h-8 w-8 shrink-0">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex min-w-0 flex-col">
                            <span className="truncate text-xs font-medium text-gray-400">
                                {user.name}
                            </span>
                            <span className="whitespace-nowrap text-[10px] text-gray-500">
                                {user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
            </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-600"/>
        <DropdownMenuItem onClick={handleSignOut} className="text-sm font-medium text-gray-100 transition-colors focus:bg-transparent focus:text-yellow-500">
            <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
            LogOut
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>
        <nav className="sm:hidden">
            <NavItems />
        </nav>
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown