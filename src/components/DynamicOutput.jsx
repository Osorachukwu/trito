import React from 'react'
import Footer from './Footer';

function DynamicOutput() {
    let dob = 2001;
    let isAvaialable = true; 
    let thatOne = 'thatCom';

  return (
    <section>
        <h1 style={isAvaialable ? {backgroundColor: "green"} : {backgroundColor: "red"}}>
            I am {2023 - dob } years old
        </h1>

        <h2 style={thatOne === 'garri' ? {backgroundColor: "green", textDecoration: "line-through"} : thatOne === 'beans'   ? {backgroundColor: "red"} : {}}>
            This one uses string
        </h2>

        <h3 style={{backgroundColor: thatOne === 'milk' ? 'gray' : 'yellow'}}>
            This is header three
        </h3>


        <div>
            {thatOne === "appear" ? 
            <div>
                <p>Paragraph</p>
                <h2>Hreader two</h2>

            </div> 
            :
            <p>Gettat</p>}
        </div>

        {thatOne === "thatComp" ? <Footer /> : null}

    </section>
  )
}

export default DynamicOutput