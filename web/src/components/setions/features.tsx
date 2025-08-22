'use client'

import { Activity, Map as MapIcon, MessageCircle, Zap, Link2, Shield, Code } from 'lucide-react'
import DottedMap from 'dotted-map'

export default function Features() {
    return (
        <section className="px-4 py-16 md:py-32 bg-transparent w-screen flex flex-col items-center">
            {/* Hero Section */}
            <div className="w-full max-w-5xl px-4 mb-12 md:mb-16 text-center">
                <h1 className='text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-lime-300 to-emerald-500'>
                    The Future of Off-Chain Transactions
                </h1>
                <p className="mt-6 text-sm text-lime-50/80 max-w-3xl mx-auto">
                    Zypp Protocol - The first DropFi solution on Solana enabling secure offline transactions of both on-chain and off-chain assets.
                </p>
            </div>
            
            {/* Features Grid */}
            <div className="mx-auto grid max-w-5xl border border-lime-900/50 rounded-t-xl overflow-hidden md:grid-cols-2 bg-gradient-to-br from-[#0d1400] to-black">
                {/* Offline Transactions Feature */}
                <div className="p-6 sm:p-12 border-b border-lime-900/50 md:border-b-0 md:border-r">
                    <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-lime-900/20 border border-lime-800/50">
                            <Zap className="size-5 text-lime-300" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-lime-300">Offline Mode</h3>
                            <p className="mt-2 text-lime-50/80">
                                Execute transactions without internet. Zypp's breakthrough protocol syncs when back online.
                            </p>
                        </div>
                    </div>
                    
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                         <div className="mt-8 relative h-64 overflow-hidden">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-lg bg-lime-950/80 z-10 relative flex size-fit w-fit items-center gap-2 border border-lime-800/50 px-3 py-1 text-xs font-medium shadow-md shadow-lime-900/20">
                                <span className="text-lg">🇨🇩</span> 5 SOL droppedin your Zypp Vault
                            </div>
                        </div>
                        <div className="relative overflow-hidden h-full">
                            <div className="bg-radial z-1 to-[#080d00] absolute inset-0 from-transparent to-75%"></div>
                            <Map />
                        </div>
                    </div>
                </div>

                {/* Cross-Chain Asset Support */}
                <div className="p-6 sm:p-12">
                    <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-lime-900/20 border border-lime-800/50">
                            <Link2 className="size-5 text-lime-300" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-lime-300">Multi-Asset Support</h3>
                            <p className="mt-2 text-lime-50/80">
                                Trade both on-chain tokens and off-chain assets with the same protocol.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-4">
                        {['SOL', 'NFT', 'BTC', 'USD', 'RWA', '...'].map((asset) => (
                            <div key={asset} className="p-3 rounded-lg bg-lime-950/30 border border-lime-800/30 text-center">
                                <span className="font-mono text-lime-300">{asset}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Assurance */}
                <div className="col-span-full p-6 sm:p-12 border-t border-lime-900/50 bg-gradient-to-r from-[#0d1400] to-[#071000]">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-lime-900/20 border border-lime-800/50">
                                <Shield className="size-5 text-lime-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-lime-300">Military-Grade Security</h3>
                                <p className="mt-2 text-lime-50/80">
                                    Even offline, your transactions are protected by Solana's cryptographic security and our proprietary protocols.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            {[
                                'End-to-end encryption',
                                'Non-custodial',
                                'ZK Proofs',
                                'Multi-sig',
                                'Biometric Auth'
                            ].map((feature) => (
                                <div key={feature} className="px-4 py-2 rounded-full bg-lime-900/10 border border-lime-800/30">
                                    <span className="text-sm text-lime-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Uptime and Performance */}
                <div className="col-span-full border-t border-lime-900/50 p-12 bg-[#071000]">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-4xl font-bold text-lime-300 lg:text-6xl mb-6">
                            99.99% Successful Transactions
                        </p>
                        <p className="text-lime-300/80 max-w-2xl mx-auto">
                            Whether online or offline, Zypp guarantees transaction integrity with our revolutionary DropFi protocol.
                        </p>
                    </div>
                </div>

                {/* Developer Experience */}
                <div className="relative col-span-full border-t border-lime-900/50 bg-gradient-to-br from-[#0d1400] to-[#071000]">
                    <div className="absolute z-10 w-full max-w-2xl px-6 pt-12 md:px-12">
                        <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-lime-900/20 border border-lime-800/50">
                                <Code className="size-5 text-lime-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-lime-300">Developer First SDK</h3>
                                <p className="mt-2 text-lime-50/80">
                                    Build DropFi applications in minutes with our TypeScript SDK. Offline-first by design.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    <div className="px-3 py-1.5 rounded-md bg-lime-900/30 border border-lime-800/50">
                                        <span className="font-mono text-sm text-lime-300">npm install @zypp/sdk</span>
                                    </div>
                                    <div className="px-3 py-1.5 rounded-md bg-lime-900/30 border border-lime-800/50">
                                        <span className="font-mono text-sm text-lime-300">100% TypeScript</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })
const points = map.getPoints()

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg
            viewBox={viewBox}
            style={{ background: '#0d1400', height: '100%', width: '100%' }}>
            {points.map((point, index) => (
                <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r={0.15}
                    fill="#b7ff02"
                />
            ))}
        </svg>
    )
}