
import Image from 'next/image';
import { PostMetadata } from "./PostMetadata";

const TopNav = () => {
    return <nav className='bg-zinc-900 max-w-screen-xl'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Image src="/icons/icon_small.svg" alt={'Logo'} width={30} height={30}></Image>
            <Image src="/icons/menu.svg" alt="Burger Menu" width={30} height={30} />
        </div>
    </nav >;
}

export default TopNav;