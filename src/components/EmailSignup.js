import React from 'react'
import styled from 'styled-components'
import { colors } from 'src/Constants'

export function EmailSignup() {
  return (
    <div id="mc_embed_signup">
      <Text>
        Want more like this? Sign up to get one article delivered weekly by
        email.
      </Text>
      <Form
        action="https://markadamfoster.us17.list-manage.com/subscribe/post?u=a70f45d8999d8a2d373d54506&id=c18a627089"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <input
          type="email"
          name="EMAIL"
          className="email"
          id="mce-EMAIL"
          placeholder="email address"
          required
        />
        {/* Bot Defense */}
        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_a70f45d8999d8a2d373d54506_c18a627089"
            tabIndex={-1}
            defaultValue
          />
        </div>

        <input
          type="submit"
          defaultValue="Subscribe"
          value="Sign Up"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        />
      </Form>
    </div>
  )
}

const Text = styled.div`
  text-align: center;
  font-size: 17px;
`

const Form = styled.form`
  margin-top: 16px;
  display: flex;
  justify-content: center;

  .email {
    font-family: Lato;
    font-size: 17px;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-right: 10px;
    width: 200px;
  }

  .button {
    font-family: Lato;
    background-color: ${colors.action};
    color: white;
    font-size: 15px;
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
  }
`
