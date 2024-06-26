'use client';

import { useRouter } from 'next/navigation'
import React from 'react'

const AboutPage = () => {
    const router = useRouter();
    return (
        <main className='AboutPage'>
            <div className="container">
            <h1 className='text-4xl mb-6'>About Page</h1>
            <h2 className='text-3xl mb-4'>This is for testing navigation topic only</h2>
            <button onClick={() => {
                console.log('clicked')
                // .push() will save a history
                // .replace() doesn't save history
                // .refresh() will just refresh the page
                // .back() will go back to the previous page
                // .forward() will go to the next page
                router.replace('/');
            }}>Go to Home Page</button>
            </div>
        </main>
    )
}

export default AboutPage