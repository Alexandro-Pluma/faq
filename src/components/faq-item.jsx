const FaqItem = ({faq, index, show, handleClick}) => {
    return (
        <div key={faq.id} className='faq-item'>
        <div className="faq-header">
          <div className="title">{faq.question}</div>
          <button onClick={() => handleClick(index)}>
            Expandir
          </button>
        </div>
        <div className={`faq-body ${ show === index ? 'in' : '' }`}>
          {faq.resp}
        </div>
      </div>
    )
}

export default FaqItem