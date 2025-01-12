

const MenuItem = ({item}) => {
    const {image,price,recipe,name} =item;
    return (
        <div className="flex space-x-4 my-5">
            <div>
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            </div>
            <div>
                <h2 className="uppercase">{name}</h2>
                <p>{recipe}</p>

            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;