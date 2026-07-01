import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";
import TeamSection from "@/content/scrollImages_people";

const mono = JetBrains_Mono({
  subsets: ["latin"],
});

const team_25_26 = [
    {
        name: "Duarte Brito",
        role: "Fullstack Developer",
        image: "/file.svg"
    },
    {
        name: "Tomás",
        role: "Desenho 3D",
        image: "/file.svg",
    },
    {
        name: "Duartehhh",
        role: "Fullstack Developer",
        image: "/file.svg"
    },
    {
        name: "Tomewsdfreás",
        role: "Desenho 3D",
        image: "/file.svg",
    },
    {
        name: "Duarte refgdBrito",
        role: "Fullstack Developer",
        image: "/file.svg"
    },
    {
        name: "Tomáwes",
        role: "Desenho 3D",
        image: "/file.svg",
    }
]




export default function about(){
    return(
        <div className="flex flex-col items-center">
            <h2 className={`${mono.className} w-92 mx-2 md:w-200 md:mx-0 text-3xl font-bold mb-10 mt-10`}>Missão</h2>
            <article className="flex flex-col md:flex-row items-center mb-10">
                <h3 className="w-92 mx-2 md:w-95 md:mx-0 md:mr-5 leading-8 text-base">
                    O Projeto Guarda-Rios tem como missão promover a consciencialização da importância da conservação da qualidade da água e dos ecossistemas naturais utilizando a ciência cidadã como ferramenta central.
                    Pretendemos envolver comunidades escolares e não escolares e instituições locais na implementação de ações que promovam a sustentabilidade ambiental, fazendo com que todos assumam um compromisso na promoção de um desenvolvimento sustentável.
                </h3>
                <Image src="globe.svg" alt="Missão image" width={380} height={300} className="w-92 mx-2 md:mx-0 md:w-95 md:ml-5 mb-2"/>
            </article>

            <section className="flex flex-col items-center min-w-full md:flex-row md:justify-center bg-(--background-top-whitemode) mb-20 dark:bg-(--background-top)">
                <div className="flex flex-col items-center min-w-fullborder border-t-0 border-b-1 md:border-b-0 md:border-l-2 border-(--background-whitemode) p-3 pl-6 pr-6 dark:border-(--background)">
                    <h2 className={`${mono.className} text-(--green2) text-2xl font-bold`}>Monitorização</h2>
                    <span className="">dos rios nossos rios</span>
                </div>
                <div className="flex flex-col items-center md:items-start min-w-full md:min-w-0 border border-t-1 border-b-1 border-x-0 border-(--background-whitemode) p-3 dark:border-(--background)">
                    <h2 className={`${mono.className} text-(--green2) text-2xl`}><strong>100%</strong></h2>
                    <span className="">Open-source</span>
                </div>
                <div className="flex flex-col items-center md:items-start min-w-full md:min-w-0 border border-t-1 border-x-0 border-b-0 md:border-r-2 border-(--background-whitemode) p-3 pl-6 pr-6 dark:border-(--background)">
                    <h2 className={`${mono.className} text-(--green2) text-2xl`}><strong>ODS</strong></h2>
                    <span className="">Um desenvolvimento sustentável</span>
                </div>
            </section>

            <article className="mb-10">
                <div className="flex flex-col md:flex-row items-center mb-2">
                    <Image src="globe.svg" alt="Missão image" width={380} height={300} className="md:w-95 md:mx-0 md:mr-5"/>
                    <h3 className="w-92 mx-2 md:w-95 md:mx-0 leading-8 ml-5 text-base">
                        A principal linha de ação consiste em criar uma rede de monitorização da qualidade de massas de água doce através da implementação de sistemas modulares que permitam identificar geograficamente possíveis focos de poluição,
                        possibilitando a implementação imediata de ações que contribuam para minimizar ou solucionar problemas ambientais.
                        Os sistemas modulares de sensorização irão avaliar a qualidade da água através da medição, em tempo real, de alguns parâmetros físico-químicos e que serão transmitidos continuamente e disponibilizados na web.
                    </h3>
                </div>
                <h3 className="leading-8 w-92 mx-2 md:w-200 md:mx-0">De forma a realizar uma abordagem ecológica mais integrada e multidisciplinar, os valores associados aos parâmetros físico-químicos serão articulados com parâmetros biológicos (estudo das comunidades de macroinvertebrados bentónicos) garantindo uma maior validade dos resultados.</h3>
            </article>

            <article className="flex items-center mb-10">
                <div className="flex flex-col w-92 mx-2 md:w-200 md:mx-0">
                    <h3 className="mb-10 leading-8">
                        O espírito open source é também um significativo elemento diferenciador deste projeto, pretendendo-se disponibilizar na web todos os procedimentos associados à sua implementação, além dos dados informativos recolhidos, após sua validação. Com o Projeto Guarda-Rios pretendemos inspirar outros e juntarem-se a nós, criando uma rede de monitorização que contribua para que os rios e oceanos fiquem limpos e saudáveis.
                    </h3>
                    <h3 className="mb-10 leading-8">
                        O espírito open source é também um significativo elemento diferenciador deste projeto, pretendendo-se disponibilizar na web todos os procedimentos associados à sua implementação, além dos dados informativos recolhidos, após sua validação. Com o Projeto Guarda-Rios pretendemos inspirar outros e juntarem-se a nós, criando uma rede de monitorização que contribua para que os rios e oceanos fiquem limpos e saudáveis.
                    </h3>
                </div>
            </article>

            <section className="flex flex-col w-92 mx-2 md:w-200 md:mx-0">
                <h1 className={`${mono.className} text-4xl font-bold mb-10`}>Equipa</h1>
                <h3 className={`w-92 md:w-200 leading-8 text-base mb-3`}>
                    O Guarda-Rios é desenvolvido por alunos do Grupo Ribadouro com o apoio de professores e especialistas de diferentes áreas científicas.
                    O projeto assenta no trabalho colaborativo, permitindo que cada elemento contribua com os seus conhecimentos e interesses para atingir objetivos comuns.
                </h3>
                <h3 className="w-92 md:w-200 leading-8 text-base mb-3">
                    No ano letivo 2022_2023 deu-se início a este trabalho com uma equipa de 4 alunos do Colégio Ribadouro.
                    No ano letivo 2023_2024 deu-se continuidade ao Projeto com algumas dezenas de alunos dos três Colégios do Grupo Ribadouro. 
                </h3>

                <h2 className={`${mono.className} font-bold text-3xl`}>2022/2023</h2>
                <TeamSection />

                <h2 className={`${mono.className} font-bold text-3xl`}>2023/2024</h2>
                <TeamSection />

                <h2 className={`${mono.className} font-bold text-3xl`}>2024/2025</h2>
                <TeamSection />

                <h2 className={`${mono.className} font-bold text-3xl`}>2025/2026</h2>
                <TeamSection team={team_25_26}/>
            </section>
        </div>
    );
}