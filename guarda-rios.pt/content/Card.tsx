import Image from "next/image";
import { Space_Mono, Inter } from "next/font/google";


const mono = Space_Mono({
  weight: '400',
  subsets: ["latin"],
});


const inter = Inter({
  subsets: ["latin"],
})


export default function Card(){
    return (
        <div className="border border-(--border) rounded rounded-lg">
            <article className="flex flex-col">
                <h1 className=""></h1>

            </article>
            <Image src="" alt="" width={} height={} />

        </div>
    );

}

