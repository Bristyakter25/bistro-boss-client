import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert items */}
      <MenuCategory
        items={desserts}
        title={"Dessert"}
        img={dessertImg}
      ></MenuCategory>
      {/* pizza items */}
      <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
      {/* salad items */}
      <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>
      {/* soup items */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
