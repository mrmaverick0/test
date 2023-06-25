import { NavLink } from "react-router-dom/cjs/react-router-dom"

const Product=()=>{
    return <section>
    <h1>The Product Page</h1>
    <ul>
        <li><NavLink to='/product-details'>Product 1</NavLink></li>
        <li>product2</li>
        <li>product3</li>
    </ul>
    </section>
}
export default Product