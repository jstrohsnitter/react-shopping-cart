import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import { describe, it, expect} from 'vitest'
import Shop from '../src/components/Shop/Shop'
import { inventoryData } from "/Users/macbook/code/ga/lectures/react-shopping-cart/tests/Shop.test.tsx";

describe('<Shop/>', () => {
    it('renders both inventory lists', () => {
        render(<Shop/>)
        expect(screen.getByText('Shop Inventory')).toBeInTheDocument()
        expect(screen.getByText('User Inventory')).toBeInTheDocument()
    })

    it('renders all items from inventoryData into the Shop Inventory section', () => {
    render(<Shop />);

    // inventoryData.forEach(item => {
    //   expect(screen.getByText(item.name)).toBeInTheDocument();
    // });
  });
})