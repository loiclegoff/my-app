import React, { useEffect, useState } from 'react'
import Part from './Part'

const useSearch = () => {
  const [text, setText] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch('https://pure-temple-56604.herokuapp.com/parts?title_like=' + text)
      .then((resp) => resp.json())
      .then((listParts) => setResults(listParts))
  }, [text])

  return {
    text,
    setText,
    results,
  }
}

const Search = () => {
  const { text, setText, results } = useSearch()
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {results.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  )
}

export default Search
