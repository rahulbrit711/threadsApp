'use client'

import React from 'react'
import { sidebarLinks } from "@/constants";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SignOutButton, SignedIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
type Props = {}

const LeftSiderbar = (props: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='flex w-full flex-1 flex-col gap-6 px-6'>
        {sidebarLinks.map((link) => {
          const isActive = (pathName.includes(link.route) && link.route.length > 1) || pathName === link.route
          return (
            <Link className={`leftsidebar_link ${isActive ? 'bg-primary-500' : ''}`} href={link.route} key={link.label}>
              <Image src={link.imgURL} alt={link.label} height={24} width={24} />
              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          )
        })}
      </div>
      <div className='mt-10 px-6'>
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push('/sign-in')}>
            <div className='flex cursor-pointer'>
              <Image src='/assets/logout.svg' alt="logout" width={24} height={24} />
              <p className='text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftSiderbar