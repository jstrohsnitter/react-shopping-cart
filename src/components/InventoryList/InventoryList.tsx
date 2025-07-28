import type { Item } from "../../data/data";
import styles from './InventoryList.module.scss'
import { cxbind } from '../../utils/cx'

const cx = cxbind(styles);

type Props = {
    // _id: number; **Don't have to define these here because they are already defined in Item type which is imported
    // name: string;
    // price: number;
    inventory: Item[]; //this inventory here is the 'key' prop passed down from Shop
    title: string;
    handleAddItem?: (item: Item) => void; //the ? here is cruicial, making it an optional prop, because the user inventory won't use it
    handleRemoveItem?: (item: Item) => void;
    calculateSubTotal?: (inventory: Item[]) => number;
};


const InventoryList = ({inventory, title, handleAddItem, handleRemoveItem, calculateSubTotal}: Props) => {

    return (
        <div className={cx('inventory-list')}>
            <h2>{title}</h2>
            {calculateSubTotal ? (<p> Sub Total: {calculateSubTotal(inventory)}</p>) : ('')}
            <ul>
                {inventory.map((item) => (
                    <li key={item._id}>
                        <p>{item.name}</p>
                        <p>Price: {item.price}</p>
                        {handleAddItem ? ( <button onClick={() => handleAddItem(item)}>Add Item</button>) : (<button onClick={() => handleRemoveItem(item)}>Remove Item</button>)}
                    </li>
                ))}
            </ul>
        </div>    
    );
};

export default InventoryList;