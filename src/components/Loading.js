import React from 'react'
import {Spinner} from 'react-bootstrap'

export default function Loading() {
    return (
        <div className="load">
            <Spinner id="load" animation="grow"/>
        </div>
    )
}
