import Image from "next/image"

export default function Footer(){
    return(
        <footer className="footer mt-auto footer-center p-10 bg-blue-800 text-white text-center" >
            <div className="mb-4">
                <div className="w-full flex items-center justify-center">
                    {/* <p className="text-center">HI</p> */}
                    <Image src="/Logo.png" width={100} height={120} className="h-[100px] w-[200px]"></Image>
                </div>

                <p className="font-bold">
                    CodeRIT <br/>The community that promotes coding culture in Ramaiah.
                </p> 
                <p>Ramaiah Institute of Technology</p>
            </div> 
            <nav className="w-full bg-blue-800 shadow-0">
                <div className="flex w-full justify-center gap-x-10">
                    <a href="https://chat.whatsapp.com/He9eoOHo26rDAXFiUQul9E" target="_blanck">
                        <Image src="/whatsapp.svg" width={30} height={30}></Image>
                    </a> 
                    <a href="https://www.instagram.com/code_rit/" target="_blanck">
                        <Image src="/instagram.svg" width={30} height={30}></Image>
                    </a> 
                </div>
            </nav>
        </footer>
    )
}