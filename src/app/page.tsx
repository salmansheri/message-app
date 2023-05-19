import HomeClient from "./components/Home";
import { getCurrentUser } from "@/libs/getCurrentUser";



export default async function Home() {

  const currentUser = await getCurrentUser(); 
  console.log(currentUser); 
  
  return (
    <main >
      <HomeClient currentUser={currentUser} />
    </main>
  )
}
