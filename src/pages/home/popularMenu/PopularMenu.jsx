import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../../shared/footer/MenuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu";


const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section>
            <SectionTitle
            subHeading={"Check it Out"}
            heading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {
                   popular.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;