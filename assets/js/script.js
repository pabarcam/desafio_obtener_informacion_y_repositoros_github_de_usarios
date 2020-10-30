
async function request (url) {
  try{
    const resp = await fetch(url)
    .then(response => response.text())
    return resp
  }catch(err){
    console.log(err)
  }
}

asyn function getUser(user){
  return await request(`https://api.github.com/users/${user}`)

}

asyn function getRepo(user, page, perPage){
  return await request(`https://api.github.com/users/${user}/repos?page=${page}&per_page=${perPage}`)
}
// Ambas llamadas en paralelo
// getUser('pabarcam').then(resp => {console.log(resp)})
// getRepo('pabarcam', 0, 100).then(resp => {console.log(resp)})


let btn = $('button')

btn.on('click', (e) => {
  e.preventDefault()
  let user = $('#nombre').val()
  let page = $('#pagina').val()
  let perPage = $('#repoPagina').val()

    //Ambas llamadas en paralelo pero retornando juntas
  Promise.all([getUser(user), getRepo(user, page, perPage)]).then(results => {
    console.log(results)
  })
})