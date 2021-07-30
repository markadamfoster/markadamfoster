import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

ContactForm.propTypes = {
  formLocation: PropTypes.string.isRequired,
}

export default function ContactForm({ formLocation }) {
  const formName = `${formLocation} Contact Form`
  return (
    <Wrapper>
      <Title>Let&apos;s work together!</Title>
      <Description>
        Let&apos;s talk about your project! Send me a message and I&apos;ll get
        back to you within 24 hours.
      </Description>
      <form name={formName} method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value={formName} />

        <div>
          <label>
            Name &amp; Company
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea name="message" />
          </label>
        </div>
        <button
          type="submit"
          className="bg-maf-teal text-white px-6 py-3 mt-6 rounded-md"
        >
          Send
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--blue);
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
  margin-bottom: 64px;
  color: white;

  label {
    font-size: 16px;
    font-weight: 600;
  }

  input {
    display: block;
    width: 100%;
    max-width: 400px;
    color: #111;
    font-size: 17px;
    padding: 8px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  textarea {
    display: block;
    color: #111;
    width: 100%;
    max-width: 600px;
    border-radius: 5px;
    height: 120px;
  }
`

const Title = styled.h3`
  font-size: 38px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`

const Description = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  opacity: 0.8;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`
