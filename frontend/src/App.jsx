import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; // Import SidebarProvider and SidebarTrigger
import { AppSidebar } from './components/app-sidebar';
import './App.css';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"





function App({ children }) {
  return (
    <>
    <html>
      <body>
      {/* <div className='relative'>
        <Avatar className="absolute -top-64 left-96 mx-44 h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div> */}
      
      <div className="dark">
      <SidebarProvider>
        <AppSidebar />
        <main>
        
          {children}  
        </main>
      </SidebarProvider>
      </div>
      <div>
      <NavigationMenu className="relative -top-72 right-32">
  <NavigationMenuList className="group flex flex-1 list-none items-center justify-center space-x-1">
    <NavigationMenuItem>
      <NavigationMenuTrigger className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-white font-medium transition-colors hover:bg-slate-600 hover:text-slate-50 focus:bg-slate-600 focus:text-slate-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-600/50 data-[state=open]:bg-slate-600/50">
        How To
      </NavigationMenuTrigger>
      <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto bg-gray-800">
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuList className="group flex flex-1 list-none items-center justify-center space-x-1">
    <NavigationMenuItem>
      <NavigationMenuTrigger className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-white font-medium transition-colors hover:bg-slate-600 hover:text-slate-50 focus:bg-slate-600 focus:text-slate-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-600/50 data-[state=open]:bg-slate-600/50">
        Blogs
      </NavigationMenuTrigger>
      <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto bg-gray-800">
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuList className="group flex flex-1 list-none items-center justify-center space-x-1">
    <NavigationMenuItem>
      <NavigationMenuTrigger className="inline-flex h-10 w-max items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-white font-medium transition-colors hover:bg-slate-600 hover:text-slate-50 focus:bg-slate-600 focus:text-slate-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-600/50 data-[state=open]:bg-slate-600/50">
        Rankings
      </NavigationMenuTrigger>
      <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto bg-gray-800">
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>


      </div>
      </body>
      </html>
    </>
    
  );
}

export default App;
