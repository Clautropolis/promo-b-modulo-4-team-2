const api = () => {
  return (
    fetch ("http://localhost:5005/projects/list", 
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