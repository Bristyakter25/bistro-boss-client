import React from 'react';

const FoodCard = ({item}) => {
    const {image,price,recipe,name} =item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl ">
  <figure>
    <img
      src={image}
      alt="food" />
  </figure>
  <p className='bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-3'>${price}</p>
  <div className="card-body">
    <h2 className="text-2xl font-semibold text-center">{name}</h2>
    
    <p className='text-center'>{recipe}</p>
    <div className="card-actions justify-end flex flex-col items-center">
      <button className="mt-0 mb-10 bg-slate-200 btn border-orange-400 btn-outline border-0 border-b-4">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;