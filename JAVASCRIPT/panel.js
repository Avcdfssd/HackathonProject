const historyList = document.getElementById('historyList');
const fileModal = document.getElementById('fileModal');
const fileDisplay = document.getElementById('fileDisplay');

// Sample data: Replace with actual user-submitted reports
const submissions = [
    {
        id: 'SUB001',
        name: 'John Doe',
        contact: '123456789',
        diseaseDetails: 'Severe headache and dizziness.',
        status: 'Pending',
        files: [
            { name: 'Headache_Report.pdf', type: 'application/pdf' },
            { name: 'Medical_Images.jpg', type: 'image/jpeg' }
        ]
    },
    {
        id: 'SUB002',
        name: 'Jane Smith',
        contact: '987654321',
        diseaseDetails: 'Chronic cough and fever.',
        status: 'Pending',
        files: [
            { name: 'Cough_Report.pdf', type: 'application/pdf' },
            { name: 'XRay_Image.jpg', type: 'image/jpeg' }
        ]
    }
];

// Function to render submission history
function renderSubmissions() {
    historyList.innerHTML = '';
    submissions.forEach(submission => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <strong>${submission.name}</strong>
                <p>Contact: ${submission.contact}</p>
                <p>Details: ${submission.diseaseDetails}</p>
                <p>Status: <strong>${submission.status}</strong></p>
            </div>
            <div>
                <button onclick="viewFiles('${submission.id}')">View Files</button>
                <button onclick="updateStatus('${submission.id}', 'Approved')">Approve</button>
                <button onclick="updateStatus('${submission.id}', 'Denied')">Deny</button>
            </div>
        `;
        historyList.appendChild(listItem);
    });
}

// Function to view files (images or PDFs)
function viewFiles(submissionId) {
    const submission = submissions.find(sub => sub.id === submissionId);
    fileDisplay.innerHTML = '';
    submission.files.forEach(file => {
        const filePreview = document.createElement('div');
        filePreview.textContent = file.name;
        filePreview.addEventListener('click', () => {
            const fileReader = new FileReader();
            fileReader.onload = function(event) {
                const fileContent = event.target.result;
                if (file.type.startsWith('image')) {
                    fileDisplay.innerHTML = `<img src="${fileContent}" width="100%">`;
                } else {
                    fileDisplay.innerHTML = <pre>${fileContent}</pre>;
                }
            };
            fileReader.readAsDataURL(file);
        });
        fileDisplay.appendChild(filePreview);
    });

    fileModal.style.display = 'flex';
}

// Function to close the file modal
function closeFileModal() {
    fileModal.style.display = 'none';
}

// Function to update the status of a submission (Approve/Deny)
function updateStatus(submissionId, newStatus) {
    const submission = submissions.find(sub => sub.id === submissionId);
    submission.status = newStatus;
    renderSubmissions();
}

// Function to filter reports by status
function filterReports(status) {
    const filteredSubmissions = submissions.filter(sub => sub.status === status);
    if (filteredSubmissions.length > 0) {
        historyList.innerHTML = '';
        filteredSubmissions.forEach(submission => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div>
                    <strong>${submission.name}</strong>
                    <p>Contact: ${submission.contact}</p>
                    <p>Details: ${submission.diseaseDetails}</p>
                    <p>Status: <strong>${submission.status}</strong></p>
                </div>
                <div>
                    <button onclick="viewFiles('${submission.id}')">View Files</button>
                    <button onclick="updateStatus('${submission.id}', 'Approved')">Approve</button>
                    <button onclick="updateStatus('${submission.id}', 'Denied')">Deny</button>
                </div>
            `;
            historyList.appendChild(listItem);
        });
    } else {
        historyList.innerHTML = <p>No reports found with status ${status}</p>;
    }
}

// Initial rendering of submissions
renderSubmissions();