document.getElementById('border').addEventListener('click', function () {
    console.log('click');
    const container = document.getElementById('container');
    container.style.border = '3px solid yellow';
});


function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    // console.log('click');
    const container = document.getElementById('container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `<h3 class="friend-name">new friend</h3>
<p>Aut, enim?</p>`;
    container.appendChild(friendDiv);
});

