type TerminalLine = {
  text: string
  highlight?: string   // palavra a ficar a verde
}
 
type TerminalProps = {
  filename?: string     // nome do ficheiro na barra (ex: "about.sh")
  lines: TerminalLine[] // as linhas de texto
  classname?: string
  height?: string
  text_size?: string
  text_color?: string
  top_layer?: string
  bottom_layer?: string
}
 
export default function Terminal({ filename = "terminal", lines, classname, height = "auto", text_size = "text-sm", text_color = "text-(--text2)" }: TerminalProps) {
  return (
    <div className={`bg-(--background-console) border border-(--border) rounded-lg ${classname}`}>
 
      {/* Barra de topo */}
      <div className="bg-(--background-console) border border-(--border) rounded-t-lg px-4 py-2 flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-(--text3)">{filename}</span>
      </div>
 
      {/* Linhas */}
      <div className={`p-7 flex flex-col gap-1 bg-(--background-top) ${height} justify-center`}>
        {lines.map((line, i) => (
          <div key={i} className={`font-mono ${text_size} ${text_color} flex gap-3`}>
            <span className="text-(--green) select-none">$</span>
            <span>
              {line.highlight
                ? renderWithHighlight(line.text, line.highlight)
                : line.text}
            </span>
          </div>
        ))}
      </div>
 
    </div>
  )
}
 
// Coloca a verde a palavra definida em highlight
function renderWithHighlight(text: string, highlight: string) {
  const parts = text.split(highlight)
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <strong className="text-(--white) font-bold">{highlight}</strong>
      )}
    </span>
  ))
}
