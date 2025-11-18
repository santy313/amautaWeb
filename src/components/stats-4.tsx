
export default function StatsSection({ id }: { id?: string }) {
    return (
        <section id={id} className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Asesoría Amauta</h2>
                    <p>
                        soluciones integrales para personas  <span className="font-medium">autonomos</span> y empresas.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p>Nuestra asesoría acompaña a clientes en diferentes trámites para poder cumplimentar con sus objetivos legales y administrativos de forma segura y eficiente.</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+1200</div>
                                <p>Trámites gestionados con éxito</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+500</div>
                                <p>Clientes satisfechos
</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>“Trabajar con Asesoría Amauta nos dio tranquilidad y seguridad en todos nuestros procesos legales y administrativos. Su equipo es profesional, ágil y confiable.”</p>

                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">— Juan Pérez, CEO de Amauta</cite>                                
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
