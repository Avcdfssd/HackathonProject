

    const ngoHelpLink = document.getElementById('ngoHelpLink');
    const initialOptions = document.getElementById('initialOptions');
    const formContainer = document.getElementById('formContainer');
    const statusContainer = document.getElementById('statusContainer');
    const submissionHistory = document.getElementById('submissionHistory');
    const historyList = document.getElementById('historyList');

    let submissionIdCounter = 1;

    ngoHelpLink.addEventListener('click', () => {
        initialOptions.classList.remove('hidden');
        formContainer.classList.add('hidden');
        statusContainer.classList.add('hidden');
        submissionHistory.classList.remove('hidden');
    });

    document.getElementById('submitReportBtn').addEventListener('click', () => {
        initialOptions.classList.add('hidden');
        formContainer.classList.remove('hidden');
    });

    document.getElementById('checkStatusBtn').addEventListener('click', () => {
        initialOptions.classList.add('hidden');
        statusContainer.classList.remove('hidden');
    });

    document.getElementById('reportForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const submissionId = `SUB${submissionIdCounter++}`;
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;

        const listItem = document.createElement('li');
        listItem.textContent = `Submission ID: ${submissionId}, Name: ${name}, Contact: ${contact}`;
        historyList.appendChild(listItem);

        alert('Report submitted successfully! Your Submission ID is: ' + submissionId);

        formContainer.classList.add('hidden');
        initialOptions.classList.remove('hidden');
    });

    document.getElementById('statusForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const submissionId = document.getElementById('submissionId').value;
        const statusMessage = document.getElementById('statusMessage');
        statusMessage.textContent = `Status for ID ${submissionId}: Verified`; // Mocked status
        document.getElementById('statusResult').classList.remove('hidden');
    });
