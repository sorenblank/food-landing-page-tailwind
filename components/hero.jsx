import Img from './ui/Image';

export default function Hero() {
  return (
    <section className="min-h-[770px] grid items-center relative text-left overflow-hidden z-[1] bg-no-repeat bg-cover bg-center bg-hero">
        <div className="block max-w-[1200px] mx-auto w-full px-[15px]">
            <div>
                <p className="mx-0 text-[32px] text-dark-orange font-shadows-into-light tracking-[1px] mb-[25px]">
                    Eat Sleep And
                </p>
                <h2 className="text-champagne-pink tracking-[-2.5px] text-[70px] max-w-[12ch] mx-0 font-rubik mt-[10px] mb-[10px] font-bold leading-[1.2]">
                    Supper delicious Burger in town!
                </h2>
                <p className="mx-0 text-[18px] text-desert-sand mt-[15px] mb-[30px] max-w-[44ch] font-roboto">
                Food is any substance consumed to provide nutritional support for an organism.
                </p>
                <button className="bg-deep-saffron text-white font-rubik text-[14px] font-500 px-[35px] cursor-pointer h-[45px]">
                    Book a Table
                </button>
            </div>

            <figure className="block absolute max-w-[45%] top-auto bottom-0 right-[50px] translate-y-[0] aspect-[1/0.9]">
                <Img className="scale-[1.4] translate-x-[20px] -translate-y-[20px] w-full h-auto block" src={"hero-banner-bg.png"} width="820" height="716"/> 
            </figure>
        </div>
    </section>
  )
}