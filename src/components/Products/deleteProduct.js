import axios from "axios";


const DeleteProduct = (id) => {

    axios
        .delete(
            `http://localhost:3000/products/${id}`,

            {
                headers: {
                    Authorization: localStorage.getItem("accessToken"),
                },
            }
        )
        .then((res) => {
            if (res.status === 200) {
                window.location.reload();
                alert("Product deleted successfully")
            }
        });

}

export default DeleteProduct;