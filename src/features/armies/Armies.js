import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addArmy, removeArmy, removeAll } from './armiesSlice'

export function Armies(props) {
    const [armyName, setArmyName] = useState('')
    const [armyRemove, setArmyRemove] = useState('')
    const armies = useSelector(state => state.armies)
    const dispatch = useDispatch()

    const getArmyList = (armies) => {
        return armies.map((army, index) => {
            return (
                <li key={index}>{army}</li>
            )
        })
    }

    const handleChange = (event) => {
        setArmyName(event.target.value)
    }

    const handleRemoveChange = (event) => {
        setArmyRemove(event.target.value)
    }

    return (
        <div>
            <h3>Armies:</h3>
            <ul>{getArmyList(armies)}</ul>
            <div className="container">
                <label htmlFor="army">Add New Army:</label>
                <input type="text" value={armyName} name="army" onChange={handleChange}></input>
                <button
                    aria-label='Add Army'
                    onClick={() => dispatch(addArmy(armyName))}
                >
                    Add Army
                </button>
                <p>
                    <label htmlFor="remove">Remove Army:</label>
                    <input type="text" value={armyRemove} name="remove" onChange={handleRemoveChange}></input>
                    <button
                        aria-label='Clear List'
                        onClick={() => dispatch(removeArmy(armyRemove))}
                    >Remove</button>
                </p>
                <p>
                    <button
                        aria-label='Clear List'
                        onClick={() => dispatch(removeAll())}
                    >Remove All</button>
                </p>
            </div>
        </div>
    )
}

