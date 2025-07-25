import { inventoryData } from "../../data/data";

const Shop = () => {

    console.log('Inventory Data:', inventoryData);

  return (
    <main>
      <h1>Shop</h1>
      <ul>
        {inventoryData.map((item) => (
            <li key={item._id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
            </li>
        ))}
      </ul>
    </main>
  );
};

export default Shop;