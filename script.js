
function showtab(tabname) {
    

    let contents = document.querySelectorAll('.html, .css, .js');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected tab
    document.getElementById(tabname).style.display = 'block';
}
