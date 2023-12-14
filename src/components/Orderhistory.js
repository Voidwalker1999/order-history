import React, { useState } from 'react';
import './Orderhistory.css';

export default function Orderhistory() {
    const [ongoingOrdersOpen, setOngoingOrdersOpen] = useState(true);

    const toggleOngoingOrders = () => {
        setOngoingOrdersOpen(!ongoingOrdersOpen);
    };

    return (
        <div className="order-history">
            <h1>Order Management</h1>
            <div className="order-history-container">
                <div className="order-history-section">
                    <h2 onClick={toggleOngoingOrders} style={{ backgroundColor: 'red' }}>Ongoing Orders</h2>
                    {ongoingOrdersOpen && (
                        <div className="order-history-item">
                            <div className="order-history-item-header">
                                <h4>Order date: 12/12/2020</h4>
                            </div>
                            <div className="order-history-item-body">
                                <div className="order-history-item-body-left">
                                    <p>Order ID: 123456</p>
                                    <img src="product-image.jpg" alt="Product Image" />
                                    <p>Product #1</p>
                                    <p>Quantity: 1</p>
                                    <p>Price: $100</p>
                                    <p>Order status: In Progress</p>
                                    <p>Pickup location: ABC Store</p>
                                </div>
                                <div className="order-history-item-body-right">
                                    <button>Invoice</button>
                                    <button>View</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="order-history-section">
                    <h2 style={{ backgroundColor: 'green' }}>Completed Orders</h2>
                    <div className="order-history-item">
                        <div className="order-history-item-header">
                            <h4>Order date: 12/12/2020</h4>
                        </div>
                        <div className="order-history-item-body">
                            <div className="order-history-item-body-left">
                                <p>Order ID: 789012</p>
                                <img src="product-image.jpg" alt="Product Image" />
                                <p>Product #2</p>
                                <p>Quantity: 2</p>
                                <p>Price: $200</p>
                                <p>Order status: Delivered</p>
                                <p>Delivery address: 123, ABC Street, XYZ City, State, Country</p>
                            </div>
                            <div className="order-history-item-body-right">
                                <button>Invoice</button>
                                <button>View</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="order-history-item">
                        <div className="order-history-item-header">
                            <h4>Order date: 12/12/2020</h4>
                        </div>
                        <div className="order-history-item-body">
                            <div className="order-history-item-body-left">
                                <p>Order ID: 345678</p>
                                <img src="product-image.jpg" alt="Product Image" />
                                <p>Product #3</p>
                                <p>Quantity: 10</p>
                                <p>Price: $500</p>
                                <p>Order status: Delivered</p>
                                <p>Delivery address: 123, ABC Street, XYZ City, State, Country</p>
                            </div>
                            <div className="order-history-item-body-right">
                                <button>Invoice</button>
                                <button>View</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
