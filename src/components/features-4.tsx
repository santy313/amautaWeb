import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features({ id }: { id?: string }) {
    return (
        <section id={id} className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Servicios que ofrece Asesoria Amauta</h2>
                    <p>Estrategias adaptadas a cada cliente para cumplir objetivos legales y empresariales una tención directa y seguimiento personalizado de cada trámite.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Trámites de Extranjería</h3>
                        </div>
                        <p className="text-sm">Asesoramiento completo para visas, residencias y nacionalidad y gestión de permisos de trabajo y regularización de estatus migratorio.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Asesoría Laboral</h3>
                        </div>
                        <p className="text-sm">Contratos, nóminas y derechos laborales para empresas y autónomos y orientación sobre despidos, reclamaciones y convenios colectivos.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />

                            <h3 className="text-sm font-medium">Asesoría Jurídica</h3>
                        </div>
                        <p className="text-sm">Soporte legal en litigios, documentación y procedimientos judiciales, representación y orientación en casos civiles y administrativos.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Gestión para Empresas</h3>
                        </div>
                        <p className="text-sm">onstitución, registros, licencias y cumplimiento normativo, Planificación y asesoría en expansión y contratos comerciales.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />

                            <h3 className="text-sm font-medium">Seguros y Coberturas</h3>
                        </div>
                        <p className="text-sm">Selección y gestión de seguros para personas y empresas, Asesoramiento en seguros de salud, vida, responsabilidad civil y laboral.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">Asesoría para Autónomos</h3>
                        </div>
                        <p className="text-sm">Trámites fiscales, contables y de seguridad social y una optimización de obligaciones legales y tributarias.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
