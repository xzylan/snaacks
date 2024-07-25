document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const saveButton = document.getElementById('saveButton');
    const userList = document.getElementById('userList');

    saveButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username) {
            saveUsername(username);
            usernameInput.value = '';
            displayUsernames();
        }
    });

    userList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const username = event.target.parentElement.dataset.username;
            deleteUsername(username);
            displayUsernames();
        }
    });

    function saveUsername(username) {
        let usernames = JSON.parse(localStorage.getItem('usernames')) || [];
        usernames.push(username);
        localStorage.setItem('usernames', JSON.stringify(usernames));
    }

    function deleteUsername(username) {
        let usernames = JSON.parse(localStorage.getItem('usernames')) || [];
        usernames = usernames.filter(u => u !== username);
        localStorage.setItem('usernames', JSON.stringify(usernames));
    }

    function displayUsernames() {
        const usernames = JSON.parse(localStorage.getItem('usernames')) || [];
        userList.innerHTML = '';
        usernames.forEach(username => {
            const li = document.createElement('li');
            li.textContent = username;
            li.dataset.username = username;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            li.appendChild(deleteButton);

            userList.appendChild(li);
        });
    }

    // Initial display of saved usernames
    displayUsernames();
});
