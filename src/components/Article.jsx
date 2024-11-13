import React from 'react'

// const Article = (props) => {
//     console.log("the props are:", props)
//   return (
//     <div style={{background:"purple", boxShadow:"0px 10px 10px ", color:"white", fontSize:30, margin:"10px"}}>
//       <h1>{props.name}</h1>
//       <h3>{props.email}</h3>
//       <h3>2003</h3>
//     <hr/>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, officia!</p>

//     </div>
//   )
// }

//export default Article

// const Article = (props) => {
//     const name = props.name;
//     const email = props.email;
   
//   return (
//     <div style={{background:"purple", boxShadow:"0px 10px 10px ", color:"white", fontSize:30, margin:"10px"}}>
//       <h1>{name}</h1>
//       <h3>{email}</h3>
//       <h3>2003</h3>
//     <hr/>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, officia!</p>

//     </div>
//   )
// }

// export default Article

const Article = ({name, email, age, content="no content", children}) => {
    
  return (
    <div style={{background:"purple", boxShadow:"0px 10px 10px ", color:"white", fontSize:30, margin:"10px"}}>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{age}</h3>
      
    <hr/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, officia!</p>
      <p>{content}</p>
      <p>{children}</p>

    </div>
  )
}

export default Article
