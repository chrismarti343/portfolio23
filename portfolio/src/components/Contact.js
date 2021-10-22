
import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>

            <div>
                <form>
                    <fieldset>  <input placeholder="Email Address" type="text"></input></fieldset>
                    <fieldset> <input placeholder="Your Name" type="text"></input></fieldset>
                    <fieldset> <input placeholder="Subject" type="description"></input></fieldset>
                    <fieldset> <input placeholder="Your Text" type="description"></input></fieldset>
                    <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
            </div>
         

        </div>
    )
}
