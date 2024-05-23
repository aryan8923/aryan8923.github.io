// Show "About me" content by default
document.getElementById('about').style.display = 'block';

function showContent(contentId) {
    // Hide all content divs
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}
