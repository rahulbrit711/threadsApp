'use client'

import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const Bottombar = (props: Props) => {
    const router = useRouter();
    const pathName = usePathname();

    return (
        <section className='bottombar'>
            <div className='bottombar_container '>
                {sidebarLinks.map((link) => {
                    const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route
                    return (
                        <Link className={`bottombar_link ${isActive ? 'bg-primary-500' : ''}`} href={link.route} key={link.label}>
                            <Image src={link.imgURL} alt={link.label} height={24} width={24} />
                            <p className='text-light-1 text-subtle-medium max-sm:hidden'>{link.label.split(/\s+/)[0]}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Bottombar