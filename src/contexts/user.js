import React, { useMemo, useContext, useState, useEffect } from 'react'

const Context = React.createContext()

function UserProvider(props) {
  const [apiData, setApiData] = useState({
    avatar_url: 'https://avatars0.githubusercontent.com/u/12124209?v=4',
    html_url: 'https://github.com/fernandortl',
    name: 'Fernando Lopes',
    company: 'Mirum Agency',
    location: 'Curitiba - Brazil',
    bio: 'Full Stack Web Developer',
  })

  async function getApiData() {
    const url = 'https://api.github.com/users/fernandortl'
    await fetch(url)
      .then(resp => resp.json())
      .then(function(data) {
        setApiData(data)
      })
  }

  useEffect(() => {
    getApiData()
  }, [])

  const value = useMemo(() => {
    return { apiData }
  }, [apiData])

  return <Context.Provider value={value} {...props} />
}

function useUser() {
  const { apiData } = useContext(Context)
  return { apiData }
}

export { UserProvider, useUser }
