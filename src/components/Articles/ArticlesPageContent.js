import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticlesList from './ArticlesList'

const ArticlesPageContent = ({ articles }) => {
  return (
    <Wrapper>
      <Title>Articles</Title>
      <ArticlesList articles={articles} />
    </Wrapper>
  )
}

export default ArticlesPageContent

ArticlesPageContent.propTypes = {
  articles: PropTypes.array,
}

const Wrapper = styled.div`
  max-width: 700px;
  padding: 0 20px;
  margin: 0 auto;
`

const Title = styled.h1``
