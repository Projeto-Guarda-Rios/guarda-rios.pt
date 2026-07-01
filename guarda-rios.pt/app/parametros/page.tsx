import Terminal from "@/content/Terminal";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";


const mono = JetBrains_Mono({
  subsets: ["latin"],
});


export default function Parametros(){
    return(
        <div className="flex flex-col items-center">
            <section className="w-92 mx-2 md:w-200 md:mx-0">
                <h1 className={`${mono.className} text-4xl font-bold py-10 mt-10`}>Parâmetros</h1>
                <p className="leading-8 text-base mb-10">
                    A qualidade das águas superficiais é determinada através da avaliação de diferentes parâmetros que caracterizam o estado ecológico dos ecossistemas aquáticos.
                    O projeto Guarda-Rios monitoriza continuamente vários parâmetros físico-químicos e complementa essa informação com indicadores biológicos,
                    permitindo obter uma visão integrada da qualidade da água.
                    Nesta página são apresentados os principais parâmetros analisados e a sua relevância para a monitorização ambiental.
                </p>
            </section>

            <section className="w-92 mx-2 md:w-200 md:mx-0 mb-5">
                <Terminal filename="parametros.sh" lines={[
                    {text: "Físico-Químicos:", highlight: "Físico-Químicos:"},
                    {text: "Parametros para compreender capacidade da água para incorporar seres vivos."},
                    {text: "Biológicos:", highlight: "Biológicos:"},
                    {text: "Parametros que nos revelam diretamente a existência dos seres vivos."}
                ]} classname="w-92 md:w-200 mr-5"/>
            </section>

            <section className="w-92 mx-2 md:w-200 md:mx-0">
                <h2 className={`${mono.className} text-3xl font-bold py-10`}>Parâmetros fisico-químicos</h2>
                <article className="mb-5">
                    <p className="leading-8">
                        A análise de parâmetros físico-químicos é uma das principais formas de avaliar a qualidade da água.
                        Estes parâmetros fornecem informações sobre as condições do meio aquático e ajudam a detetar alterações que podem ter impacto nos ecossistemas.
                        No âmbito do projeto Guarda-Rios, são atualmente monitorizados a temperatura e a turbidez, dois indicadores que permitem acompanhar,
                        em tempo real, algumas das características mais importantes da água através de uma solução simples e acessível.
                    </p>
                </article>

                <article className="flex flex-col md:flex-row gap-5">
                    <p className="leading-8 w-92 md:w-200">
                        A <b>temperatura</b> da água é um fator que afeta o metabolismo dos organismos aquáticos. Mudanças significativas na temperatura podem ter impactos na disponibilidade de oxigénio dissolvido e,
                        consequentemente, na taxa de reprodução e no comportamento dos organismos. De referir ainda, que a maioria dos organismos aquáticos são poiquilotérmicos,
                        logo são significativamente afetados por mudanças bruscas de temperatura, sobretudo, se forem registados valores acima ou abaixo do valor máximo e mínimo tolerados,
                        podendo levar ao desaparecimento desse ser vivo nesse ecossistema. Por fim, a velocidade de reações químicas depende da temperatura afetando numerosos parâmetros como a solubilidade dos gases na água, a densidade,
                        a viscosidade, a tensão superficial e o grau de acidez, entre outros (Vasconcelos, 2015). O registo de temperaturas elevadas pode ser indicador da presença de descargas de água quente de fontes industriais,
                        o que pode causar danos aos seres vivos, afetando a biodiversidade local.
                    </p>
                    <Image src="/globe.svg" alt="Sensor_Temp" width={380} height={380} className="w-92 md:w-95"/>
                </article>
                <p className="leading-8 mb-20">
                     Quanto à <b>temperatura</b> o valor máximo admissível (VMA), definido como objetivo ambiental de qualidade mínima, para efeito de consumo humano é de <b>25ºC</b>.
                </p>

                <article className="flex flex-col md:flex-row gap-5">
                    <Image src="/globe.svg" alt="Sensor_Temp" width={380} height={380} />
                    <p className="leading-8 w-92 mx-2 md:w-200 md:mx-0">
                        A <b>turbidez</b> refere-se à quantidade de partículas sólidas em suspensão na água. Pode ser causada pela presença de sedimentos, algas, substâncias poluentes e outros materiais.
                        A turbidez afeta a penetração da luz solar na água, prejudicando a fotossíntese realizada pelos seres vivos fotoautotróficos e, consequentemente, toda a cadeia alimentar.
                        Elevados níveis de turbidez podem indicar a presença excessiva de substâncias poluentes que prejudicam a vida aquática. No entanto, é necessário ter em atenção que a uma propriedade ótica,
                        o que significa que valores elevados não correspondem obrigatoriamente a uma baixa qualidade da água, assim como, valores baixos não indicam, necessariamente, uma boa qualidade da água.
                        Daí a importância de se utilizarem avaliarem diversos parâmetros.
                    </p>
                </article>
                <p className="leading-8 w-92 mx-2 md:w-200 md:mx-0 mb-20">
                     No que concerne à turbidez este decreto estabelece critérios para a qualidade das águas de superfície destinadas à proteção da vida aquática e outras utilizações ambientais.
                     No entanto, não especifica valores exatos de turbidez para essas águas, mas sim parâmetros gerais de qualidade que devem ser mantidos para proteger os ecossistemas aquáticos.
                     Os valores de referência para a turbidez em águas superficiais destinadas ao abastecimento humano (após tratamento adequado) são os seguintes são de 1 NTU (Nephelometric Turbidity Units),
                     caso a água seja sujeita a um tratamento físico simples e desinfeção.
                     Este valor pode ir até 25 NTU se a água para consumo humano for sujeita a um tratamento físico e químico intensivo, filtração e desinfeção.
                     Face ao exposto, verifica-se que para a manutenção da qualidade da água dos ecossistemas naturais, este parâmetro deve apresentar-se com os valores mais baixos possíveis.
                </p>
            </section>

            <section className="w-92 mx-2 md:w-200 md:mx-0">
                <h2 className={`${mono.className} text-3xl font-bold py-10`}>Parâmetros Biológicos</h2>
                <article>
                    <p className="leading-8">
                        Os macroinvertebrados aquáticos são uma comunidade-chave nos sistemas fluviais, desempenhando um papel fundamental na cadeia alimentar e no processamento
                        da matéria orgânica de origem vegetal, servindo de ligação entre esta e a ictiofauna (comunidades de peixes). Os macroinvertebrados bentónicos são organismos
                        aquáticos que habitam o fundo de rios, lagos, estuários e zonas costeiras, encontrando-se aderidos a pedras, cascalho e vegetação ou enterrados nos sedimentos durante parte
                        do seu ciclo de vida. Por estarem intimamente associados ao fundo dos cursos de água, desempenham um papel essencial nos ecossistemas, atuando como decompositores, consumidores
                        primários e secundários e constituindo alimento para peixes, aves e anfíbios. Este grupo é constituído pelas fases larvar e adulta de insetos aquáticos,
                        bem como por anelídeos, moluscos e crustáceos, contribuindo de forma significativa para o equilíbrio e funcionamento dos ecossistemas aquáticos.
                    </p>
                </article>

                <article className="flex flex-col md:flex-row gap-5">
                    <div className="w-92 md:w-95">
                        <p className="leading-8">
                            As comunidades de macroinvertebrados são muito utilizados como bioindicadores da qualidade ecológica de ecossistemas lóticos
                            (ribeiras, rios) devido ao facto de apresentarem as seguintes características:
                        </p>

                        <div className="flex flex-col ml-7 gap-2">
                            <li>Padrões de migração limitados;</li>
                            <li>Distribuição global;</li>
                            <li>Dimensões relativamente elevadas, facilitando a sua amostragem e identificação;</li>
                            <li>As suas comunidades incluem taxa com diferentes sensibilidades ao stresse ambiental;</li>
                            <li>São a principal fonte de alimentos de diversos seres vivos;</li>
                            <li>Possuem uma diversidade considerável de regimes tróficos;</li>
                            <li>Necessitam de algum tempo para recolonizar um local pelo que os efeitos de uma perturbação podem ser detetados até várias semanas depois.</li>
                        </div>
                    </div>
                    <Image src="globe.svg" alt="Image" width={380} height={380} className="bg-red-500"/>
                </article>
                <p className="leading-8 mb-20">
                    Existem diversos índices, associados à diversidade de macroinvertebrados, que podem ser calculados na avaliação da qualidade da água de um rio.
                    Neste momento, ainda não determinamos nenhum, pois ainda nos encontramos num processo de aprendizagem relativo às técnicas de amostragem e de
                    análise de macroinvertebrados.
                </p>

            </section>

        </div>
    );
}