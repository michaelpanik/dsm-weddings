import React from 'react'

const Question = ({children}) => {
    return <h2 className="text-xl mb-5 font-serif tracking-wide uppercase">{children}</h2>
}

const Answer = ({children}) => {
    return <p class="">{children}</p>
}

const FAQ = ({q, a}) => {
    return (
        <div className="mb-20">
            <Question>{q}</Question>
            <Answer>{a}</Answer>
        </div>
    )
}

const FAQList = ({faqs}) => {
    return faqs.map(({q, a}) => <FAQ q={q} a={a} />)
}

export default FAQList