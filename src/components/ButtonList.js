import React from 'react'
import Button from './Button'

const list = ["All","Live","Cricket","Music","Mix","Pop","Dubbing","Stcoks","Scene",
"watched","New to you","Games"]

const ButtonList = () => {
  return (
    <div>

      {
        list?.map((item) => {
          return (
            <Button name={item}/>
          )
        })
      }

    </div>
  )
}

export default ButtonList