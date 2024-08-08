import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleDelete = (index) => {
        setTodos(todos.filter((_, currentIndex) => currentIndex !== index));
    };

    return (
        <div className="container">
            <h1>Lista de la compra</h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={(e) => {
                            if (e.key === "Enter" && inputValue.trim() !== "") {
                                setTodos([...todos, inputValue.trim()]);
                                setInputValue("");
                            }
                        }}
                        placeholder="¿Qué necesitas?"
                    />
                </li>
                {todos.length === 0 ? (
                    <li className="no-tasks">¿No te hace falta nada, seguro?</li>
                ) : (
                    todos.map((todo, index) => (
                        <li key={index} className="task-list-item">
                            {todo}
                            <button onClick={() => handleDelete(index)} style={{ marginLeft: "10px" }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Home;
