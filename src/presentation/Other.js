import React from 'react'
import ReactDOM from 'react-dom'
const Other = () => {
    return ReactDOM.createPortal(
        <div>Portal-root</div>,
        document.getElementById('other-root')
      )
}

export default Other
