import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Image from 'next/image'


export default function HeroSection({ id }: { id?: string }) {
    return (
        <>
            <HeroHeader />
            <main id={id} className="overflow-x-hidden">
                <section>
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">ASESORIA AMAUTA</h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg">Asesoría integral en extranjería, laboral y judicial, ofreciendo soluciones legales y administrativas confiables para personas y empresas.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base">
                                        <Link
                                            href="https://wa.me/34627013764?text=Hola,%20quisiera%20más%20información%20sobre%20asesoría%20en%20extranjería,%20laboral%20y%20judicial.">
                                            <span className="text-nowrap">+Info. WhatsApp</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                        <Link href="tel:+34627013764">
                                            <span className="text-nowrap">Llamanos ahora!</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">


                            <Image
                                src="/equipoAmauta/fotoPrincipalamauta.jpg"
                                alt="Asesoria amauta"
                                width={0}      // obligatorio, pero se puede ignorar con sizes
                                height={0}
                                sizes="100vw"
                                style={{ width: 'auto', height: '1000px' }}
                                className="
                                mx-auto 
                                object-cover
                                opacity-20
                                dark:opacity-10
                                dark:lg:opacity-10"
                            />
                            
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Trabajamos para ayudar</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-5 w-fit"
                                            src="/flags/ecuador.svg"
                                            alt="Ecuador"
                                            width={20}
                                            height={20}
                                        />
                                    </div>

                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-4 w-fit "
                                            src="/flags/peru.svg"
                                            alt="Peru"
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-4 w-fit "
                                            src="/flags/Bolivia.svg"
                                            alt="Bolivia"
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-5 w-fit "
                                            src="/flags/Africa.svg"
                                            alt="Africa"
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                    <div className="flex">
                                        <Image
                                            className="mx-auto h-5 w-fit"
                                            src="/flags/Mexico.svg"
                                            alt="Mexico"
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
