import styled from 'styled-components'

export const PostContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  p {
    margin: 18px 0;
  }

  img {
    border: 1px solid #ddd;
    max-width: 100%;
  }

  li {
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.75rem;
    margin-top: 2.5rem;

    @media (max-width: 600px) {
      font-size: 1.5rem;
      margin-top: 2rem;
    }
  }

  h3 {
    font-size: 1.25rem;

    @media (max-width: 600px) {
      font-size: 1.125rem;
    }
  }

  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
`
