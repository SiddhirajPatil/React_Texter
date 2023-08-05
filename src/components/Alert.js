import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="alert alert-warning" role="alert" style={{width:"50%",alignItems:"center"}}>
 <strong>{props.alert.type}</strong>: {props.alert.msg} 
</div>
  )
}
