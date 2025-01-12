import { useState } from "react";
import orderBanner from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../../hooks/UseMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
const Order = () => {
    const [menu] = UseMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  

    const [tabIndex, setTabIndex] =useState(0);
  return (
    <div>
      <Cover img={orderBanner} title={"Order Food"}></Cover>
      <Tabs className='mt-10 ' defaultIndex={tabIndex} onSelect={(index) => console.log(setTabIndex)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <div className="md:grid grid-cols-3 gap-3">
                {
                    salad.map(item => <FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="md:grid grid-cols-3 gap-3">
                {
                    pizza.map(item => <FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="md:grid grid-cols-3 gap-3">
                {
                    soup.map(item => <FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="md:grid grid-cols-3 gap-3">
                {
                    desserts.map(item => <FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </TabPanel>
        <TabPanel>
        
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
