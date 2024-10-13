async function fetchUserData () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById( "api-data" );
    try {
        const response = await fetch( apiUrl );
        const users = await response.json();
        console.log(users)
        dataContainer.innerHTML = '';
        const userList = document.createElement( 'ul' );
        users.forEach(user => {
            let li = document.createElement( 'li' );
            li.textContent = user.name;
            userList.appendChild( li );
        } );
        dataContainer.append( userList );
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData)