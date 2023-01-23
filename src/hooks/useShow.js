import React, {useState, useEffect} from "react"

export const useShow = (state) => {
    const [show, setShow] = useState(state)
    const handleShowMessage = () => setShow(!show)
    return {show, handleShowMessage}
}