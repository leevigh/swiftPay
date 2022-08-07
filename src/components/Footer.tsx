import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'

export function Footer() {
    return (
        <footer className="px-5 bg-stone-800 text-white md:flex justify-between items-start md:h-96 md:mt-5 md:px-24 py-5">
            <div className="py-4 mr-4">
                <div className="font-bold mb-3 text-lg">Veggies</div>
                <p>
                    Providing you with the freshest fruits and vegetables in the country!
                </p>

                <div className="flex justify-start mt-3">
                    <div className='mr-5 text-xl'><BsTwitter /></div>
                    <div className='mr-5 text-xl'><BsInstagram /></div>
                    <div className='mr-5 text-xl'><BsFacebook /></div>
                </div>
            </div>

            <div className="py-4">
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="py-4">
                <div className='flex items-center ml-4'>
                    <span className='mr-2'>
                        <HiOutlineLocationMarker />
                    </span>
                    123 Farmer street, Farmtopia TSA.
                </div>
                <div className='flex items-center ml-4'>
                    <span className='mr-2'>
                        <HiOutlinePhone />
                    </span>
                    +2348084599967
                </div>
                <div className='flex items-center ml-4'>
                    <span className='mr-2'>
                        <HiOutlineMail />
                    </span>
                    info@veggies.com
                </div>
            </div>
        </footer>
    )
}