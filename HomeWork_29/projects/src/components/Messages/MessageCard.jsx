import React from 'react';

export default function MessageCard({ message }){
    return (
        <div className="message-box" key={message.id}>
            <img src={message.image}></img>
            <div className="message-content">
                <div className="message-header">
                    <div className="name">{message.name}</div>
                    <div className="star-checkbox">
                        <input type="checkbox" id={message.id}></input>
                        <label htmlFor={message.id}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-star"
                            >
                            <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                            />
                            </svg>
                        </label>
                    </div>
                </div>
                <p className="message-line">{message.messageText}</p>
                <p className="message-line time">{message.date}</p>
            </div>
        </div>
    )
}