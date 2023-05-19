'use client';
import { Button, Center, Stack, Text, Image, Input } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { FcGoogle } from 'react-icons/fc'; 

interface IAuthProps {
    session: Session | null; 
    reloadSession: () => void; 

}

 

const Auth: React.FC<IAuthProps> = ({
    session,
    reloadSession,
}) => {
    const [username, setUsername] = useState(""); 
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

        } catch(error) {

        } finally {
            setIsLoading(false)

        }


    }, [])

    return(
        <div>
           <Center  height="100vh" >
            <Stack spacing={8} align='center'>
                {session ? (
                    <>
                    
                    <Text fontSize="3xl">Create a Username</Text>
                    <Input placeholder="Enter a Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Button width="100%" onClick={onSubmit}>Save</Button>
                    </>
                ): (
                    <>
                        <Text>MessIt!</Text>
                        <Button leftIcon={<FcGoogle size={30} />} onClick={() => signIn('google')}>Continue with Google</Button>
                    </>

                )}
            </Stack>


           </Center>

        </div>
    )
}

export default Auth; 