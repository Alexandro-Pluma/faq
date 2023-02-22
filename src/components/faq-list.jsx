import React from 'react'
import faqs from '../faq.js'
import '../index.css'
import FaqItem from './faq-item.jsx'
class FaqList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: undefined
    }
  }

  handleClick (index) {
    this.setState({
      show: index === this.state.show ? undefined : index
    })
  }


  render () {
    return (
      <div className="faq-list">
        <h1>Perguntas Frequentes</h1>



        {faqs.map((faq, index) => (
          <div key={faq.id} className='faq-item'>
            <div className="faq-header">
              <div className="title">{faq.question}</div>
              <button onClick={() => this.handleClick(index)}>
                Expandir
              </button>
            </div>
            <div className={`faq-body ${ this.state.show === index ? 'in' : '' }`}>
              {faq.resp}
            </div>
          </div>
        ))}

      </div>
    )
  }
}




export default FaqList