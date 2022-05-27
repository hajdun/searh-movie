import React from 'react'
import type { NextPage } from 'next'
import { SearchBar } from '../components/atoms/SearchBar'
import { BasePage } from '../components/templates/BasePage'

const Home: NextPage = () => {
  return (
    <BasePage>
      <SearchBar />
    </BasePage>
  )
}

export default Home
