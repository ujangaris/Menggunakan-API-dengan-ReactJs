import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button } from "react-bootstrap"
const Products = () => {
  // data api get all products
  const url = "https://fakestoreapi.com/products"
  //react Hooks
  const [products, setProducts] = useState([])
  const [showMoreId, setShowMoreId] = useState(false)
  //   funcsi untuk mengambil data
  const getDataProducts = async () => {
    // buat response
    const response = await fetch(url)
    // ambil datanya
    const dataProduct = await response.json()
    // masukan data yang kita ambil kedalam state = setState
    setProducts(dataProduct)
    // liat product dalam console
    console.log(products)
  }
  // component lifecycle
  useEffect(() => {
    // jalankan funcsi yang sudah kita buat
    getDataProducts()
  })
  return (
    <div className="container">
      <div className="row">
        <h1> My Products </h1> {/* looping array */}{" "}
        {products.map((product) => (
          <div className="col-md-6 col-sm-6 col-lg-4 mt-5" key={product.id}>
            <CardProduct
              // membuat props
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              showMoreId={showMoreId}
              setShowMoreId={setShowMoreId}
            />{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  )
}

// disini kita memanggil propsnya :props.<keynya>
function CardProduct(props) {
  return (
    // overflow:auto agar tinggi dari cardnya tetap namun content didalamnya akan menyesuaikan dan ada scroll
    <Card
      style={{
        height: "570px",
        overflow: "auto",
      }}
    >
      <Card.Img
        variant="top"
        src={props.image}
        style={{
          width: "200px",
          height: "300px",
          margin: "20px auto",
        }}
      />{" "}
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>{" "}
        {/* substr digunakan untuk membatasi jumlah character huruf yang akan tercetak pada view */}{" "}
        <Card.Text>
          {" "}
          {props.showMoreId === props.id
            ? props.description
            : props.description.substr(0, 50)}
          <Card.Link
            href="#"
            onClick={(e) => {
              // e.preventDefault() digunakan untuk mencegah link mereloard halaman
              e.preventDefault()
              props.setShowMoreId(
                props.showMoreId === props.id ? false : props.id
              )
            }}
          >
            {props.showMoreId === props.id ? "Read Less" : "Read More..."}{" "}
          </Card.Link>
        </Card.Text>{" "}
        <p> {props.price}$ </p> <Button variant="primary"> Add Product </Button>{" "}
      </Card.Body>{" "}
    </Card>
  )
}
export default Products
