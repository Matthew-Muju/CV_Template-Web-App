// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const cvPreview = document.getElementById('cv-preview');
const templateOptions = document.querySelectorAll('.template-option');
const toast = document.getElementById('toast');
const resetBtn = document.getElementById('reset-btn');
const helpBtn = document.getElementById('help-btn');
const printBtn = document.getElementById('print-btn');
const downloadPdfBtn = document.getElementById('download-pdf-btn');

// Form Elements
const fullNameInput = document.getElementById('full-name');
const jobTitleInput = document.getElementById('job-title');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const locationInput = document.getElementById('location');
const websiteInput = document.getElementById('website');
const summaryInput = document.getElementById('summary');
const expTitleInput = document.getElementById('exp-title');
const expCompanyInput = document.getElementById('exp-company');
const expDateInput = document.getElementById('exp-date');
const expDescriptionInput = document.getElementById('exp-description');
const eduDegreeInput = document.getElementById('edu-degree');
const eduSchoolInput = document.getElementById('edu-school');
const eduDateInput = document.getElementById('edu-date');
const skillsInput = document.getElementById('skills');

// Preview Elements
const previewName = document.getElementById('preview-name');
const previewTitle = document.getElementById('preview-title');
const previewEmail = document.getElementById('preview-email');
const previewPhone = document.getElementById('preview-phone');
const previewLocation = document.getElementById('preview-location');
const previewWebsite = document.getElementById('preview-website');
const previewSummary = document.getElementById('preview-summary');
const previewExpTitle = document.getElementById('preview-exp-title');
const previewExpCompany = document.getElementById('preview-exp-company');
const previewExpDate = document.getElementById('preview-exp-date');
const previewExpDescription = document.getElementById('preview-exp-description');
const previewEduDegree = document.getElementById('preview-edu-degree');
const previewEduSchool = document.getElementById('preview-edu-school');
const previewEduDate = document.getElementById('preview-edu-date');
const previewSkills = document.getElementById('preview-skills');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = 'light_mode';
    }

    // Check for saved template preference
    const savedTemplate = localStorage.getItem('template') || 'professional';
    setActiveTemplate(savedTemplate);

    // Load saved form data
    loadFormData();
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
});

// Template Selection
templateOptions.forEach(option => {
    option.addEventListener('click', () => {
        const template = option.getAttribute('data-template');
        setActiveTemplate(template);
        localStorage.setItem('template', template);
        showToast(`Template changed to ${template}`);
    });
});

function setActiveTemplate(template) {
    // Remove all template classes
    cvPreview.classList.remove(
        'template-professional', 'template-modern', 'template-creative',
        'template-minimal', 'template-dark', 'template-academic',
        'template-executive', 'template-tech', 'template-creative2', 'template-portfolio'
    );

    // Add the selected template class
    cvPreview.classList.add(`template-${template}`);

    // Update active state in template selector
    templateOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-template') === template) {
            option.classList.add('active');
        }
    });
}

// Form Input Handlers
fullNameInput.addEventListener('input', () => {
    previewName.textContent = fullNameInput.value || 'Your Name';
    saveFormData();
});

jobTitleInput.addEventListener('input', () => {
    previewTitle.textContent = jobTitleInput.value || 'Your Job Title';
    saveFormData();
});

emailInput.addEventListener('input', () => {
    previewEmail.textContent = emailInput.value || 'your.email@example.com';
    saveFormData();
});

phoneInput.addEventListener('input', () => {
    previewPhone.textContent = phoneInput.value || '+1 234 567 8900';
    saveFormData();
});

locationInput.addEventListener('input', () => {
    previewLocation.textContent = locationInput.value || 'Your Location';
    saveFormData();
});

websiteInput.addEventListener('input', () => {
    previewWebsite.textContent = websiteInput.value || 'www.yourwebsite.com';
    saveFormData();
});

summaryInput.addEventListener('input', () => {
    previewSummary.textContent = summaryInput.value || 'Your professional summary goes here. Briefly describe your background, skills, and what makes you a great candidate.';
    saveFormData();
});

expTitleInput.addEventListener('input', () => {
    previewExpTitle.textContent = expTitleInput.value || 'Job Title';
    saveFormData();
});

expCompanyInput.addEventListener('input', () => {
    previewExpCompany.textContent = expCompanyInput.value || 'Company Name';
    saveFormData();
});

expDateInput.addEventListener('input', () => {
    previewExpDate.textContent = expDateInput.value || 'Date';
    saveFormData();
});

expDescriptionInput.addEventListener('input', () => {
    previewExpDescription.textContent = expDescriptionInput.value || 'Description of your responsibilities and achievements in this role.';
    saveFormData();
});

eduDegreeInput.addEventListener('input', () => {
    previewEduDegree.textContent = eduDegreeInput.value || 'Degree';
    saveFormData();
});

eduSchoolInput.addEventListener('input', () => {
    previewEduSchool.textContent = eduSchoolInput.value || 'School Name';
    saveFormData();
});

eduDateInput.addEventListener('input', () => {
    previewEduDate.textContent = eduDateInput.value || 'Date';
    saveFormData();
});

skillsInput.addEventListener('input', () => {
    const skills = skillsInput.value.split(',').map(skill => skill.trim()).filter(skill => skill);
    previewSkills.innerHTML = '';
    
    if (skills.length === 0) {
        previewSkills.innerHTML = '<div class="skill-tag">Skill 1</div><div class="skill-tag">Skill 2</div><div class="skill-tag">Skill 3</div>';
    } else {
        skills.forEach(skill => {
            const skillTag = document.createElement('div');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            previewSkills.appendChild(skillTag);
        });
    }
    
    saveFormData();
});

// Save Form Data to Local Storage
function saveFormData() {
    const formData = {
        fullName: fullNameInput.value,
        jobTitle: jobTitleInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        location: locationInput.value,
        website: websiteInput.value,
        summary: summaryInput.value,
        expTitle: expTitleInput.value,
        expCompany: expCompanyInput.value,
        expDate: expDateInput.value,
        expDescription: expDescriptionInput.value,
        eduDegree: eduDegreeInput.value,
        eduSchool: eduSchoolInput.value,
        eduDate: eduDateInput.value,
        skills: skillsInput.value
    };
    
    localStorage.setItem('cvFormData', JSON.stringify(formData));
}

// Load Form Data from Local Storage
function loadFormData() {
    const savedData = localStorage.getItem('cvFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        
        fullNameInput.value = formData.fullName || '';
        jobTitleInput.value = formData.jobTitle || '';
        emailInput.value = formData.email || '';
        phoneInput.value = formData.phone || '';
        locationInput.value = formData.location || '';
        websiteInput.value = formData.website || '';
        summaryInput.value = formData.summary || '';
        expTitleInput.value = formData.expTitle || '';
        expCompanyInput.value = formData.expCompany || '';
        expDateInput.value = formData.expDate || '';
        expDescriptionInput.value = formData.expDescription || '';
        eduDegreeInput.value = formData.eduDegree || '';
        eduSchoolInput.value = formData.eduSchool || '';
        eduDateInput.value = formData.eduDate || '';
        skillsInput.value = formData.skills || '';
        
        // Trigger input events to update preview
        fullNameInput.dispatchEvent(new Event('input'));
        jobTitleInput.dispatchEvent(new Event('input'));
        emailInput.dispatchEvent(new Event('input'));
        phoneInput.dispatchEvent(new Event('input'));
        locationInput.dispatchEvent(new Event('input'));
        websiteInput.dispatchEvent(new Event('input'));
        summaryInput.dispatchEvent(new Event('input'));
        expTitleInput.dispatchEvent(new Event('input'));
        expCompanyInput.dispatchEvent(new Event('input'));
        expDateInput.dispatchEvent(new Event('input'));
        expDescriptionInput.dispatchEvent(new Event('input'));
        eduDegreeInput.dispatchEvent(new Event('input'));
        eduSchoolInput.dispatchEvent(new Event('input'));
        eduDateInput.dispatchEvent(new Event('input'));
        skillsInput.dispatchEvent(new Event('input'));
    }
}

// Reset Form
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (confirm('Are you sure you want to reset all data?')) {
        // Clear form inputs
        fullNameInput.value = '';
        jobTitleInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        locationInput.value = '';
        websiteInput.value = '';
        summaryInput.value = '';
        expTitleInput.value = '';
        expCompanyInput.value = '';
        expDateInput.value = '';
        expDescriptionInput.value = '';
        eduDegreeInput.value = '';
        eduSchoolInput.value = '';
        eduDateInput.value = '';
        skillsInput.value = '';
        
        // Reset preview
        previewName.textContent = 'Your Name';
        previewTitle.textContent = 'Your Job Title';
        previewEmail.textContent = 'your.email@example.com';
        previewPhone.textContent = '+1 234 567 8900';
        previewLocation.textContent = 'Your Location';
        previewWebsite.textContent = 'www.yourwebsite.com';
        previewSummary.textContent = 'Your professional summary goes here. Briefly describe your background, skills, and what makes you a great candidate.';
        previewExpTitle.textContent = 'Job Title';
        previewExpCompany.textContent = 'Company Name';
        previewExpDate.textContent = 'Date';
        previewExpDescription.textContent = 'Description of your responsibilities and achievements in this role.';
        previewEduDegree.textContent = 'Degree';
        previewEduSchool.textContent = 'School Name';
        previewEduDate.textContent = 'Date';
        previewSkills.innerHTML = '<div class="skill-tag">Skill 1</div><div class="skill-tag">Skill 2</div><div class="skill-tag">Skill 3</div>';
        
        // Clear local storage
        localStorage.removeItem('cvFormData');
        
        showToast('All data has been reset');
    }
});

// Help Button
helpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('Fill in your information in the form on the left, and it will appear in the preview on the right. Choose a template and download your CV when ready.');
});

// Print Function
printBtn.addEventListener('click', () => {
    window.print();
    showToast('Print dialog opened');
});

// Download PDF Function
downloadPdfBtn.addEventListener('click', () => {
    downloadPdfBtn.innerHTML = '<span class="spinner"></span> Generating PDF...';
    downloadPdfBtn.disabled = true;
    
    // Hide action buttons temporarily
    const actionButtons = document.querySelector('.action-buttons');
    actionButtons.style.display = 'none';
    
    // Use html2canvas and jsPDF to generate PDF
    html2canvas(cvPreview, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: document.body.getAttribute('data-theme') === 'dark' ? '#1a1a2e' : '#ffffff'
    }).then(canvas => {
        // Show action buttons again
        actionButtons.style.display = 'flex';
        
        // Create PDF
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        // Download the PDF
        pdf.save(`${fullNameInput.value || 'CV'}.pdf`);
        
        // Reset button
        downloadPdfBtn.innerHTML = '<i class="material-icons">picture_as_pdf</i> Download PDF';
        downloadPdfBtn.disabled = false;
        
        showToast('PDF downloaded successfully');
    }).catch(error => {
        // Show action buttons again
        actionButtons.style.display = 'flex';
        
        // Reset button
        downloadPdfBtn.innerHTML = '<i class="material-icons">picture_as_pdf</i> Download PDF';
        downloadPdfBtn.disabled = false;
        
        showToast('Error generating PDF. Please try again.');
        console.error('Error generating PDF:', error);
    });
});

// Toast Notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Add animation to elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
