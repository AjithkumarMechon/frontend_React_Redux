import React, { useEffect, useState } from "react";

function Product({ actions, productsData }) {
  const [formData, setFormData] = useState({
    name: "",
    details: [
      {
        quantity: "",
        price: "",
      },
    ],
  });
  useEffect(() => {
    actions.fetchData();
  }, [actions]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      details: [
        {
          ...prevFormData.details[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleClick = (i) => {
    actions.fetchSelectedData(i);
  };

  const handleDelete = (i) => {
    actions.deleteProduct(i);
    actions.fetchData();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.sendPostProduct(formData);
    setFormData({
      name: "",
      details: [
        {
          quantity: "",
          price: "",
        },
      ],
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              name="price"
              placeholder="Price"
              type="number"
              value={formData.details[0].price}
              onChange={(e) => handleDetailChange(e)}
            />
            <input
              name="quantity"
              placeholder="Quantity"
              type="number"
              value={formData.details[0].quantity}
              onChange={(e) => handleDetailChange(e)}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
      <div>
        {productsData.map((item, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <div
              onClick={() => handleClick(item.referenceId)}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <p>Name: {item.name}</p>
              {item.details.map((it, j) => (
                <div key={j} style={{ display: "flex" }}>
                  <p>Price: {it.price}</p>
                  <p>Quantity: {it.quantity}</p>
                </div>
              ))}
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => handleDelete(item.referenceId)}
              >
                Delete
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
