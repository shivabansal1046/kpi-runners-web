import React from 'react'
import ListUsers from './ListUsers'
import Login from './Login'

const Athletes = (props) => {
  if (props.isAuth){
    return (
      <div>
          <h1>List of Athletes</h1>
          <ListUsers />
      </div>)
  }else{
    return(<Login isAuth={props.isAuth} setIsAuth={props.setIsAuth}/>)
  }
  
}

export default Athletes