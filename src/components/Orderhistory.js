import React from 'react';
import './Orderhistory.css';

export default function Orderhistory() {
    return (
        <div className="order-history">
            <h1>Order History</h1>
            <div className="order-history-container">
                <div className="order-history-item">
                    <div className="order-history-item-header">
                        <h2>Order #1</h2>
                        <h3>Order date: 12/12/2020</h3>
                    </div>
                    <div className="order-history-item-body">
                        <div className="order-history-item-body-left">
                            <h3>Order details</h3>
                            <p>Product name: Product #1</p>
                            <p>Product price: $100</p>
                            <p>Quantity: 1</p>
                            <p>Total: $100</p>
                        </div>
                        <div className="order-history-item-body-right">
                            <h3>Delivery details</h3>
                            <p>Delivery address: 123, ABC Street, XYZ City, State, Country</p>
                            <p>Delivery status: Delivered</p>
                        </div>
                    </div>
                </div>
                <div className="order-history-item">
                    <div className="order-history-item-header">
                        <h2>Order #2</h2>
                        <h3>Order date: 12/12/2020</h3>
                    </div>
                    <div className="order-history-item-body">
                        <div className="order-history-item-body-left">
                            <h3>Order details</h3>
                            <p>Product name: Product #1</p>
                            <p>Product price: $100</p>
                            <p>Quantity: 1</p>
                            <p>Total: $100</p>
                        </div>
                        <div className="order-history-item-body-right">
                            <h3>Delivery details</h3>
                            <p>Delivery address: 123, ABC Street, XYZ City, State, Country</p>
                            <p>Delivery status: Delivered</p>
                        </div>
                    </div>
                </div>
                <div className="order-history-item">
                    <div className="order-history-item-header">
                        <h2>Order #3</h2>
                        <h3>Order date: 12/12/2020</h3>
                    </div>
                    <div className="order-history-item-body">
                        <div className="order-history-item-body-left">
                            <h3>Order details</h3>
                            <p>Product name: Product #1</p>
                            <p>Product price: $100</p>
                            <p>Quantity: 1</p>
                            <p>Total: $100</p>
                        </div>
                        <div className="order-history-item-body-right">
                            <h3>Delivery details</h3>
                            <p>Delivery address: 123, ABC Street, XYZ City, State, Country</p>
                            <p>Delivery status: Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}