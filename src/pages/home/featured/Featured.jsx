import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <section className="featured-item bg-fixed text-white pt-8 my-20 ">
            <SectionTitle
            subHeading={"Check it Out"}
            heading={"From Our Menu"}
            ></SectionTitle>
            <div className="md:flex justify-center  bg-opacity-60 bg-slate-400 items-center py-20 px-40 space-x-4 ">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div>
                    <p>Aug 20,2028</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium eaque neque nulla aperiam, nisi provident atque cumque eos perferendis officia error rem necessitatibus quasi exercitationem dolores quibusdam ad, vel maxime molestias est magnam. Voluptatem in accusantium, ullam pariatur veniam quasi? Debitis unde fugit doloremque quae dicta soluta est amet.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now!</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;