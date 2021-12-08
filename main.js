// variáveis let ou const
/*
      let name = 'JhCsr'
      let phone = 123456789
      let accept = true

      const github = 'Julio-Cesar07'
      const twitter = 'alanzoka'
      const youtube = 'LivesAlanzoka'
      const facebook = 'pedroatormentado'
      const instagram = 'khaby00'
      */

/*
      // tipo objeto
      let user = {
        name: 'JhCsr',
        phone: 123456789,
        accept: true
      }

      console.log(user.name)
      */

// camelCase    PascalCase    snake_case

const linksSocialMedia = {
  github: 'Julio-Cesar07',
  twitter: 'alanzoka',
  youtube: 'LivesAlanzoka',
  facebook: 'pedroatormentado',
  instagram: 'khaby00'
}

function changeSocialMediaLinks() {
  //console.log(document.getElementById('userName').textContent) // document acessa os objetos do HTML

  // document.getElementById('userName').textContent = 'OPAAAAAAAAA'
  // forma mais simples da função de cima, tem que colocar a tag e uma função do document; isso
  // não funciona com tag e class, apenas id do HTML
  // userName.textContent = 'JhCsr'

  // github.href = `https://github.com/${linksSocialMedia['github']}`

  for (let li of socialLinks.children /*vai pegar todas li de dentro da tag ul e id socialLinks*/) {
    const social = li.getAttribute('class') // vai pegar o nome do atributo class

    li.children[0].href =
      'https://www.' + social + '.com/' + linksSocialMedia[social]

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href) // vai pegar o href do primeiro filho de li
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  /*fetch(url).then(response => {
    response.json()
  })*/

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      github.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
