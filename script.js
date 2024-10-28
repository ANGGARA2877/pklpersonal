document.getElementById('daily-report-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let date = document.getElementById('date').value;
    let activity = document.getElementById('activity').value;

    let reportList = document.getElementById('report-list');
    let reportItem = document.createElement('div');
    reportItem.innerHTML = `<strong>${date}</strong>: ${activity}`;
    reportList.appendChild(reportItem);

    // Clear the form after submission
    document.getElementById('daily-report-form').reset();
});

document.getElementById('upload-file').addEventListener('change', function(event) {
    let gallery = document.getElementById('gallery');
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let img = document.createElement('img');
        img.src = e.target.result;
        gallery.appendChild(img);
    }

    reader.readAsDataURL(file);
});
