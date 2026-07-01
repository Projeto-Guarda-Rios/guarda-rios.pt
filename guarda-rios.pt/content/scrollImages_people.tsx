import Image from "next/image"

type TeamMember = {
  name: string
  role: string
  image: string
}


type Props = {
  team?: TeamMember[]
}

export default function TeamSection({team = []}: Props) {
  return (
    <section className="py-6">

      <div className="mx-auto max-w-5xl">
        <div
          className="
            flex
            gap-6 
            overflow-x-auto
            snap-x
            snap-mandatory
            pb-4
            scrollbar-thin
            scrollbar-thumb-zinc-700
          "
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="
                min-w-[100px]
                max-w-[100px]
                snap-start
                overflow-hidden
                transition
                duration-300
              "
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={200}
                  className="object-cover bg-red-500"
                />
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="mt-1 text-cyan-500 font-bold">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}