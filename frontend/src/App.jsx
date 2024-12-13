import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"; // Import SidebarProvider and SidebarTrigger
import { AppSidebar } from './components/app-sidebar';
import './App.css';
// src/components/command-demo.jsx
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';  // Ensure this is the correct import path







function App({ children }) {
  return (
    <>
    
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
      <Command className="dark absolute -top-[620px] left-10 right-20">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandSeparator />
    
      <CommandItem className="bg-gray-800">Team</CommandItem>
      <CommandItem className="bg-gray-800">Ratings</CommandItem>
      <CommandItem className="bg-gray-800">Ranking</CommandItem>
    
  </CommandList>
</Command>

      </div>
      
    </>
    
  );
}

export default App;
