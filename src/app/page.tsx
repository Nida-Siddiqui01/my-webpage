import Link from "next/link";
export default function Homepage()
{                                                                                                
  return(
 
 <div>
  <h1>This is my Homepage
    </h1>

    <div id="par">
    <p><Link href="/About">About</Link></p>
    <p><Link href="/Contact">Contact</Link></p>
    <p><Link href="/Service">Service</Link></p>
    </div>
    
    </div>
  )
}