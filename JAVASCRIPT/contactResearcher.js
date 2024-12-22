
        const diseaseReportForm = document.getElementById('diseaseReportForm');
        const historyList = document.getElementById('historyList');
        const reportForm = document.getElementById('reportForm');
        const uploadHistory = document.getElementById('uploadHistory');

        // Sample data for reports (You can replace this with actual data from your database or backend)
        let reports = [];

        // Function to toggle between the report form and upload history
        function toggleReportForm() {
            reportForm.classList.toggle('hidden');
            uploadHistory.classList.toggle('hidden');
        }

        // Function to render the upload history
        function renderUploadHistory() {
            historyList.innerHTML = '';
            reports.forEach(report => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div>
                        <strong>${report.diseaseName}</strong>
                        <p>Description: ${report.diseaseDescription}</p>
                        <p>Status: ${report.status}</p>
                        <p>Uploaded Files: ${report.files.join(', ')}</p>
                    </div>
                `;
                historyList.appendChild(listItem);
            });
        }

        // Handle form submission for new disease report
        diseaseReportForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const diseaseName = document.getElementById('diseaseName').value;
            const diseaseDescription = document.getElementById('diseaseDescription').value;
            const reportFiles = Array.from(document.getElementById('reportFiles').files).map(file => file.name); // Get file names

            const newReport = {
                diseaseName,
                diseaseDescription,
                files: reportFiles,
                status: 'Pending'
            };

            // Add the new report to the reports array and re-render the upload history
            reports.push(newReport);
            renderUploadHistory();

            // Clear the form and show the upload history
            diseaseReportForm.reset();
            toggleReportForm();
        });

        // Initial render of the upload history
        renderUploadHistory();
