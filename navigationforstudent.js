document.addEventListener('DOMContentLoaded', function() {
    // Get the loading screen element
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Get the logout button in the sidebar
    const sidebarLogoutButton = document.querySelector('.nav-menu a:last-child');
    
    // Get the logout button in the top navbar (if it exists)
    const navbarLogoutButton = document.querySelector('.top-navbar .fa-sign-out-alt')?.closest('a');
    
    // Add balance functionality
    const balanceButton = document.querySelector('.grid-item:nth-child(1)');
    const balanceSection = document.querySelector('.balance-section') || document.createElement('div');
    balanceSection.classList.add('balance-section');
    
    // Add clearance functionality
    const clearanceButton = document.querySelector('.grid-item:nth-child(2)');
    const clearanceSection = document.querySelector('.clearance-section');
    const dashboardContainer = document.querySelector('.dashboard-container');
    const welcomeBanner = document.querySelector('.welcome-banner');
    const mainContent = document.querySelector('.main-content');

    // Add balance button functionality
    if (balanceButton) {
        balanceButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Balance button clicked');
            
            // Hide other sections
            if (dashboardContainer) dashboardContainer.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (todosSection) todosSection.style.display = 'none';
            if (mainContent) mainContent.style.display = 'block';
            if (todosSection) todosSection.style.display = 'none';
            if (classesSection) classesSection.style.display = 'none';
            if (announcementsSection) announcementsSection.style.display = 'none';
            if (newsSection) newsSection.style.display = 'none';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            if (mvvSection) mvvSection.style.display = 'none';
            if (clinicSection) clinicSection.style.display = 'none';
            if (scholarshipSection) scholarshipSection.style.display = 'none';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            
            // Create balance content if not exists
            if (!document.querySelector('.balance-section')) {
                balanceSection.innerHTML = `
                    <div class="balance-container">
                        <h2>Student Balance</h2>
                        <div class="balance-summary">
                            <div class="total-balance">
                                <span>Total Balance:</span>
                                <span class="amount">₱3,430.00</span>
                            </div>
                            <div class="term-balance">
                                <span>First Semester 2024-25</span>
                            </div>
                        </div>
                        <div class="payment-history">
                            <h3>Payment History</h3>
                            <div class="history-list">
                                <div class="history-item">
                                    <span class="date">May 15, 2024</span>
                                    <span class="description">Tuition Fee Payment</span>
                                    <span class="amount">₱1,500.00</span>
                                </div>
                                <div class="history-item">
                                    <span class="date">May 10, 2024</span>
                                    <span class="description">Miscellaneous Fee</span>
                                    <span class="amount">₱430.00</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                document.querySelector('.main-content').appendChild(balanceSection);
            }
            
            // Show balance section
            balanceSection.style.display = 'block';
        });
    }

    // Add dashboard button functionality
    const dashboardLink = document.querySelector('.nav-menu a[href="#dashboard"]');
    
    if (dashboardLink) {
        dashboardLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show dashboard elements
            if (dashboardContainer) dashboardContainer.style.display = 'flex';
            if (welcomeBanner) welcomeBanner.style.display = 'flex';
            if (mainContent) mainContent.style.display = 'block';
            
            // Hide other sections
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (todosSection) todosSection.style.display = 'none';
            if (mainContent) mainContent.style.display = 'block';
            if (todosSection) todosSection.style.display = 'none';
            if (classesSection) classesSection.style.display = 'none';
            if (announcementsSection) announcementsSection.style.display = 'none';
            if (newsSection) newsSection.style.display = 'none';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            if (mvvSection) mvvSection.style.display = 'none';
            if (clinicSection) clinicSection.style.display = 'none';
            if (scholarshipSection) scholarshipSection.style.display = 'none';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';
            
            // Update active state in navigation
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    }

    if (clearanceButton) {
        clearanceButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Clearance button clicked');
            if (dashboardContainer) dashboardContainer.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (mainContent) mainContent.style.display = 'none';
            if (clearanceSection) clearanceSection.style.display = 'block';
        });
    }

    // Add back button for clearance
 

   
    // Add To-Dos functionality
    const todosButton = document.querySelector('.grid-item:nth-child(6)');
    const todosSection = document.querySelector('.todos-section');
    
    if (todosButton) {
        todosButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('To-Dos button clicked');
            
            // Hide other sections
            if (dashboardContainer) dashboardContainer.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (mainContent) mainContent.style.display = 'none';

            // Show To-Dos section
            if (todosSection) todosSection.style.display = 'block';
        });
    }

    document.querySelectorAll('.profile-trigger, .profile-link, .nav-profile').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const mainContent = document.querySelector('.main-content');
            const profileContent = document.querySelector('.profile-content');
            const welcomeBanner = document.querySelector('.welcome-banner');
            const dashboardContainer = document.querySelector('.dashboard-container');
            
            // Hide all other sections
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (todosSection) todosSection.style.display = 'none';
            if (classesSection) classesSection.style.display = 'none';
            if (announcementsSection) announcementsSection.style.display = 'none';
            if (newsSection) newsSection.style.display = 'none';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            if (mvvSection) mvvSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';
            if (clinicSection) clinicSection.style.display = 'none';
            
            if (profileContent.style.display === 'none') {
                welcomeBanner.style.display = 'none';
                dashboardContainer.style.display = 'none';
                profileContent.style.display = 'block';
                mainContent.style.display = 'block'; // Keep main content visible
            } else {
                welcomeBanner.style.display = 'flex';
                dashboardContainer.style.display = 'flex';
                profileContent.style.display = 'none';
                mainContent.style.display = 'block';
            }
        });
    });

    

    // Add Clinic History functionality
    const clinicHistoryButton = document.querySelector('.grid-item:nth-child(3)');
    const clinicSection = document.querySelector('.clinic-section') || document.createElement('div');
    clinicSection.classList.add('clinic-section');
    
    if (clinicHistoryButton) {
        clinicHistoryButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Clinic History button clicked');
            
            // Hide other sections
            if (dashboardContainer) dashboardContainer.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (todosSection) todosSection.style.display = 'none';
            if (classesSection) classesSection.style.display = 'none';
            if (announcementsSection) announcementsSection.style.display = 'none';
            if (newsSection) newsSection.style.display = 'none';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            if (mvvSection) mvvSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';
            if (scholarshipSection) scholarshipSection.style.display = 'none';
            
            // Keep main content visible
            if (mainContent) {
                mainContent.style.display = 'block';
                if (!document.querySelector('.clinic-section')) {
                    clinicSection.innerHTML = `
                        <div class="clinic-container">
                            <h2>Clinic History</h2>
                            <div class="clinic-records">
                                <!-- Add your clinic records here -->
                            </div>
                        </div>`;
                    document.querySelector('.main-content').appendChild(clinicSection);
                }
                clinicSection.style.display = 'block';
            }
        });
    }

    // Add Scholarship functionality
    const scholarshipButton = document.querySelector('.grid-item:nth-child(4)');
    const scholarshipSection = document.querySelector('.scholarship-section') || document.createElement('div');
    scholarshipSection.classList.add('scholarship-section');
    
    if (scholarshipButton) {
        scholarshipButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Scholarship button clicked');
            
            // Hide other sections
            if (dashboardContainer) dashboardContainer.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (todosSection) todosSection.style.display = 'none';
            if (classesSection) classesSection.style.display = 'none';
            if (announcementsSection) announcementsSection.style.display = 'none';
            if (newsSection) newsSection.style.display = 'none';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            if (mvvSection) mvvSection.style.display = 'none';
            if (clinicSection) clinicSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';
            
            // Keep main content visible
            if (mainContent) {
                mainContent.style.display = 'block';
                if (!document.querySelector('.scholarship-section')) {
                    scholarshipSection.innerHTML = `
                        <div class="scholarship-container">
                            <h2>Scholarship Information</h2>
                            <div class="scholarship-details">
                                <!-- Add your scholarship details here -->
                            </div>
                        </div>`;
                    document.querySelector('.main-content').appendChild(scholarshipSection);
                }
                scholarshipSection.style.display = 'block';
            }
        });
    }

    // Add School News functionality
const schoolNewsButton = document.querySelector('.grid-item:nth-child(7)');

if (schoolNewsButton) {
    schoolNewsButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Trigger the news link click event
        const newsLink = document.querySelector('.nav-menu a[href="#news"]');
        if (newsLink) {
            newsLink.click();
        }
    });
}


    // Add classes button functionality
    const classesLink = document.querySelector('.nav-menu a[href="#classes"]');
    const classesSection = document.createElement('div');
    classesSection.classList.add('classes-section');
    
    // Update the classes link click handler
    if (classesLink) {
        classesLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Classes button clicked');
            
            // Hide other sections
            if (dashboardContainer) dashboardContainer.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (todosSection) todosSection.style.display = 'none';
            if (mainContent) mainContent.style.display = 'block'; // Keep main content visible
            if (announcementsSection) announcementsSection.style.display = 'none';
            if (newsSection) newsSection.style.display = 'none';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            if (mvvSection) mvvSection.style.display = 'none';
            if (clinicSection) clinicSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';
            if (scholarshipSection) scholarshipSection.style.display = 'none';
            if (enrollmentSection) enrollmentSection.style.display = 'none';

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
                            <th>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
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
                         <tr>
                            <td class="time-column">3:00-4:30 PM</td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">COR 6d</div>
                                    <div class="teacher-name">MR. DELA CRUZ</div>
                                </div>
                            </td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">APP 7a</div>
                                    <div class="teacher-name">MS. BIODES</div>
                                </div>
                            </td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">STEM 8</div>
                                    <div class="teacher-name">MS. TUAZON</div>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div class="class-info">
                                    <div class="subject-code">STEM 7</div>
                                    <div class="teacher-name">MS. CAMPOREDONDO</div>
                                </div>
                            </td>
                        </tr>
                    </table>`;
    
    
            document.querySelector('.main-content').appendChild(classesSection);
        }
    
        // Show classes section
        classesSection.style.display = 'block';
        
        
    });
}
    
   
    
    // Add announcement button functionality
    const announcementLink = document.querySelector('.nav-menu a[href="#announcement"]');
    const announcementsSection = document.createElement('div');
    announcementsSection.classList.add('announcements-section');

    if (announcementLink) {
        announcementLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide other sections
            if (dashboardContainer) dashboardContainer.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (todosSection) todosSection.style.display = 'none';
            if (classesSection) classesSection.style.display = 'none';
            if (mainContent) mainContent.style.display = 'block';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            if (mvvSection) mvvSection.style.display = 'none';
            if (clinicSection) clinicSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';
            if (scholarshipSection) scholarshipSection.style.display = 'none';
            if (newsSection) newsSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';

            // Create announcements content if not exists
            if (!document.querySelector('.announcements-section')) {
                announcementsSection.innerHTML = `
                    <div class="announcement-card">
                        <div class="announcement-header">
                            <h3>Per Exam Updated</h3>
                            <span class="announcement-time">1 hour ago</span>
                        </div>
                        <div class="announcement-body">
                            <p>Dear Jim Ross Ryan,</p>
                            <p>Due to the changes in the amount of your total assessment, your per exam has been updated from 3490.00 to 3430.00 ----- 20251 for First Semester 2024-25.</p>
                            <p>For clarifications, please call the Student Accounting Office at (082) 227-5456 Local 119 or (082) 224-1465</p>
                        </div>
                    </div>

                    <div class="announcement-card">
                        <div class="announcement-header">
                            <h3>Announcement</h3>
                            <span class="announcement-time">2 hours ago</span>
                        </div>
                        <div class="announcement-body">
                            <p>To all Students:</p>
                            <p>Starting on Monday March 18, 2025, those students without uniform are not allowed to enter the school.</p>
                            <div class="announcement-footer">ADMIN OFFICE</div>
                        </div>
                    </div>`;

            // Add back button

            document.querySelector('.main-content').appendChild(announcementsSection);
            }

            // Show announcements section
            announcementsSection.style.display = 'block';
            
            // Update active state in navigation
            
        });
    }

    

    // Add news button functionality
    const newsLink = document.querySelector('.nav-menu a[href="#news"]');
    const newsSection = document.createElement('div');
    newsSection.classList.add('news-section');

    if (newsLink) {
        newsLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide other sections
            if (dashboardContainer) dashboardContainer.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (todosSection) todosSection.style.display = 'none';
            if (classesSection) classesSection.style.display = 'none';
            if (mainContent) mainContent.style.display = 'block';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            if (mvvSection) mvvSection.style.display = 'none';
            if (clinicSection) clinicSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';
            if (announcementsSection) announcementsSection.style.display = 'none';

            // Create news content if not exists
            if (!document.querySelector('.news-section')) {
                newsSection.innerHTML = `
                    <div class="header-images">
                        <img src="editorial.jpg.png" alt="Editorial" style="width: 250px; height: 150px; object-fit: cover;">
                        <img src="feature.jpg" alt="Feature" style="width: 250px; height: 150px; object-fit: cover;">
                        <img src="achievement.jpg" alt="News" style="width: 250px; height: 150px; object-fit: cover;">
                        <img src="swimming.jpg" alt="Sports" style="width: 250px; height: 150px; object-fit: cover;">
                    </div>
                    <div class="news-header">
                        <h1>THE TRIUMPHUS PRESS</h1>
                        <p>Echoing the Truth, Empowering the Unheard</p>
                    </div>
                    <div class="nav-tabs">
                        <div class="tab active">Editorial</div>
                        <div class="tab">Feature</div>
                        <div class="tab">News</div>
                        <div class="tab">Sports</div>
                    </div>
                    <div class="language-toggle">
                        <button class="active">ENGLISH</button>
                        <button>FILIPINO</button>
                    </div>
                    <div class="article-content">
                        <div class="heart-react">
                            <i class="far fa-heart"></i>
                            <span class="heart-count">3</span>
                        </div>
                        <h2>Clout <span class="highlight">Leader</span>ship</h2>
                        <p class="author">by Luis Gabriel Lapuz</p>
                        <div class="article-columns">
                            <div class="column">
                                <p>In the age of social media and digital influence, leadership has taken on a new dimension. The concept of "clout" - the influence or power held by an individual, particularly in the digital space - has become increasingly intertwined with traditional leadership roles.</p>
                                <p>Modern leaders must navigate both physical and digital realms, understanding that their influence extends beyond face-to-face interactions to include their online presence and digital footprint.</p>
                            </div>
                            <div class="column">
                                <p>However, this new paradigm of leadership brings both opportunities and challenges. While social media platforms provide leaders with unprecedented reach and engagement possibilities, they also demand authenticity, transparency, and consistent value delivery.</p>
                                <p>The question arises: How can leaders effectively balance their digital influence with their real-world responsibilities? The answer lies in understanding that true leadership transcends platforms and mediums.</p>
                            </div>
                            <div class="column">
                                <p>Effective leaders in today's world must focus on creating meaningful impact, whether online or offline. They must understand that clout, while powerful, is merely a tool - not the end goal. The true measure of leadership remains in the positive change and value created for others.</p>
                                <p>As we move forward in this digital age, let us remember that leadership is about service, not status.</p>
                            </div>
                        </div>
                        <div class="article-illustration" style="text-align: center; margin-top: 20px;">
                            <img src="editorial.jpg.png" alt="Leadership Illustration" style="width: 300px; height: 300px; object-fit: contain; margin: 30px auto;">
                        </div>
                    </div>
                    <div class="comment-section">
                        <div class="comment-input">
                            <img src="sirtan.jpg" alt="User Avatar" class="comment-avatar">
                            <input type="text" placeholder="Leave a comment">
                            <button class="comment-submit"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </div>`;

          

            // After appending newsSection to mainContent
            document.querySelector('.main-content').appendChild(newsSection);
            
            // Add language toggle functionality
            const languageButtons = newsSection.querySelectorAll('.language-toggle button');
            const englishContent = newsSection.querySelector('.english-content');
            const tagalogContent = newsSection.querySelector('.tagalog-content');
            
            languageButtons.forEach(button => {
                button.addEventListener('click', function() {
                    languageButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    if (this.dataset.lang === 'tl') {
                        englishContent.style.display = 'none';
                        tagalogContent.style.display = 'grid';
                    } else {
                        englishContent.style.display = 'grid';
                        tagalogContent.style.display = 'none';
                    }
                });
            });
        }

        newsSection.style.display = 'block';
        
        // Update active state in navigation
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
}


    
    // Add enrollment button functionality
    const enrollmentLink = document.querySelector('.nav-menu a[href="#enrollment"]');
    const enrollmentSection = document.querySelector('.enrollment-section');

    if (enrollmentLink) {
        enrollmentLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide other sections
            if (dashboardContainer) dashboardContainer.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (todosSection) todosSection.style.display = 'none';
            if (classesSection) classesSection.style.display = 'none';
            if (announcementsSection) announcementsSection.style.display = 'none';
            if (newsSection) newsSection.style.display = 'none';
            if (scholarshipSection) scholarshipSection.style.display = 'none';
            if (mvvSection) mvvSection.style.display = 'none';
            if (clinicSection) clinicSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';
    
            // Create enrollment content if not exists
            if (!document.querySelector('.enrollment-section')) {
                // Your enrollment section HTML content here
                document.querySelector('.main-content').appendChild(enrollmentSection);
            }
    
            // Show enrollment section
            enrollmentSection.style.display = 'block';
            
            // Update active state in navigation
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    }
    
    // Add MVV button functionality
    const mvvLink = document.querySelector('.nav-menu a[href="#mvv"]');
    const mvvSection = document.querySelector('.mvv-section');
   
    if (mvvLink) {
        mvvLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide other sections
            if (dashboardContainer) dashboardContainer.style.display = 'none';
            if (welcomeBanner) welcomeBanner.style.display = 'none';
            if (clearanceSection) clearanceSection.style.display = 'none';
            if (todosSection) todosSection.style.display = 'none';
            if (classesSection) classesSection.style.display = 'none';
            if (announcementsSection) announcementsSection.style.display = 'none';
            if (newsSection) newsSection.style.display = 'none';
            if (enrollmentSection) enrollmentSection.style.display = 'none';
            if (scholarshipSection) scholarshipSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';
            if (clinicSection) clinicSection.style.display = 'none'
            if (balanceSection) balanceSection.style.display = 'none';
            if (clinicSection) clinicSection.style.display = 'none';
            if (balanceSection) balanceSection.style.display = 'none';
            if (scholarshipSection) scholarshipSection.style.display = 'none';
          
           
            if (mainContent) mainContent.style.display = 'block';
            if (scholarshipSection) scholarshipSection.style.display = 'none';
            
            
            // Create MVV content if not exists
            
            
            // Show MVV section
            mvvSection.style.display = 'block';
            if (mainContent) mainContent.style.display = 'block';
            
            // Update active state in navigation
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    }
    
    // Function to handle logout
    function handleLogout(e) {
        e.preventDefault();
        console.log('Logout button clicked');
        if (loadingScreen) loadingScreen.classList.add('active');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 5000);
    }
    
    // Add event listeners to logout buttons
    if (sidebarLogoutButton) {
        sidebarLogoutButton.addEventListener('click', handleLogout);
    }
    
    if (navbarLogoutButton) {
        navbarLogoutButton.addEventListener('click', handleLogout);
    }
});

// Add this to handle notification bell click
document.querySelector('.bell-icon').addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdown = document.querySelector('.notification-dropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.notification-dropdown');
    if (!e.target.closest('.notification-dropdown') && !e.target.closest('.bell-icon')) {
        dropdown.style.display = 'none';
    }
});

// Add heart reaction functionality
const heartButton = newsSection.querySelector('.heart-react i');
const heartCount = newsSection.querySelector('.heart-count');
let isLiked = false;

heartButton.addEventListener('click', function() {
    isLiked = !isLiked;
    this.className = isLiked ? 'fas fa-heart' : 'far fa-heart';
    heartCount.textContent = isLiked ? '4' : '3';
    this.style.color = isLiked ? '#ff4444' : '#666';
});

// Inside the scholarship button click handler, after keeping main content visible


