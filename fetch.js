async function getUserData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()

    displayUser(data)
}

// name(h1), avatar_url(img), bio, created_at, location

function displayUser(userData) {
    const userContainer = document.createElement('div')
    userContainer.id = 'user'
    
    const name = document.createElement('h1')
    name.textContent = userData.name
    userContainer.appendChild(name)

    const profilePic = document.createElement('img')
    profilePic.src = userData.avatar_url
    profilePic.alt = 'profile image'
    userContainer.appendChild(profilePic)

    const profileUrl = document.createElement('a')
    profileUrl.textContent = `profile page: ${userData.login}`
    profileUrl.href = userData.html_url
    profileUrl.target = '_blank'
    userContainer.appendChild(profileUrl)

    const dateJoined = document.createElement('h3')
    dateJoined.textContent = `Date Joined: ${new Date(userData.created_at).toLocaleDateString('en-US')}` 
    userContainer.appendChild(dateJoined)
   
    document.body.appendChild(userContainer)
}
    
function clearUser(){
    const user = document.getElementById('user')
    if (user) user.remove()
}

document.addEventListener('submit',(e) => {
    e.preventDefault()
    clearUser()
    const username = document.getElementById('username-input').value
    getUserData(username)

    document.getElementById('username-input').value
})


