import Special from "../Special/Special";

import Friend from "../Friend/Friend";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name === 'Rubiya' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;