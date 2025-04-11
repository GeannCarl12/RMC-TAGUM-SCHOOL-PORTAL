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
                        
                    </table>`;
    
    
            document.querySelector('.main-content').appendChild(classesSection);
        }
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
                        
                    </table>`;
    
    
            document.querySelector('.main-content').appendChild(classesSection);
        }
