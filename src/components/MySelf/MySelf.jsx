import Special from "../Special/Special";


const MySelf = ({asset}) => {
    return (
        <div className="">
            <h2>MySelf</h2>
            <section>
             <Special asset={asset}></Special>
            </section>
         
        </div>
    );
};

export default MySelf;