import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { Edithandler } from '../Redux/action'
import { useDispatch } from 'react-redux'


export default function Edit({ tasks }) {
    Modal.setAppElement(`#root`)
    const dispatch = useDispatch();


    const [show, setshow] = useState(false)
    const [edit, setedit] = useState()


    const toggle = () => {
        setshow(!show)
    }


    const Edittodo = () => {
        dispatch(Edithandler(tasks.id, edit))
        toggle()
    }


    return (
        <div className='edit'>
            <button onClick={toggle}>edit</button>
            <Modal className='Modal' isOpen={show}>

                <input value={tasks.text} onChange={(e) => setedit(e.target.value)} placeholder='edit me' />
                <button onClick={Edittodo}>confirm</button>
                <button onClick={toggle}>cancel</button>
            </Modal>
        </div>
    )
}
