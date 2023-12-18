import React, { useState } from 'react';
import './Orderhistory.css';

export default function Orderhistory() {
    const [ongoingOrdersOpen, setOngoingOrdersOpen] = useState(true);
    const [eventTicketOrdersOpen, setEventTicketOrdersOpen] = useState(true);

    const toggleOngoingOrders = () => {
        setOngoingOrdersOpen(!ongoingOrdersOpen);
    };

    const toggleEventTicketOrders = () => {
        setEventTicketOrdersOpen(!eventTicketOrdersOpen);
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
                                <h4>Order date: 12/15/2023</h4>
                            </div>
                            <div className="order-history-item-body">
                                <div className="order-history-item-body-left">
                                    <p>Order ID: 123456</p>
                                    <img src="product-image.jpg" alt="Product" />
                                    <p>Product #1</p>
                                    <p>Quantity: 1</p>
                                    <p>Price: $100</p>
                                    <p>Order status: In Progress</p>
                                    <p>Pickup location: ABC Store</p>
                                </div>
                                <div className="order-history-item-body-right">
                                    <button>Invoice</button>
                                    <button>View</button>
                                    <button style={{ backgroundColor: 'red' }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="order-history-section">
                    <h2 style={{ backgroundColor: 'green' }}>Completed Orders</h2>
                    <div className="order-history-item">
                        <div className="order-history-item-header">
                            <h4>Order date: 12/01/2023</h4>
                        </div>
                        <div className="order-history-item-body">
                            <div className="order-history-item-body-left">
                                <p>Order ID: 345678</p>
                                <img src="product-image.jpg" alt="Product" />
                                <p>Product #3</p>
                                <p>Quantity: 10</p>
                                <p>Price: $500</p>
                                <p>Order status: Delivered</p>
                                <p>Delivery address: 123, ABC Street, XYZ City, State, Country</p>
                            </div>
                            <div className="order-history-item-body-right">
                                <button>Invoice</button>
                                <button>View</button>
                                <button style={{ backgroundColor: 'red' }}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-history-section">
                    <h2 onClick={toggleEventTicketOrders} style={{ backgroundColor: 'blue' }}>Event Ticket Orders Ongoing</h2>
                    {eventTicketOrdersOpen && (
                        <div className="order-history-item">
                            <div className="order-history-item-header">
                                <h4>Order date: 12/12/2023</h4>
                            </div>
                            <div className="order-history-item-body">
                                <div className="order-history-item-body-left">
                                    <p>Ticket Order ID: TO_011</p>
                                    <p>Ticket IDs': T_10005 T_10006</p>
                                    <p>Event ID: YE_2023</p>
                                    <p>Event Name: Year End</p>
                                    <p>Quantity: 2</p>
                                    <p>Price: $24</p>
                                    <p>Order status: In Progress</p>
                                    <p>Pickup location: Event Venue</p>
                                </div>
                                <div className="order-history-item-body-right">
                                    <button>Invoice</button>
                                    <button>View</button>
                                    <button style={{ backgroundColor: 'red' }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="order-history-section">
                    <h2 onClick={toggleEventTicketOrders} style={{ backgroundColor: 'Yellow' }}>Event Ticket Orders Completed</h2>
                    {eventTicketOrdersOpen && (
                        <div className="order-history-item">
                            <div className="order-history-item-header">
                                <h4>Order date: 10/20/2023</h4>
                            </div>
                            <div className="order-history-item-body">
                                <div className="order-history-item-body-left">
                                    <p>Ticket Order ID: TO_002</p>
                                    <p>Ticket IDs': T_255 T_256</p>
                                    <p>Event ID: H_2023</p>
                                    <p>Event Name: Halloween</p>
                                    <p>Quantity: 1</p>
                                    <p>Price: $10</p>
                                    <p>Order status: Delivered</p>
                                    <p>Pickup location: Home Delivery</p>
                                </div>
                                <div className="order-history-item-body-right">
                                    <button>Invoice</button>
                                    <button>View</button>
                                    <button style={{ backgroundColor: 'red' }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
