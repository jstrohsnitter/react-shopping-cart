import { inventoryData } from "../../data/data";
import InventoryList from "../InventoryList/InventoryList"
import { useState } from 'react';
import styles from './Shop.module.scss'
import { cxbind } from '../../utils/cx'
import type { Item } from "../../data/data";

const cx = cxbind(styles);

const Shop = () => {

  const [shopInventory, setShopInventory] = useState<Item[]>(inventoryData);
  const [userInventory, setUserInventory] = useState<Item[]>([])

  const handleAddItem = (item: Item) => {
    setUserInventory([...userInventory, item])
    setShopInventory(shopInventory.filter((el) => el._id !== item._id))
  };

  const handleRemoveItem = (item: Item) => {
  setShopInventory([...shopInventory, item]);
  setUserInventory(userInventory.filter((el) => el._id !== item._id));
};

const calculateSubTotal = (inventory: Item[]): number => {
    let subTotal: number = 0;
    const prices = inventory.map(item => item.price)
    prices.forEach(item => {
        subTotal += item
    })
    return subTotal
  }

  //now that I have the subtotal, i need to pass it the User Inventory


  return (
    <main>
      <h1>Shop</h1>
      <section className={cx('shop-section')}>
      <InventoryList 
        title="Shop Inventory" 
        inventory={shopInventory}
        handleAddItem = {handleAddItem} 
        />
      <InventoryList 
        title="User Inventory" 
        inventory={userInventory} 
        handleRemoveItem = {handleRemoveItem}
        calculateSubTotal = {calculateSubTotal}
        />
      </section>
    </main>
  );
};

export default Shop;