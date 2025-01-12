import { Link } from "react-router-dom";
import Cover from "../../../shared/cover/Cover";
import MenuItem from "../../../shared/footer/MenuItem/MenuItem";

const MenuCategory = ({ items,title,img }) => {
  return (
    <div>
      {title && <Cover img={img } title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to='/order'><button className=" mt-0 mb-10 btn btn-outline border-0 border-b-4">Order Now!</button></Link>
    </div>
  );
};

export default MenuCategory;
