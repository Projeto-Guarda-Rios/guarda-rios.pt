import { JetBrains_Mono } from "next/font/google";
import Terminal from "@/content/Terminal";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import EventSection from "@/content/scrollimages_events";

const mono = JetBrains_Mono({
  subsets: ["latin"],
});


const events =[{
    name: "Faqtos 25/26",
    date: "2025/2026",
    image: "/globe.svg"
  },
  {
    name: "Ifest²",
    date: "2025",
    image: "/globe.svg"
  },
  {
    name: "Mostra nacional da Juventude dos jovens cientistas",
    date: "2024/2025",
    image: "/globe.svg"
  },
  {
    name: "Atlantico Junior",
    date: "2023/2024",
    image: "/globe.svg"
  }
]






export default function Home() {
  return (
    <main className="flex flex-col items-center">
        <div className="mt-8 w-full px-2 md:w-200">
          <h2 className={`${mono.className} text-4xl mb-6`}>
            <strong>Missão do projeto</strong>
          </h2>
          <section className="flex flex-col md:flex-row gap-3">
            <Image src="/guarda_rios_logo1.png" alt="Guarda-Rios Logo" width={400} height={100} />
            <h3 className="w-92 px-2 md:w-100 md:px-0 text-base leading-8">
              O projeto Guarda-Rios tem como objetivo desenvolver estações de medição da qualidade da água dos cursos de água doce do País.
              Com as nossas estações <i>low-cost</i> e energeticamente independentes, somos capazes de obter dados por todo o país e disponibilizar a informação ao público.
              Desta forma, conseguimos permitir que qualquer pessoa possa ajudar a proteger os rios, pois qualquer pessoa pode replicar as nossas estações.
              Permitindo que todos possam participar na proteção dos rios.
            </h3>
          </section>
        </div>
        
        <section className="min-w-full flex justify-center bg-(--background-top-whitemode) mt-6 dark:bg-(--background-top)">
          <div className="border border-t-0 border-l-2 border-b-0 border-(--background-whitemode) p-3 pl-6 pr-6 dark:border-(--background)">
            <h2 className={`${mono.className} text-(--green2) text-2xl`}><strong>100%</strong></h2>
            <span className="">open-source</span>
          </div>
          <div className="border border-t-0 border-b-0 border-(--background-whitemode) p-3 pl-6 pr-6 dark:border-(--background)">
            <h2 className={`${mono.className} text-(--green2) text-2xl`}><strong>24/7</strong></h2>
            <span className="">Monitorização das águas</span>
          </div>
          <div className="border border-t-0 border-r-2 border-b-0 border-(--background-whitemode) p-3 dark:border-(--background)">
            <h2 className={`${mono.className} text-(--green2) text-2xl`}><strong>2</strong></h2>
            <span className="">Parametros a medir</span>
          </div>
        </section>

        <section className={`pt-20 pb-10 w-100 px-2 md:w-200 md:px-0`}>
            <h1 className={`${mono.className} w-98 mx-2 md:w-200 md:px-0 text-4xl`}> <strong>Monitorização dos Rios de Portugal</strong></h1>
            <h2 className="mt-3 text-lg w-100 px-2 md:w-200 md:px-0">O projeto Guarda-rios é open-source e tem como objetivo desenvolver estações <i>low-cost</i> para monitorizar os rios portugueses. Com as nossas estações ajudamos o ambiente.</h2>
            
            <div className="flex gap-4 px-2 md:px-0">
              <Link href="https://github.com/" className="flex p-1 mt-7 rounded border border-1 border-(--border2) text-sm items-center gap-1">
              <MoveRight /> GitHub
              </Link>
              <Link href="https://data.guarda-rios.pt" className="flex p-1 mt-7 rounded border border-2 border-(--green)/60 bg-(--green2)/40 items-center gap-1 text-sm">
              <MoveRight /> Portal de Dados
              </Link>
            </div>

            <Terminal filename="Sobre.md" classname="mt-7 w-92 mx-2 md:w-200 md:mx-0" lines={[
              {
                text: "Recolhemos dados sobre a qualidade da água dos rios em tempo real.",
                highlight: "em tempo real"
              },
              {
                text: "As estações de avaliam parametros de Temperatura e Turbidez da água dos rios.",
                highlight: "Temperatura e Turbidez"
              },
              {
                text: "O projeto é 100% open-source licenciado pelas licensas MIT e CERN-OHL-P v2.",
                highlight: "MIT e CERN-OHL-P v2"
              },
              {
                text: "Dados abertos a todo o público para visualização.",
                highlight: "a todo o público"
              }
            ]} /> 
        </section>

        <div className="mt-6">
          <h2 className={`${mono.className} text-4xl mb-6 w-92 mx-2 md:w-200 md:mx-0`}>
            <strong>Porque os rios?</strong>
          </h2>
          <section className="flex flex-col w-92 mx-2 md:flex-row md:w-200 md:mx-0 gap-10 items-center">
            <div> 
              <h3 className="w-92 md:w-95 text-base leading-8">
              A água é um dos bens naturais mais essenciais, mesmo assim os cursos de água estão cada vez mais a serem alvos da poluição.
              Com descargas ilegais, contaminações e outros acontecimentos recorrentes, os rios adquerem uma elevada quantidade de poluentes e ficam contaminados, 
              impedindo o consumo e destruindo a biodiversidade.
              </h3>
              <h3 className="w-92 md:w-95 text-base leading-8">
                Com isto, nós medimos parametros como a Turbidez e o pH que são essenciais para a avaliação da poluição dos rios.
              </h3>
            </div>
            <Terminal filename="parametros.sh" classname="w-92 mx-2 sm:mx-0 md:w-100" height="h-75" text_size="text-xl" text_color="text-(--text2)" lines={[
                {text: "Parâmetros: "},
                {text: "Temperatura: 25ºC,", highlight: "Temperatura"},
                {text: "Turbidez: 3 NTU", highlight: "Turbidez:"},
            ]} />
          </section>
        </div>
        <section className="w-92 mx-2 md:w-200 md:mx-0 mb-20">
          <h3 className={`${mono.className} text-xs mt-8 font-bold text-(--green2)`}><Link href="/sobre">Saber mais +</Link></h3>
        </section>


        <section className="flex flex-col items-center mb-21">
          <div>
            <h1 className={`${mono.className} text-4xl w-92 mx-2 md:w-200 md:mx-0 mb-8`}><strong>Parâmetros medidos</strong></h1>
          </div>

          <section className="flex flex-col gap-10 mb-5 w-92 mx-2 md:w-200 md:mx-0 md:flex-row">
            <div className="flex border border-(--border-whitemode)/90 bg-(--background-top-whitemode) border-3 rounded rounded-lg p-5 w-92 md:w-95 shadow-xl shadow-(--border-whitemode)/10 dark:bg-(--background-top) dark:border-(--green2)/80 dark:shadow-green-500/10">
              <article className="flex flex-col">
                  <h1 className={`${mono.className} text-3xl mb-2`}><strong>Temperatura</strong></h1>
                  <h3 className="text-sm leading-6">
                      Este é um fator importante para verificar a capacidade da água de conter os gases, como oxigénio, essenciais aos seres vivos.
                      Além disso, os seres vivos poiquilotérmicos estão suscétiveis às variações de Temperatura.
                  </h3>
              </article>

            </div>

            <div className="flex border border-(--border-whitemode)/90 bg-(--background-top-whitemode) border-3 rounded rounded-lg p-5 w-92 md:w-95 shadow-xl shadow-(--border-whitemode)/10 dark:bg-(--background-top) dark:border-(--green2)/80 dark:shadow-green-500/10">
              <article className="flex flex-col">
                  <h1 className={`${mono.className} text-3xl mb-2`}><strong>Turbidez</strong></h1>
                  <h3 className="text-sm leading-6">
                      Este fator influência diretamente a solubilidade da água, afetando os seres vivos que vivem nestas águas. 
                    Grandes variações deste indicador impacta negativamente os ecossistemas aquáticos, sendo um bom indicador da poluição da água.
                  </h3>
              </article>

            </div>
          </section>
          <h3 className={`${mono.className} text-xs mt-8 font-bold text-(--green2) w-92 mx-2 md:w-200 md:mx-0`}><Link href="/parametros">Saber mais +</Link></h3>
        </section>


        <section className="w-92 mx-2 md:w-200 md:mx-0 mb-21">
          <h1 className={`${mono.className} text-4xl w-200`}><strong>Protótipo</strong></h1>

          <div className="mt-8">
              <article className="flex flex-col gap-4 items-center">
                <Image src="/Untitled.png" alt="Example_station" width={800} height={600} className="rounded rounded-lg" />
                <h3>
                  O nosso protótipo é o elemento chave desta missão. Isto será a parte responsável pela obtenção dos dados no terreno. Aqui será onde a magia acontecerá.
                  Através dos sistemas que utilizamos e das PCI que desenvolvemos, somos capazes de obter e enviar para os servidores todos os dados que temos e disponibilizarmo-los
                  para todas as pessoas.
                </h3>
              </article>
          </div>
          <h3 className={`${mono.className} text-xs mt-8 font-bold text-(--green2)  w-92 mx-2 md:w-200 md:mx-0`}><Link href="/prototipo">Saber mais +</Link></h3>
        </section>
        

        <section className=" w-92 mx-2 md:w-200 md:mx-0 mb-21">
          <h1 className={`${mono.className} text-4xl w-92 md:w-200`}><strong>Concursos Científicos</strong></h1>

          <div className="w-92 md:w-200 flex gap-10 mt-8">
              <EventSection Event={events} Width="w-92 md:w-200"/>
          </div>
        </section>

            
        <section className="w-92 mx-2 md:w-200 md:mx-0">
                <h1 className={`${mono.className} text-4xl font-bold mb-10`}>Parcerias</h1>
                
                <section className="flex flex-col md:flex-row gap-5">
                    <Image src="/globe.svg" alt="ÁguasDoPorto" width={200} height={200} />
                    <Image src="/globe.svg" alt="ÁguasDoPorto" width={200} height={200} />
                    <Image src="/globe.svg" alt="ÁguasDoPorto" width={200} height={200} />
                </section>
            </section>
    </main>
  );
}
