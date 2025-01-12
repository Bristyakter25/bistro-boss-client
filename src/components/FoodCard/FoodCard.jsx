import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';

const FoodCard = ({item}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();

  const handleAddToCart = food =>{
   if (user && user.email){
    console.log(user.email,food);
    const cartItem = {
      menuId: _id,
      email: user.email,
      name,
      image,
      price
    }
    axiosSecure.post('/carts',cartItem)
    .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Food Is on the Cart",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })


   }
   else{
    Swal.fire({
      title: "You are not LoggedIn!",
      text: "Please log in to order food?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, LogIn"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login',{ state:{from: location}});
      }
    });
   }
  }
    const {image,price,recipe,name,_id} =item;
    const {user} = useContext(AuthContext);
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
      <button onClick={()=>{handleAddToCart(item)}} className="mt-0 mb-10 bg-slate-200 btn border-orange-400 btn-outline border-0 border-b-4">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;