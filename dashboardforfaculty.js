document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const menuToggle = document.querySelector('.menu-toggle');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const loadingScreen = document.querySelector('.loading-screen');

    // Show loading screen initially
    if (loadingScreen) {
        loadingScreen.classList.add('active');
        setTimeout(() => {
            loadingScreen.classList.remove('active');
        }, 2000);
    }

    // Toggle sidebar
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    });

    // Handle navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show target section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            
            // Show loading screen
            if (loadingScreen) {
                loadingScreen.classList.add('active');
                setTimeout(() => {
                    loadingScreen.classList.remove('active');
                }, 1000);
            }
        });
    });

    // Check for hash in URL and navigate accordingly
    if (window.location.hash) {
        const targetLink = document.querySelector(`a[href="${window.location.hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }

    // Add MVV section handling
    const mvvLink = document.querySelector('a[href="#mvv"]');
    const mvvSection = document.querySelector('.mvv-section');
    
    if (mvvLink && mvvSection) {
        mvvLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all sections first

            document.querySelectorAll('div[class$="-section"]').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show MVV section and remove bottom radius
            mvvSection.style.display = 'block';
            mvvSection.style.borderBottomLeftRadius = '0';
            mvvSection.style.borderBottomRightRadius = '0';
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    // Get all sections
    const sections = document.querySelectorAll([
        '.dashboard-container',
        '.classes-section',
        '.todos-section',
        '.announcements-section',
        '.school-news-section',
        '.enrollment-section',
        '.mvv-section',
        '.clearance-section'
    ].join(','));

    // Show dashboard by default
    document.querySelector('.dashboard-container').classList.add('section-active');

    // Add click event to each sidebar link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all sections
            sections.forEach(section => {
                section.classList.remove('section-active');
            });

            // Get the target section id from href
            const targetId = this.getAttribute('href').substring(1);
            
            // Show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('section-active');
            }
        });
    });

    // Update section handling
    function hideAllSections() {
        const allSections = document.querySelectorAll('.dashboard-container, .welcome-banner, .classes-section, .todos-section, .announcements-section, .school-news-section, .enrollment-section, .mvv-section, .clearance-section');
        allSections.forEach(section => {
            if (section) section.style.display = 'none';
        });
    }

    // Handle navigation with proper display properties
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            hideAllSections();
            
            // Show target section with proper display property
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                if (targetId === 'dashboard') {
                    document.querySelector('.dashboard-container').style.display = 'grid';
                    document.querySelector('.welcome-banner').style.display = 'block';
                } else {
                    targetSection.style.display = 'block';
                }
            }
            
            // Show loading screen
            if (loadingScreen) {
                loadingScreen.classList.add('active');
                setTimeout(() => {
                    loadingScreen.classList.remove('active');
                }, 1000);
            }
        });
    });
});


            // Create classes content if not exists
            // Inside the classesLink click handler, after the schedule table
            if (!document.querySelector('.classes-section')) {
                classesSection.innerHTML = `
                    <div class="student-header">
                        <div class="student-info">
                            <h2>Tan, Jim Ross Ryan</h2>
                            <p>Grade 12 Einstein</p>
                        </div>
                        <div class="schedule-icons">
                            <div class="icon-item">
                                <i class="fas fa-calendar"></i>
                                <span>Schedule</span>
                            </div>
                            <div class="icon-item">
                                <i class="fas fa-tasks"></i>
                                <span>To-dos</span>
                            </div>
                        </div>
                    </div>
                    <div class="schedule-header">
                        <h1 class="schedule-title">1st SEMESTER CLASS SCHEDULE</h1>
                    </div>
                    <table class="schedule-table">
                        <tr>
                           
                        </tr>
                        <tr>
                            <td class="time-column">7:30-11:30 AM<br>(ADVISORY)</td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">MS. DAGPIN</div>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">APP 7a</div>
                                    <div class="teacher-name">MS. BIODES</div>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">STEM 8</div>
                                    <div class="teacher-name">MS. TUAZON</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="time-column">11:30-12:00 AM</td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">STEM 7</div>
                                    <div class="teacher-name">MS. CAMPOREDONDO</div>
                                </div>
                            </td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">COR 6d</div>
                                    <div class="teacher-name">MR. DELA CRUZ</div>
                                </div>
                            </td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">APP 7b</div>
                                    <div class="teacher-name">MS. PATALINO</div>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">STEM 8</div>
                                    <div class="teacher-name">MS. TUAZON</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="break-time" colspan="6">B R E A K&nbsp;&nbsp;&nbsp;T I M E</td>
                        </tr>
                        <tr>
                            <td class="time-column">1:30-3:00 PM</td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">APP 7b</div>
                                    <div class="teacher-name">MS. PATALINO</div>
                                </div>
                            </td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">STEM 7</div>
                                    <div class="teacher-name">MS. CAMPOREDONDO</div>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">APP 7b</div>
                                    <div class="teacher-name">MS. PATALINO</div>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                    </table>`;
    
    
            document.querySelector('.main-content').appendChild(classesSection);
        }


        <div class="balance-section" style="display: none;">
    <div class="balance-header">
        <h1>ACCOUNT BALANCE</h1>
        <div class="student-info">
            <span>Tan, Jim Ross</span>
            <span>Grade 12 - STEM</span>
        </div>
    </div>

    <div class="balance-overview">
        <div class="total-balance">
            <h2>Total Balance</h2>
            <span class="amount">₱15,000.00</span>
            <span class="term">1st Semester 2024-2025</span>
        </div>
        
        <div class="payment-history">
            <h3>Payment History</h3>
            <div class="history-list">
                <div class="payment-item">
                    <div class="payment-date">March 15, 2025</div>
                    <div class="payment-details">
                        <span class="payment-type">Tuition Fee</span>
                        <span class="payment-amount">₱5,000.00</span>
                    </div>
                    <span class="payment-status paid">Paid</span>
                </div>
                
                <div class="payment-item">
                    <div class="payment-date">February 15, 2025</div>
                    <div class="payment-details">
                        <span class="payment-type">Miscellaneous Fee</span>
                        <span class="payment-amount">₱3,000.00</span>
                    </div>
                    <span class="payment-status paid">Paid</span>
                </div>
                
                <div class="payment-item">
                    <div class="payment-date">April 15, 2025</div>
                    <div class="payment-details">
                        <span class="payment-type">Laboratory Fee</span>
                        <span class="payment-amount">₱2,000.00</span>
                    </div>
                    <span class="payment-status pending">Pending</span>
                </div>
            </div>
        </div>
    </div>

    <div class="payment-options">
        <h3>Payment Methods</h3>
        <div class="payment-methods">
            <div class="payment-method">
                <img src="gcash.png" alt="GCash">
                <span>GCash</span>
            </div>
            <div class="payment-method">
                <img src="gcash.png" alt="Bank Transfer">
                <span>Bank Transfer</span>
            </div>
            <div class="payment-method">
                <img src="gcash.png" alt="Cash Payment">
                <span>Cash Payment</span>
            </div>
        </div>
    </div>
</div>

<!-- Add this after the balance-section div -->
<div class="clinic-section" style="display: none;">
    <div class="clinic-container">
        <div class="clinic-header">
            <h2>CLINIC HISTORY</h2>
            <div class="student-info">
                <span>Tan, Jim Ross</span>
                <span>Grade 12 - STEM</span>
            </div>
        </div>
        <div class="clinic-records">
            <div class="clinic-record">
                <div class="record-header">
                    <span class="date">March 15, 2024</span>
                    <span class="time">9:30 AM</span>
                </div>
                <div class="record-details">
                    <p class="complaint">Chief Complaint: Headache and Fever</p>
                    <p class="treatment">Treatment: Paracetamol 500mg</p>
                    <p class="nurse">Attending Nurse: Ms. Santos</p>
                </div>
            </div>
            <div class="clinic-record">
                <div class="record-header">
                    <span class="date">February 28, 2024</span>
                    <span class="time">2:15 PM</span>
                </div>
                <div class="record-details">
                    <p class="complaint">Chief Complaint: Stomach ache</p>
                    <p class="treatment">Treatment: Antacid</p>
                    <p class="nurse">Attending Nurse: Mr. Garcia</p>
                </div>
            </div>
        </div>
    </div>
<div class="test-section" style="display: none;">
    <div class="test-header">
        <h1>CREATE TEST</h1>
        <div class="teacher-info">
            <span>Dave Elaya, LPT</span>
            <span>STEM 100: General Chemistry</span>
        </div>
    </div>

    <div class="test-creator">
        <div class="test-details">
            <input type="text" placeholder="Test Title" class="test-title-input">
            <div class="test-meta">
                <input type="number" placeholder="Duration (minutes)" min="1">
                <input type="number" placeholder="Total Points" min="1">
                <input type="datetime-local" placeholder="Due Date">
            </div>
        </div>

        <div class="questions-container">
            <!-- Question Template -->
            <div class="question-card">
                <div class="question-header">
                    <span class="question-number">Question 1</span>
                    <select class="question-type">
                        <option value="multiple">Multiple Choice</option>
                        <option value="true-false">True/False</option>
                        <option value="essay">Essay</option>
                    </select>
                    <button class="delete-question"><i class="fas fa-trash"></i></button>
                </div>
                <textarea class="question-text" placeholder="Enter your question here"></textarea>
                <div class="options-container">
                    <div class="option">
                        <input type="radio" name="correct1">
                        <input type="text" placeholder="Option A">
                    </div>
                    <div class="option">
                        <input type="radio" name="correct1">
                        <input type="text" placeholder="Option B">
                    </div>
                    <div class="option">
                        <input type="radio" name="correct1">
                        <input type="text" placeholder="Option C">
                    </div>
                    <div class="option">
                        <input type="radio" name="correct1">
                        <input type="text" placeholder="Option D">
                    </div>
                </div>
                <div class="question-footer">
                    <input type="number" placeholder="Points" min="1" class="points-input">
                    <button class="add-option">Add Option</button>
                </div>
            </div>
        </div>

        <div class="test-actions">
            <button class="add-question">Add Question</button>
            <button class="save-test">Save Test</button>
            <button class="publish-test">Publish Test</button>
        </div>
    </div>

    <div class="existing-tests">
        <h2>Your Tests</h2>
        <div class="tests-grid">
            <div class="test-item">
                <h3>DNA & RNA Quiz</h3>
                <p>STEM 100: General Chemistry</p>
                <div class="test-stats">
                    <span>10 Questions</span>
                    <span>30 Minutes</span>
                    <span>Due: Apr 15, 2024</span>
                </div>
                <div class="test-actions">
                    <button class="edit-test">Edit</button>
                    <button class="view-results">View Results</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div><script src="navigationforfaculty.js"></script>
</body>
</main>
<div class="enrollment-section" style="display: none;">
    <div class="enrollment-header">
        <span class="student-number">2025-1234</span>
        <div class="student-info-container">
            <div class="student-name-box">
                <span>Tan, Jim Ross</span>
                <span>2st Year</span>
            </div>
            <div class="enrollment-status-box">
                <span>Currently Enrolled:</span>
                <span>1st Sem, STEM</span>
            </div>
        </div>
    </div>

    <div class="enrollment-content">
        <h2>Showing List of Courses and Track Allowed for Online Enrollment</h2>
        <p class="subtitle">For Senior High Students</p>

        <div class="track-options">
            <div class="track-card">
                <h3>STEM</h3>
                <p>Science, Technology, Engineering and Mathematics</p>
            </div>
            <div class="track-card">
                <h3>ABM</h3>
                <p>Accountancy, Business and Management</p>
            </div>
            <div class="track-card">
                <h3>HUMSS</h3>
                <p>Humanities and Social Sciences</p>
            </div>
            <div class="track-card">
                <h3>GAS</h3>
                <p>General Academic Strand</p>
            </div>
            <div class="track-card">
                <h3>TVL-ICT</h3>
                <p>Technical Vocational Livelihood</p>
            </div>
            <div class="track-card">
                <h3>TVL-Cookery</h3>
                <p>Technical Vocational Livelihood</p>
            </div>
        </div>

        <div class="enrollment-banner">
            <h1>SEMESTRAL ONLINE ENROLLMENT</h1>
            <p>We encourage all our students to follow our online enrollment process. After fulfilling the necessary steps and requirements, please proceed to the enrollment office for the submission and confirmation of slot.</p>
        </div>

        <div class="enrollment-process">
            <div class="process-steps">
                <div class="step">
                    <div class="step-content">
                        <span class="step-number">Step 1:</span>
                        <span class="step-text">Download a copy of the blue form and fill it out 
                            <a href="https://1drv.ms/w/c/c554de48cfeefeb8/EQwnJUgA8-lHiiG1_IRCLkUBv5s4Bo9gNFGezut4HomLyw?e=mm36mX" target="_blank">
                                https://1drv.ms/w/c/c554de48cfeefeb8/EQwnJUgA8-lHiiG1_IRCLkUBv5s4Bo9gNFGezut4HomLyw?e=mm36mX
                            </a>
                        </span>
                    </div>
                    <div class="step-arrow">→</div>
                </div>
                <div class="step">
                    <div class="step-content">
                        <span class="step-number">Step 2:</span>
                        <span class="step-text">Scan a copy of your requirements and tag the button below for submission of form and clearance</span>
                    </div>
                    <div class="step-arrow">→</div>
                </div>
                <div class="step">
                    <div class="step-content">
                        <span class="step-number">Step 3:</span>
                        <span class="step-text">After the submission, the confirmation will pop up in your portal that will serve as your verification code for enrollment</span>
                    </div>
                    <div class="step-arrow">→</div>
                </div>
                <div class="step">
                    <div class="step-content">
                        <span class="step-number">For Enrollment Fee:</span>
                        <span class="step-text">You can pay your 100<br>Gcash: 09123456789<br>Ps: Secure your screenshot for verification</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>