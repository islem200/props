import React from 'react'
import Article from './components/Article'

const App = () => {
  const firstArticle = `bfnruehfoijezfijfijiezjuheujneuohsudfjeij
  ,dicfjdsijfiodsj,dsjiojifiojirufuerrjiruçjr
  ojrfiojidsfh_rzu_rfjiopfkezksçi`
  return (
    <div>
      <Article content={firstArticle} name="ahmad" email="ahmad@gmail.com" age="21"    /> 

      <Article 
      name="islem" email="islem@gmail.com" age="21" 
      >
        <h1>Hello World</h1>
        </Article>


      <Article name="nour" email="nour@gmail.com" age="21">
        <div style={{background:"teal"}}>
        <h2>Hello World</h2>
        <p style={{background:"orange"}}>ko,roiuiqghrufqhrenruejsçujnzsijhuheuheuzhu

        </p>

        </div>
       
      </Article>
      
    </div>
  )
}

export default App
