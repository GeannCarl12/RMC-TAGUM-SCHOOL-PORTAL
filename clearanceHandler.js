export function handleClearancePage(mainContent) {
    mainContent.innerHTML = `
        <div class="student-header">
            <div class="student-info">
                <h1>Tan, Jim Ross Ryan</h1>
                <p>Grade 12 Einstein</p>
            </div>
        </div>

        <div class="clearance-container">
            <h2>CLEARANCE</h2>
            <p class="semester-info">(1st Semester)</p>

            <div class="clearance-table">
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Teacher</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>COR 18</td>
                            <td>Dave Elaya, LPT</td>
                            <td class="status on-leave">On-Leave</td>
                        </tr>
                        <tr>
                            <td>COR 19</td>
                            <td>Charivee Tuazon, LPT</td>
                            <td class="status in-school">In School</td>
                        </tr>
                        <tr>
                            <td>STEM 1</td>
                            <td>Ma. Clayne Dagpin, LPT</td>
                            <td class="status in-school">In School</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="date-accomplishment">
                <p>Date of Accomplishment:</p>
                <span class="date"></span>
            </div>
        </div>
    `;

    // Add styles
    const clearanceStyles = document.createElement('style');
    clearanceStyles.textContent = `
        .clearance-container {
            padding: 2rem;
            max-width: 1000px;
            margin: 0 auto;
        }

        .clearance-container h2 {
            text-align: center;
            color: #0066CC;
            margin-bottom: 0.5rem;
        }

        .semester-info {
            text-align: center;
            color: #666;
            margin-bottom: 2rem;
        }

        .clearance-table table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
        }

        .clearance-table th,
        .clearance-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #eee;
        }

        .clearance-table th {
            background: #0066CC;
            color: white;
            font-weight: 600;
        }

        .status {
            font-weight: 600;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            text-align: center;
        }

        .status.on-leave {
            color: #f44336;
        }

        .status.in-school {
            color: #4CAF50;
        }

        .date-accomplishment {
            margin-top: 2rem;
            text-align: right;
            color: #666;
        }
    `;
    document.head.appendChild(clearanceStyles);
}