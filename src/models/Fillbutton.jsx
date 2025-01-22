import React from 'react'

const Fillbutton = ({text,link}) => {
  return (
    <div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700">
          {text}
        </button>
    </div>
  )
}

export default Fillbutton
