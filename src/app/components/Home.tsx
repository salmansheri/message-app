'use client'; 

import React, {useMemo} from 'react';

import { Box } from '@chakra-ui/react';
import { User } from '@prisma/client';
import Auth from './auth/Auth';
import Chat from './chat/Chat';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react'; 


interface HomeClientProps {
  currentUser?: User | null; 
}


const HomeClient: React.FC<HomeClientProps> = ({
  currentUser
}) => {
  const { data: session } = useSession(); 


  // console.log(session); 
  const reloadSession = () => {}

  return (
    <Box >
      {session?.user?.username ?  <Chat /> : <Auth session={session} reloadSession={reloadSession} />}
    </Box>
  )
}

export default HomeClient