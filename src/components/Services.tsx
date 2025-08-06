import { SERVICES_ITEMS } from "@/constants";
import { MagicCard } from "./ui/magic-card";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
function Services() {

    return (
        <>
            <span id="services"></span>
            <section className="py-14 px-10"  >

                <div className="mx-auto  ml-20 text-2xl font-bold tracking-tight md:text-5xl text-white">
                    ¿Cómo puedo ayudarte
                    <PointerHighlight
                        rectangleClassName="bg-green-900 "
                        pointerClassName="text-yellow-500"
                    >
                        <span className="relative z-10 text-white">Con tus problemas de software?</span>
                    </PointerHighlight>
                </div>

                <div className="w-full flex justify-center">

                    <div className=" w-6xl place-content-center justify-center grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 mt-8 text-white p-2 ">
                        {SERVICES_ITEMS.map((service) => (
                            <MagicCard key={service.number} className="mb-4 rounded-lg  ">

                                <div className="px-6 py-7">

                                    <div className="text-4xl text-neutral-400">{service.icon}</div>
                                    <h3 className="text-xl font-semibold tracking-wider  ">{service.name}</h3>


                                    <p className="text-neutral-500 leading-relaxed line-clamp-3">{service.description}</p>
                                </div>

                            </MagicCard>
                        ))}
                    </div>
                </div>




            </section >
        </>


    )
}

export default Services