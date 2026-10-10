import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

                {/* Left Main Hero Banner (Col-span 8) */}
                <div className="lg:col-span-8 flex flex-col justify-between relative overflow-hidden rounded-xl bg-inverse-surface text-inverse-on-surface shadow-md min-h-115 p-6 sm:p-8 group">

                    {/* Living Graphic Background elements */}
                    <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute right-12 bottom-0 w-80 h-80 bg-tertiary-container/20 rounded-full blur-2xl pointer-events-none"></div>

                    {/* Background Imagery Blend */}
                    <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity overflow-hidden">
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCB7dF6XF2PWyD_lz6iVnC9_zZYOfohlzoTo_tYHWkJ56N392rS46P985OceF0gpaz3w_Kug0lOQobn8eC-aIgeAfyHINa9R80OP5qGFqZWvdQ9QeKPIp3Q5qaRXbZtoHW2wWCr5LVNr1otN95O4QooFOxrRhl6UEGv1lDDO5SHpq6jsEJ8CPrXLP7L2Cjq01nUDWwCkhWcNEkmJ87QoOSKA2iLHPlw2t3ym8lDnk6KjQeyiUTf7odd')` }}
                        ></div>
                        <div className="absolute inset-0 bg-linear-to-r from-inverse-surface via-inverse-surface/80 to-transparent"></div>
                    </div>

                    {/* Top Badge & Spec Tag */}
                    <div className="relative z-10 flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-xs uppercase tracking-wider">
                            <span className="material-symbols-outlined text-[14px] text-tertiary">bolt</span>
                            Flagship Series 2025
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            In Stock &amp; Ready for Dispatch
                        </span>
                    </div>

                    {/* Main Copy & Pricing Highlight */}
                    <div className="relative z-10 max-w-xl my-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-tight font-heading">
                            NEXT-GEN AI GAMING RIGS &amp; RTX 4090 SERIES
                        </h1>
                        <p className="mt-3 text-base text-inverse-on-surface/85 max-w-lg">
                            Unleash unstoppable performance with custom water-cooled prebuilts &amp; 14th Gen Intel Core i9 CPUs. Precision tuned for esports &amp; rendering workloads.
                        </p>
                        <div className="mt-4 flex items-baseline gap-2">
                            <span className="text-xs text-inverse-on-surface/70 uppercase font-medium">Configurations from</span>
                            <span className="text-2xl sm:text-3xl text-tertiary-fixed font-bold">$1,899</span>
                            <span className="text-xs px-2 py-0.5 rounded bg-tertiary-fixed/20 text-tertiary-fixed font-semibold">(Save up to $350)</span>
                        </div>
                    </div>

                    {/* Carousel Navigation & Action Row (Using shadcn Button) */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3">
                            <Button asChild className="bg-primary text-primary-foreground font-bold text-sm shadow-md hover:bg-primary/90">
                                <Link href="#">
                                    <span>Explore Builds</span>
                                    <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm font-semibold text-sm">
                                <Link href="#">
                                    <span className="material-symbols-outlined text-[18px] mr-1">tune</span>
                                    <span>Configure Now</span>
                                </Link>
                            </Button>
                        </div>

                        {/* Carousel Mini Navigation Pills */}
                        <div className="hidden sm:flex items-center gap-1">
                            <button type="button" className="px-3 py-1.5 rounded-lg bg-white/20 text-white text-xs font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
                                <span>Rig Series</span>
                            </button>
                            <button type="button" className="px-3 py-1.5 rounded-lg hover:bg-white/10 text-white/60 text-xs transition-colors">
                                OLED Displays
                            </button>
                            <button type="button" className="px-3 py-1.5 rounded-lg hover:bg-white/10 text-white/60 text-xs transition-colors">
                                MacBook M3 Max
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side Dual Promo Banners (Col-span 4) */}
                <div className="lg:col-span-4 flex flex-col gap-4">

                    {/* Promo Card 1: ROG QD-OLED */}
                    <div className="flex-1 bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group border border-border">
                        <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container text-on-error-container font-bold text-[11px] uppercase">
                                    <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                                    Only 4 Left in Stock
                                </span>
                                <span className="text-xs font-bold text-primary">Save $200</span>
                            </div>
                            <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors font-heading">
                                ASUS ROG Swift 32&quot; 4K QD-OLED 240Hz
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                0.03ms GTG response time, Dolby Vision HDR, custom heatsink design, G-Sync compatible.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 flex items-end justify-between border-t border-border">
                            <div>
                                <span className="block text-muted-foreground text-xs line-through">$1,399 MSRP</span>
                                <span className="text-xl font-extrabold text-foreground leading-none">$1,199.00</span>
                            </div>
                            <Button asChild className="bg-tertiary text-on-tertiary font-bold text-xs hover:bg-tertiary/90">
                                <Link href="#">
                                    <span>Grab Deal</span>
                                    <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Promo Card 2: PC BUILDER BONUS */}
                    <div className="flex-1 bg-linear-to-br from-primary-container to-primary text-primary-foreground rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none"></div>
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold text-[11px] uppercase mb-2">
                                <span className="material-symbols-outlined text-[14px]">build</span>
                                Signature Service
                            </div>
                            <h3 className="text-lg font-bold text-white leading-snug font-heading">
                                CUSTOM PC BUILDER BONUS
                            </h3>
                            <p className="text-sm text-white/80 mt-1">
                                Complimentary 3-Year Assembly Labor, 48-Hour Burn-In Stress Test, and lifetime technician cable-routing warranty.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 flex items-center justify-between border-t border-white/20">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[24px] text-tertiary-fixed">verified</span>
                                <span className="text-xs text-white font-semibold">100% Tested Rig Delivery</span>
                            </div>
                            <Button asChild variant="secondary" className="bg-card text-primary font-bold text-xs hover:bg-card/90">
                                <Link href="#">Start Build</Link>
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}