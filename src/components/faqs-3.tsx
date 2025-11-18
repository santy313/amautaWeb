'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree({ id }: { id?: string }) {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'clock',
            question: '¿Cuáles son sus horarios de atención?',
            answer: 'Atendemos de lunes a viernes, de 9:00 a 18:00, y ofrecemos consultas online o presenciales según la necesidad del cliente.',
        },
        {
            id: 'item-2',
            icon: 'credit-card',
            question: '¿Qué trámites de extranjería pueden gestionar?',
            answer: 'Gestionamos visas, permisos de residencia y trabajo, nacionalidad y regularización de estatus migratorio para clientes individuales y familias.',
        },
        {
            id: 'item-3',
            icon: 'truck',
            question: '¿Cómo funciona la asesoría para empresas?',
            answer: 'Ofrecemos constitución de empresas, licencias, contratos y planificación legal para negocios, adaptándonos a las necesidades de cada cliente.',
        },
        {
            id: 'item-4',
            icon: 'globe',
            question: '¿Pueden ayudarme con seguros y coberturas?',
            answer: 'Sí, asesoramos en seguros de salud, vida, responsabilidad civil y laboral, tanto para particulares como para empresas.',
        },
        {
            id: 'item-5',
            icon: 'package',
            question: '¿Qué servicios ofrecen a autónomos?',
            answer: 'Gestión de obligaciones fiscales y contables, seguridad social, contratos y optimización tributaria.',
        },
        {
            id: 'item-6',
            icon: 'package',
            question: '¿Cómo puedo programar una cita con un asesor?',
            answer: 'Puedes agendar tu cita directamente por nuestra página web, por correo electrónico o por teléfono.',
        },
    ]









    return (
        <section id={id} className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Preguntas Frecuentes</h2>
                            <p className="text-muted-foreground mt-4">
                                ¿No encuentras lo que buscas? Contáctanos y nuestro equipo de asesores te ayudará personalmente.{' '}
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
