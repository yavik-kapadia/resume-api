'use client';
import { Logo } from '@/components/logo';
import { CardsGenerator } from '@/components/cards_generator';

export function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        
            <h1 className="text-6xl font-bold">Hello World</h1>
            <Logo width={400} height={400} />
            <div>
            <h3 className="text-6xl font-bold">Education</h3>
            <CardsGenerator />
            </div>
        </div>
    )

}

export default Page