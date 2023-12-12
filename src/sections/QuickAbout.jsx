import { Link } from 'react-router-dom'
import {SideBannerTwo} from '../assets/images'

const QuickAbout = () => {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center lg:flex-row-reverse gap-9">

    <div>
      <img src={SideBannerTwo} 
      alt="quick-about" 
      className="w-full h-auto rounded-lg" />
    </div>

    <div className='text-lg font-montserrat mt-5 lg:mt-0'>
      <div className="flex flex-col w-full h-auto justify-center items-center lg:items-start">
        <h1 className="text-3xl font-bold text-center lg:text-left py-4 text-gray-600">
        Shop with Ease and Confidence
        </h1>
        <p className="text-lg text-left font-poppins text-slate-gray py-2">
        Shopping at Fashionary is easy and convenient. Simply browse our selection of products and add your favorites to your cart. Once you're ready to checkout, you can create an account or checkout as a guest. We accept all major credit cards and PayPal. We also offer a variety of shipping options to get your order to you quickly and safely.
        </p>
        <p className="text-lg text-left font-poppins text-slate-gray py-4">
        We invite you to join our vibrant community of fashion enthusiasts. Follow us on social media for the latest trends, style inspiration, and exclusive offers. We also love to hear from our customers, so feel free to share your feedback and suggestions.
        </p>
        <p className="text-2xl text-center lg:text-left font-poppins font-semibold leading-normal py-2 text-gray-600">
        Happy Shopping!</p>
        <p className="text-lg text-left font-poppins text-slate-gray">
        We hope you enjoy shopping at Fashionary. We're confident that you'll find the perfect pieces to express your unique style.
        </p>
         <p className="text-xl text-center lg:text-left font-poppins text-slate-gray py-4">
        Thank you for choosing Fashionary!❤️
        </p>
        <Link to={`/about`}
        className="font-poppins text-lg py-2 px-4 rounded-lg text-black leading-normal bg-lite-secondary"
        >More</Link>
      </div>
    </div>

    </div>
  )
}

export default QuickAbout
