import './ProductDetails.css'

const ProductDetails = () =>{
    return <div className="card">
        <header>
        Flipkart
        </header>
        <div  className="container">
        <h2>Product Name</h2>
        <img src="https://rukminim1.flixcart.com/image/832/832/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70" alt=""></img>
        <p>
        <h3>Product Title</h3>
        <h1>Product Price</h1>
        <h5>size </h5>
        <h4>product Offers</h4>
        <h4>Offer 1</h4>
        <h4>Offer 2</h4>
        <h4>Offer 3</h4>
        <h4>Offer 4</h4>
        <h4>pin code</h4>
        <input type="number" placeholder="check availability"></input>
        <h2>Product details</h2>
        <h2> Rating and Reviews</h2>
        </p>
        </div>
    </div>
}

export default ProductDetails