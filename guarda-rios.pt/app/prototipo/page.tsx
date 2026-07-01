import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
});


export default function Prototipo(){
    return(
        <div className="flex flex-col items-center">
            <section className="w-92 md:w-200 mb-10">
                <h1 className={`${mono.className} text-4xl font-bold mt-20 mb-5`}>Protótipo</h1>
                <p className="leading-8">
                    O protótipo do Guarda-Rios é composto por três elementos principais: a caixa de monitorização instalada no terreno,
                    o Aqua Node responsável pela aquisição dos dados e o sistema de comunicação com o servidor através da tecnologia NB-IoT.
                    Embora os sensores permitam recolher informação sobre o estado da água, é a comunicação por radiofrequência que garante
                    a transmissão eficiente desses dados para uma plataforma central. Utilizando as redes móveis NB-IoT, o sistema consegue
                    enviar medições de forma fiável, com baixo consumo energético e cobertura alargada, tornando as radiofrequências um
                    elemento essencial para a monitorização remota e contínua dos ecossistemas fluviais.
                </p>
            </section>

            <Image src="/globe.svg" alt="Esquema de montage" width={800} height={400} className="w-92 mx-2 md:w-200 md:mx-0"/>

            <section className="flex flex-col md:flex-row gap-5 w-92 mx-2 md:mx-0 md:w-200 mt-20">
                <div className="w-95">
                    <h2 className={`${mono.className} text-3xl font-bold mb-5`}>Caixa</h2>
                    <p className="leading-8">
                        A caixa é o elemento que contêm os componentes que vão fazer a ligação entre o servidor e os sensores no rio.
                        É aqui que temos a nossa bateria, PCI e modulo NB-IoT. A PCI recebe os dados vindos do AquaNode, processa-os de RS-485 para UART e comunica-os
                        para o NB-IoT onde este comunicará com o servidor via a rede móvel. A PCI está construida à volta do  microcontrolador ESP32-WROOM-32D, que está
                        responsável por tratar dos dados e controlar a energia da estação.
                    </p>
                    <b>Componentes:</b>
                    <div className="flex flex-col gap-2 ml-5">
                        <li><b>NB-IoT:</b> M5Stack NB-IoT2 (SIM7028)</li>
                        <li><b>Microcontrolador:</b> ESP32-WROOM-32D</li>
                        <li><b>Fonte de energia:</b> Painel Solar</li>
                    </div>
                </div>
                <Image src="globe.svg" alt="Imagem Vertical da Caixa" width={380} height={380} />
            </section>

            <section className="flex flex-col-reverse gap-5 md:flex-row w-92 mx-2 md:w-200 md:mx-0 mt-20">
                <Image src="globe.svg" alt="ImagemVerticalCaixa" width={400} height={400} />
                <div className="w-92 md:w-95">
                    <h2 className={`${mono.className} text-3xl font-bold mb-5`}>AquaNode</h2>
                    <p className="leading-8">
                        O AquaNode é o componente essencial de todo este sistema. É por aqui que a história começa até chegar ao servidor.
                        Aqui é onde os sensores estão armazenados, estes estão conectados a um PCI que converte os dados para RS-485 que nos permite enviar
                        dados a longa distância com pouca perda de sinal. Permitindo-nos comunicar com a caixa, de onde recebe energia.
                    </p>
                    <b>Componentes:</b>
                    <div className="flex flex-col gap-2 ml-7">
                        <li><b>Microcontrolador:</b> STM32L053R8</li>
                        <li><b>Turbidez:</b> DFRobot SEN0554</li>
                        <li><b>Temperatura:</b> DS18B20</li>
                    </div>
                </div>
            </section>

            <section className="w-92 mx-2 md:w-200 md:mx-0 mt-20 mb-20">
                <h2 className={`${mono.className} text-3xl font-bold mb-5`}>Comunicação por radiofrequências</h2>
                <p className="leading-8">
                    A comunicação por radiofrequência constitui um dos elementos centrais do protótipo Guarda-Rios, permitindo a transmissão remota dos dados recolhidos pelos sensores sem necessidade de uma ligação física ao servidor. Para este efeito é utilizada a tecnologia NB-IoT (Narrowband Internet of Things), uma tecnologia de comunicação sem fios desenvolvida para dispositivos IoT que necessitam de transmitir pequenas quantidades de dados de forma eficiente, fiável e com reduzido consumo energético.
                </p>
                <p className="leading-8">
                    O sistema integra um módulo M5Stack NB-IoT2, responsável por estabelecer a ligação à rede móvel e encaminhar a informação para o servidor. A comunicação entre o Aqua Node e este módulo é realizada através da interface UART (Universal Asynchronous Receiver-Transmitter), um protocolo de comunicação série amplamente utilizado em sistemas embebidos devido à sua simplicidade, robustez e fiabilidade. Através desta interface, o Aqua Node envia ao módulo NB-IoT as medições efetuadas pelos diferentes sensores, ficando este encarregado de as transmitir através da infraestrutura de telecomunicações.
                </p>
                <p className="leading-8">
                    A utilização de radiofrequências permite eliminar a necessidade de cablagem e possibilita a instalação do sistema em locais remotos ou de difícil acesso, como margens de rios e zonas naturais. Ao recorrer à rede NB-IoT, o protótipo beneficia de uma elevada cobertura, boa penetração do sinal e baixo consumo energético, características fundamentais para aplicações de monitorização ambiental que necessitam de operar de forma contínua durante longos períodos.
                </p>
                <p className="leading-8">
                    Após a transmissão via radiofrequência, os dados são recebidos pelo servidor, onde são armazenados e processados. Esta arquitetura permite acompanhar, em tempo real, o estado dos parâmetros monitorizados e disponibilizar a informação através da plataforma do projeto, facilitando a deteção de alterações na qualidade da água e apoiando uma monitorização ambiental mais eficiente.
                </p>
            </section>

        </div>
    );
}