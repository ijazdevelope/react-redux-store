import { useSelector } from 'react-redux';
import Iphone from '../images/iphone.png';
import './home.css';

const Home = (props) => {
    const state = useSelector(state => state.cardItems.cardData.length);
    console.log(props, 'props');

    return (
        <div className="product__wrapper">
            <div>
                <a href='#' className="product__wrapper__minicart__link">
                    <i className="minicart-icon fa fa-shopping-cart product__wrapper__cart"></i>
                    <span className="product__wrapper__quantity">{state}</span>
                </a>
            </div>
            <div>
                <img className="product__wrapper__img" src={Iphone} alt="product-img" />
            </div>
            <div className="product__wrapper__price">
                <span className="product__wrapper__product-name">Iphone</span>
                <span>price: $500.00</span>
            </div>
            <div>
                <button
                onClick={ () => props.addToCartHandler({price: 100, name: 'Iphone 10 pro'})}
                className="product__wrapper__add-to-cart-btn"
                >Add to Cart</button>
                 <button
                onClick={ () => props.removeToCartHandler()}
                className="product__wrapper__add-to-cart-btn product__wrapper__add-to-cart-btn--clr"
                >remove to Cart</button>
            </div>
        </div>
    )
}

export default Home;