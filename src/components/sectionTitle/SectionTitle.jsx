

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="my-14 md:w-4/12 mx-auto">
            <p className='text-yellow-600 text-xl text-center mb-3'>--- {subHeading} ---</p>
            <h3 className="text-center text-4xl uppercase border-y-4 p-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;