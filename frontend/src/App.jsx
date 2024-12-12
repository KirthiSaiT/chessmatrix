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
      



      </div>
      </body>
      </html>
    </>
    
  );
}

export default App;
