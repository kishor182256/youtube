import React from 'react'

const list = ["All","Live","Cricket","Music","Mix","Pop","Dubbing","Stcoks","Scene",
"watched","New to you","Games"]

const Button = (name) => {
  return (
    <>
     {
        list?.map((item) => {
            return(
             <button className="px-5 py-2 m-2 rounded-full bg-gray-300">{item}</button>
            )
        }
        
            
        )
      }

    
    </>
    
  )
}

export default Button