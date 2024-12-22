  // Sample data for reports (replace with dynamic data from your database)
  const doctorReports = [
    {
        doctorName: "Dr. John Doe",
        reports: [
            {
                diseaseDescription: "Potential new disease description A.",
                status: "Not Viewed",
                files: ["file1.pdf", "file2.jpg"],
                viewed: false
            },
            {
                diseaseDescription: "Potential new disease description B.",
                status: "Viewed",
                files: ["file3.pdf"],
                viewed: true
            }
        ]
    },
    {
        doctorName: "Dr. Alice Smith",
        reports: [
            {
                diseaseDescription: "Possible new disease C.",
                status: "Not Viewed",
                files: ["file4.pdf"],
                viewed: false
            }
        ]
    }
];

const reportDetails = document.getElementById("reportDetails");
const reportTitle = document.getElementById("reportTitle");
const reportDescription = document.getElementById("reportDescription");
const reportFiles = document.getElementById("reportFiles");
const viewedBtn = document.getElementById("viewedBtn");
const closeReportBtn = document.getElementById("closeReportBtn");
const recentReportsList = document.getElementById("recentReportsList");

// Function to display the reports based on the filter
function displayRecentReports(filter) {
    let recentReportsHTML = "";
    doctorReports.forEach(doctor => {
        doctor.reports.forEach(report => {
            // Apply the filter logic for viewed and not viewed
            if (filter === 'all' || (filter === 'viewed' && report.viewed) || (filter === 'notViewed' && !report.viewed)) {
                recentReportsHTML += `
                    <div class="recentReportItem">
                        <div>
                            <p><strong>Doctor:</strong> ${doctor.doctorName}</p>
                            <p><strong>Status:</strong> <span class="status ${report.viewed ? 'viewed' : 'notViewed'}">${report.viewed ? 'Viewed' : 'Not Viewed'}</span></p>
                        </div>
                        <button class="viewReportBtn" onclick="viewReportDetails('${report.diseaseDescription}', '${report.files.join(", ")}', '${report.viewed ? 'viewed' : 'notViewed'}')">View Report</button>
                    </div>
                `;
            }
        });
    });
    recentReportsList.innerHTML = recentReportsHTML;
}

// Function to filter reports by status
function filterReports(status) {
    displayRecentReports(status);
}

// Function to view report details
function viewReportDetails(description, files, status) {
    reportTitle.innerHTML = "New Potential Disease Report";
    reportDescription.innerHTML = description;
    reportFiles.innerHTML = files;
    reportDetails.style.display = "block";

    // Handle mark as viewed action
    viewedBtn.onclick = () => {
        markReportAsViewed(description);
    };

    // Handle close report action
    closeReportBtn.onclick = () => {
        reportDetails.style.display = "none";
    };

    // Set initial status of the report
    viewedBtn.innerText = status === 'viewed' ? 'Already Viewed' : 'Mark as Viewed';
    viewedBtn.disabled = status === 'viewed';
}

// Function to mark the report as viewed
function markReportAsViewed(description) {
    const report = doctorReports.flatMap(doc => doc.reports).find(r => r.diseaseDescription === description);
    if (report && !report.viewed) {
        report.viewed = true;
        report.status = 'Viewed';
        displayRecentReports('all'); // Refresh the recent reports list
    }
}

// Initialize by displaying all reports
displayRecentReports('all');