const api = () => {
  const apiUrl = import.meta.env.VITE_URL_SERVER;
  return (
    fetch (`${apiUrl}/projects/list`, 
      {
        headers : {"content-type" : "application/json"},
        method : "GET"
      }      
    )
    .then(res => res.json())
    .then(data => {
      return data
    })
  )
}

export default api