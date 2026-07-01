import Image from "next/image"

type EventInfo = {
  name: string
  date: string
  image: string
}


type Props = {
  Event?: EventInfo[]
  Width?: string
}

export default function EventSection({Event = [], Width}: Props) {
  return (
    <section className="py-6">

      <div className="mx-auto max-w-5xl">
        <div
          className={`
            flex
            ${Width}
            gap-6 
            overflow-x-auto
            snap-x
            snap-mandatory
            pb-4
            scrollbar-thin
            scrollbar-thumb-zinc-700
          `}
        >
          {Event.map((event) => (
            <div
              key={event.name}
              className={`
                flex
                flex-col
                min-w-[240px]
                max-w-[240px]
                snap-start
                overflow-hidden
                transition
                duration-300
                border
                rounded
                border-2
                border-(--border-whitemode)
                dark:border-(--border)
                items-center
              `}
            >
              <div className="relative">
                <Image
                  src={event.image}
                  alt={event.name}
                  width={200}
                  height={200}
                  className="object-cover mt-3 mb-3"
                />
              </div>

              <div className="pt-2">
                <h3 className="text-lg">
                  {event.name}
                </h3>

                <p className="text-sm mb-2 ">
                  {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}