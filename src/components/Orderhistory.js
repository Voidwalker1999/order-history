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
                                <h3>Order #1</h3>
                                <h4>Order date: 12/12/2020</h4>
                            </div>
                            <div className="order-history-item-body">
                                <div className="order-history-item-body-left">
                                    <h4>Order details</h4>
                                    <p>Product name: Product #1</p>
                                    <p>Product price: $100</p>
                                    <p>Quantity: 1</p>
                                    <p>Total: $100</p>
                                </div>
                                <div className="order-history-item-body-right">
                                    <h4>Delivery details</h4>
                                    <p>Delivery address: 123, ABC Street, XYZ City, State, Country</p>
                                    <p>Delivery status: In Progress</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="order-history-section">
                    <h2 style={{ backgroundColor: 'green' }}>Completed Orders</h2>
                    <div className="order-history-item">
                        <div className="order-history-item-header">
                            <h3>Order #2</h3>
                            <h4>Order date: 12/12/2020</h4>
                        </div>
                        <div className="order-history-item-body">
                            <div className="order-history-item-body-left">
                                <h4>Order details</h4>
                                <p>Product name: Product #1</p>
                                <p>Product price: $100</p>
                                <p>Quantity: 1</p>
                                <p>Total: $100</p>
                            </div>
                            <div className="order-history-item-body-right">
                                <h4>Delivery details</h4>
                                <p>Delivery address: 123, ABC Street, XYZ City, State, Country</p>
                                <p>Delivery status: Delivered</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-history-item">
                        <div className="order-history-item-header">
                            <h3>Order #3</h3>
                            <h4>Order date: 12/12/2020</h4>
                        </div>
                        <div className="order-history-item-body">
                            <div className="order-history-item-body-left">
                                <h4>Order details</h4>
                                <p>Product name: Product #1</p>
                                <p>Product price: $100</p>
                                <p>Quantity: 1</p>
                                <p>Total: $100</p>
                            </div>
                            <div className="order-history-item-body-right">
                                <h4>Delivery details</h4>
                                <p>Delivery address: 123, ABC Street, XYZ City, State, Country</p>
                                <p>Delivery status: Delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}