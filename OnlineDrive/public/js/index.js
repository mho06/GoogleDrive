
// To load the content of Home/My Drive/Computers/etc.....
document.addEventListener('DOMContentLoaded', () => {
    const mainPageBtn = document.getElementById('mainPage');
    const homeBtn = document.getElementById('home');
    const myDriveBtn = document.getElementById('myDrive');
    const computersBtn = document.getElementById('computers');
    const shareBtn = document.getElementById('share');
    const recentBtn = document.getElementById('recent');
    const starredBtn = document.getElementById('starred');
    const spamBtn = document.getElementById('spam');
    const trashBtn = document.getElementById('trash');
    const storageBtn = document.getElementById('storage');

    const mainPageContent = document.getElementById('mainPageContent');
    const homeContent = document.getElementById('homeContent');
    const myDriveContent = document.getElementById('myDriveContent');
    const computersContent = document.getElementById('computersContent');
    const shareContent = document.getElementById('shareContent');
    const recentContent = document.getElementById('recentContent');
    const starredContent = document.getElementById('starredContent');
    const spamContent = document.getElementById('spamContent');
    const trashContent = document.getElementById('trashContent');
    const storageContent = document.getElementById('storageContent');

    // Initially hide all content sections except the home content
    const allContents = document.querySelectorAll('.content');
    allContents.forEach(content => {
        if (content !== homeContent) {
            content.classList.add('hidden');
        }
    });

    // Show the Home content by default
    showContent(homeContent);
    document.title = 'Home - Google Drive'; 

    homeBtn.addEventListener('click', () => {
        showContent(homeContent);
        document.title = 'Home - Google Drive'; // Change title to Home
    });

    myDriveBtn.addEventListener('click', () => {
        showContent(myDriveContent);
        document.title = 'My Drive - Google Drive'; // Change title to My Drive
    });

    computersBtn.addEventListener('click', () => {
        showContent(computersContent);
        document.title = 'Computers - Google Drive'; // Change title to Computers
    });

    shareBtn.addEventListener('click', () => {
        showContent(shareContent);
        document.title = 'Shared with Me - Google Drive'; // Change title to Shared with Me
    });

    recentBtn.addEventListener('click', () => {
        showContent(recentContent);
        document.title = 'Recent - Google Drive'; // Change title to Recent
    });

    starredBtn.addEventListener('click', () => {
        showContent(starredContent);
        document.title = 'Starred - Google Drive'; // Change title to Starred
    });

    spamBtn.addEventListener('click', () => {
        showContent(spamContent);
        document.title = 'Spam - Google Drive'; // Change title to Spam
    });

    trashBtn.addEventListener('click', () => {
        showContent(trashContent);
        document.title = 'Trash - Google Drive'; // Change title to Trash
    });

    storageBtn.addEventListener('click', () => {
        showContent(storageContent);
        document.title = 'Storage - Google Drive'; // Change title to Storage
    });

    function showContent(contentElement) {
        // Hide all content sections
        allContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Show the selected content
        contentElement.classList.remove('hidden');
    }
});

//Home 
// for the files & folders / List and Grid Layouts
function handleButtonClick(buttonId) {
    const buttons = document.querySelectorAll('.ff-btn, .layout-btn');

    buttons.forEach(button => {
        if (button.id === buttonId) {
            button.classList.toggle('active');
        } else {
            button.classList.remove('active');
        }
    });
}

//Toggle down
// For the dropdown content
function toggleDropdown(button) {
    var dropdown = button.nextElementSibling;
    var allDropdowns = document.querySelectorAll('.dropdown-content');

    // to close all dropdowns
    allDropdowns.forEach(function(d) {
        if (d !== dropdown && d.style.display === 'block') {
            d.style.display = 'none';
        }
    });

    // Toggle the selected dropdown
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function(event) {
    if (!event.target.matches('#dropdown-button') && !event.target.matches('.arrow')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdown) {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            }
        });
    }
}


//creating files/folders

document.addEventListener('DOMContentLoaded', function () {
    const createFileBtn = document.getElementById('create-file-btn');
    const fileInputs = document.getElementById('file-inputs');
    const submitFileBtn = document.getElementById('submit-file-btn');
    const fileTable = document.getElementById('file-table');

    // Toggle file inputs when "Create File" button is clicked
    createFileBtn.addEventListener('click', function () {
        fileInputs.style.display = 'block';
    });

    // Submit file details and add to table
    submitFileBtn.addEventListener('click', function () {
        const fileName = document.getElementById('file-name').value;
        const fileReason = document.getElementById('file-reason').value;
        const fileOwner = document.getElementById('file-owner').value;
        const fileLocation = document.getElementById('file-location').value;

        // Add a new row to the table with the file details
        const newRow = fileTable.insertRow(-1); // Insert at the end of the table
        const nameCell = newRow.insertCell(0);
        const reasonCell = newRow.insertCell(1);
        const ownerCell = newRow.insertCell(2);
        const locationCell = newRow.insertCell(3);

        nameCell.textContent = fileName;
        reasonCell.textContent = fileReason;
        ownerCell.textContent = fileOwner;
        locationCell.textContent = fileLocation;

        // Reset input fields and hide the file inputs
        document.getElementById('file-name').value = '';
        document.getElementById('file-reason').value = '';
        document.getElementById('file-owner').value = '';
        document.getElementById('file-location').value = '';
        fileInputs.style.display = 'none';
    });
});