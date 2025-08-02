// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyChg5hLux3sb6wWnI-gTawGmN7nNBluOuA",
    authDomain: "bluemarksdocuments.firebaseapp.com",
    projectId: "bluemarksdocuments",
    storageBucket: "bluemarksdocuments.firebasestorage.app",
    messagingSenderId: "270747098179",
    appId: "1:270747098179:web:da206e8bd59b004f1648f6",
    measurementId: "G-E05L9L652B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Company Contact Information
const COMPANY_INFO = {
    phone: "+971566229773",
    whatsapp: "+971566229773",
    location: "25.2600,55.3029", // Al Rigga, Deira, Dubai coordinates
    address: "Office: 304 Al Hawai Building, Al Rigga Road, Deira, Dubai, UAE"
};

// Side Menu Functions
function toggleSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('active');
}

function makeCall() {
    window.open(`tel:${COMPANY_INFO.phone}`);
    toggleSideMenu();
}

function openLocation() {
    const [lat, lng] = COMPANY_INFO.location.split(',');
    window.open(`https://www.google.com/maps?q=${lat},${lng}`);
    toggleSideMenu();
}

function openWhatsApp() {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`);
    toggleSideMenu();
}

function showServices() {
    // Show detailed services section
    showDetailedServices();
    toggleSideMenu();
}

function showMedicalTest() {
    openServiceForm('medical-test');
    toggleSideMenu();
}

function showAbout() {
    // Scroll to about section (you can add an about section later)
    alert('About section coming soon!');
    toggleSideMenu();
}

// Services Dropdown Functions
let servicesDropdownTimeout;

function showServicesDropdown() {
    clearTimeout(servicesDropdownTimeout);
    const dropdown = document.getElementById('servicesDropdown');
    dropdown.classList.add('show');
}

function hideServicesDropdown() {
    servicesDropdownTimeout = setTimeout(() => {
        const dropdown = document.getElementById('servicesDropdown');
        dropdown.classList.remove('show');
    }, 300);
}

// Show/Hide Detailed Services Functions
function showDetailedServices() {
    document.querySelector('.most-used-services').style.display = 'none';
    document.querySelector('.services-section').style.display = 'block';
    document.querySelector('.services-section').scrollIntoView({ behavior: 'smooth' });
}

function hideDetailedServices() {
    document.querySelector('.services-section').style.display = 'none';
    document.querySelector('.most-used-services').style.display = 'block';
    document.querySelector('.most-used-services').scrollIntoView({ behavior: 'smooth' });
}

// Service Categories Functions
function showServiceCategory(categoryId) {
    // Hide all service categories
    const categories = document.querySelectorAll('.service-category');
    categories.forEach(category => category.classList.remove('active'));
    
    // Show selected category
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.classList.add('active');
    }
    
    // Update category buttons
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Service Details Database
const serviceDetails = {
    // Entry Permits
    'EP0101': { name: 'New Entry Permit for Son or Daughter', category: 'Entry Permits', sponsor: 'Investor or Partner-dxb residence Visa holder', duration: '3-Days', price: 'AED 530' },
    'EP0102': { name: 'New Entry Permit for Son or Daughter', category: 'Entry Permits', sponsor: 'working in Govt. Sector- dxb res. Visa holder', duration: '3-Days', price: 'AED 530' },
    'EP0103': { name: 'New Entry Permit for Son or Daughter', category: 'Entry Permits', sponsor: 'working in Private sector or free zone DXB res. visa holder', duration: '3-Days', price: 'AED 580' },
    'EP0104': { name: 'New Entry Permit for Son or Daughter', category: 'Entry Permits', sponsor: 'UAE citizen', duration: '3-Days', price: 'AED 280' },
    'EP0105': { name: 'New Entry Permit for Wife', category: 'Entry Permits', sponsor: 'Investor or Partner- dxb residence. Visa holder', duration: '1-Week', price: 'AED 630' },
    'EP0106': { name: 'New Entry Permit for Wife', category: 'Entry Permits', sponsor: 'working in Government Sector', duration: '1-Week', price: 'AED 630' },
    'EP0107': { name: 'New Entry Permit for Wife', category: 'Entry Permits', sponsor: 'working in private sector or free zone-dxb res. Visa holder', duration: '1-Week', price: 'AED 680' },
    'EP0108': { name: 'New Entry Permit for Wife', category: 'Entry Permits', sponsor: 'UAE citizen', duration: '1-Week', price: 'AED 330' },
    'EP0109': { name: 'New Entry Permit for Parents', category: 'Entry Permits', sponsor: 'Investor or Partner -dxb res. Visa holder', duration: '1-Week', price: 'AED 630' },
    'EP0110': { name: 'New Entry Permit for Parents', category: 'Entry Permits', sponsor: 'working in Government Sector-dxb res. Visa holder', duration: '1-Week', price: 'AED 630' },
    'EP0111': { name: 'New Entry Permit for Parents', category: 'Entry Permits', sponsor: 'working in Private Sector or free zone –dxb residence. Visa holder', duration: '1-Week', price: 'AED 680' },
    'EP0112': { name: 'New Entry Permit for Parents', category: 'Entry Permits', sponsor: 'UAE Citizen', duration: '1-Week', price: 'AED 330' },
    'EP0113': { name: 'New Entry Permit for Partner & Investor', category: 'Entry Permits', sponsor: 'Partner & Investor', duration: '1-Week', price: 'AED 3,150' },
    'EP0114': { name: 'Cancellation – Entry Permit (After Entry)', category: 'Entry Permits', sponsor: 'Family', duration: '1-Day', price: 'AED 150' },
    'EP0115': { name: 'Cancellation – Entry Permit (After Entry)', category: 'Entry Permits', sponsor: 'Company', duration: '1-Day', price: 'AED 200' },
    'EP0116': { name: 'New Entry Permit for Husband', category: 'Entry Permits', sponsor: 'working in the private sector or free zone - dxb residence. Visa holder', duration: '1-Week', price: 'AED 680' },
    
    // Residency Services
    'RS0201': { name: 'Residence Visa Renewal 3 Years', category: 'Residency Services', sponsor: 'wife or Children /Sponsor (Investor or Partner -dxb res. Visa holder)', duration: '1-Week', price: 'AED 1,180' },
    'RS0202': { name: 'Residence Visa Renewal 3 Years', category: 'Residency Services', sponsor: 'wife or Children /Sponsor (working in Govt. Sector or Free zone –dxb residence. Visa holder)', duration: '1-Week', price: 'AED 1,180' },
    'RS0203': { name: 'Residence Visa Renewal 2 Years', category: 'Residency Services', sponsor: 'wife or Children /Sponsor (working in the private sector or Free zone–dxb residence. Visa holder)', duration: '1-Week', price: 'AED 1,030' },
    'RS0204': { name: 'Residence Visa Renewal for Son above 18', category: 'Residency Services', sponsor: 'Investor or Partner -dxb residence. Visa holder', duration: '1-Week', price: 'AED 1,280' },
    'RS0212': { name: 'Newborn Residence Visa', category: 'Residency Services', sponsor: 'Investor or Partner -dxb residence Visa holder', duration: '1-Week', price: 'AED 730' },
    'RS0217': { name: 'Change Status / Family', category: 'Residency Services', sponsor: 'Family Status Change Service', duration: '1-Week', price: 'AED 950' },
    
    // Emirates ID
    'EI0601': { name: 'Newborn / 1 Year Emirates ID', category: 'Emirates ID', sponsor: 'Emirates ID for newborn (1 Year validity)', duration: '1-Week' },
    'EI0602': { name: 'New Residency (First time) / 1 Year Emirates ID', category: 'Emirates ID', sponsor: 'First time visiting UAE (1 Year validity)', duration: '1-Week' },
    'EI0612': { name: 'New Residency (First time) / 3 Year Emirates ID', category: 'Emirates ID', sponsor: 'First time visiting UAE (3 Year validity)', duration: '1-Week' },
    'EI0614': { name: 'Emirates ID Renewal / 3 Year', category: 'Emirates ID', sponsor: 'Emirates ID Renewal (3 Year validity)', duration: '1-Week' },
    
    // Medical Examination
    'M0701': { name: 'New Entry – Normal 5 to 6 Days Medical', category: 'Medical Examination', sponsor: 'Standard medical examination for new entry', duration: 'Normal', price: 'AED 382.50' },
    'M0702': { name: 'New Entry – Urgent 48 Hours', category: 'Medical Examination', sponsor: 'Urgent medical examination for new entry (48 hours)', duration: 'Urgent-48h', price: 'AED 492.50' },
    'M0703': { name: 'New Entry – Urgent 24 Hours', category: 'Medical Examination', sponsor: 'Express medical examination for new entry (24 hours)', duration: 'Urgent-24h', price: 'AED 592.50' },
    'M0704': { name: 'New Entry – VIP', category: 'Medical Examination', sponsor: 'VIP medical examination service for new entry', duration: 'VIP', price: 'AED 810.50' },
    'M0705': { name: 'Residency Renewal – Normal 5 to 6 Days', category: 'Medical Examination', sponsor: 'Standard medical examination for residency renewal', duration: 'Normal', price: 'AED 382.50' },
    'M0708': { name: 'Residency Renewal – VIP', category: 'Medical Examination', sponsor: 'VIP medical examination for residency renewal', duration: 'VIP', price: 'AED 810.50' },
    
    // Establishments
    'EST001': { name: 'Business License Application', category: 'Establishments', sponsor: 'New business license application and processing', duration: '2-Weeks' },
    'EST002': { name: 'Trade License Renewal', category: 'Establishments', sponsor: 'Annual trade license renewal service', duration: '1-Week' },
    'EST003': { name: 'Establishment Card', category: 'Establishments', sponsor: 'New establishment card application', duration: '1-Week' },
    
    // Additional Services
    'amer-services': { name: 'Amer Services', category: 'Government Services', sponsor: 'General Directorate of Residency and Foreigners Affairs services', duration: '1-Week' },
    'tasheel-services': { name: 'Tasheel Services', category: 'Government Services', sponsor: 'Emirates Post and Tasheel services for government transactions', duration: '3-5 Days' },
    'ded-services': { name: 'DED Services', category: 'Business Services', sponsor: 'Department of Economic Development services', duration: '1-2 Weeks' },
    'uae-visas': { name: 'UAE Visas', category: 'Visa Services', sponsor: 'All types of UAE visa applications and processing', duration: '1-2 Weeks' },
    'worldwide-visas': { name: 'Worldwide Visas', category: 'Visa Services', sponsor: 'International visa applications for all countries', duration: '2-4 Weeks' },
    'entry-permit': { name: 'Entry Permit', category: 'Visa Services', sponsor: 'Entry permit applications for UAE', duration: '3-7 Days' },
    'new-visa': { name: 'New Visa', category: 'Visa Services', sponsor: 'New visa applications for UAE residence', duration: '1-2 Weeks' },
    'visa-renewal': { name: 'Visa Renewal', category: 'Visa Services', sponsor: 'UAE residence visa renewal services', duration: '1 Week' },
    'new-emirates': { name: 'New Emirates ID', category: 'Government Services', sponsor: 'New Emirates ID application and processing', duration: '1 Week' },
    'status-change': { name: 'Status Change', category: 'Visa Services', sponsor: 'Visa status change services', duration: '1-2 Weeks' },
    'visa-stamping': { name: 'Visa Stamping', category: 'Visa Services', sponsor: 'Visa stamping services', duration: '1-3 Days' },
    'establishment-card': { name: 'Establishment Card', category: 'Business Services', sponsor: 'Company establishment card services', duration: '1 Week' },
    'work-permit': { name: 'Work Permit', category: 'Employment Services', sponsor: 'Work permit applications and renewals', duration: '1-2 Weeks' }
};

// Service Modal Functions
function openServiceForm(serviceCode) {
    const modal = document.getElementById('serviceModal');
    const title = document.getElementById('serviceTitle');
    const goldenVisaFields = document.getElementById('goldenVisaFields');
    
    // Get service details
    const service = serviceDetails[serviceCode];
    if (service) {
        title.textContent = `${service.name} (${serviceCode})`;
    } else {
        title.textContent = `Service Application (${serviceCode})`;
    }
    
    // Show/hide Golden Visa specific fields
    if (serviceCode === 'golden-visa') {
        goldenVisaFields.style.display = 'block';
        document.getElementById('goldenVisaType').required = true;
    } else {
        goldenVisaFields.style.display = 'none';
        document.getElementById('goldenVisaType').required = false;
    }
    
    // Store service code for form submission
    document.getElementById('serviceForm').dataset.serviceCode = serviceCode;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('serviceForm').reset();
}

function openEasyApply() {
    // Open a general application form
    openServiceForm('general');
}

// Form Submission Functions
async function submitServiceForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const serviceCode = form.dataset.serviceCode;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Submitting...';
    submitBtn.disabled = true;
    
    try {
        // Get service details
        const service = serviceDetails[serviceCode];
        
        // Collect form data
        const formData = {
            serviceCode: serviceCode,
            serviceName: service ? service.name : 'Unknown Service',
            serviceCategory: service ? service.category : 'Unknown',
            serviceDuration: service ? service.duration : 'Unknown',
            fullName: document.getElementById('fullName').value,
            applicantEmail: document.getElementById('applicantEmail').value,
            whatsappNumber: document.getElementById('whatsappNumber').value,
            ibanNumber: document.getElementById('ibanNumber').value,
            submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'pending'
        };
        
        // Only add price if it exists
        if (service && service.price) {
            formData.servicePrice = service.price;
        }
        
        // Add Golden Visa specific data if applicable
        if (serviceCode === 'golden-visa') {
            formData.goldenVisaType = document.getElementById('goldenVisaType').value;
        }
        
        // Handle file uploads - convert to base64
        const fileInputs = form.querySelectorAll('input[type="file"]');
        const files = {};
        
        for (const input of fileInputs) {
            if (input.files[0]) {
                try {
                    const base64Data = await convertFileToBase64(input.files[0]);
                    files[input.id] = {
                        name: input.files[0].name,
                        size: input.files[0].size,
                        type: input.files[0].type,
                        data: base64Data
                    };
                } catch (error) {
                    console.error(`Error converting file ${input.id}:`, error);
                    // Store without data if conversion fails
                    files[input.id] = {
                        name: input.files[0].name,
                        size: input.files[0].size,
                        type: input.files[0].type,
                        error: 'Failed to convert file'
                    };
                }
            }
        }
        
        if (Object.keys(files).length > 0) {
            formData.documents = files;
        }
        
        // Save to Firestore
        await db.collection('serviceApplications').add(formData);
        
        // Show success message
        showMessage('Application submitted successfully! We will contact you soon.', 'success');
        
        // Close modal and reset form
        closeServiceModal();
        
    } catch (error) {
        console.error('Error submitting application:', error);
        showMessage('Error submitting application. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

async function submitContactForm(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    try {
        const contactData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            phone: document.getElementById('contactPhone').value,
            message: document.getElementById('contactMessage').value,
            submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'new'
        };
        
        await db.collection('contactMessages').add(contactData);
        
        showMessage('Message sent successfully! We will get back to you soon.', 'success');
        
        // Reset form
        event.target.reset();
        
    } catch (error) {
        console.error('Error sending message:', error);
        showMessage('Error sending message. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

async function subscribeToMailing() {
    const emailInput = document.getElementById('mailingEmail');
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    try {
        await db.collection('mailingList').add({
            email: email,
            subscribedAt: firebase.firestore.FieldValue.serverTimestamp(),
            status: 'active'
        });
        
        showMessage('Successfully subscribed to our mailing list!', 'success');
        emailInput.value = '';
        
    } catch (error) {
        console.error('Error subscribing to mailing list:', error);
        showMessage('Error subscribing. Please try again.', 'error');
    }
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Insert at top of body
    document.body.insertBefore(messageDiv, document.body.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('serviceModal');
        if (event.target === modal) {
            closeServiceModal();
        }
    });
    
    // Close side menu when clicking outside
    document.addEventListener('click', function(event) {
        const sideMenu = document.getElementById('sideMenu');
        const menuDots = document.querySelector('.menu-dots');
        
        if (!sideMenu.contains(event.target) && !menuDots.contains(event.target)) {
            sideMenu.classList.remove('active');
        }
    });
    
    // Add active class to current nav item on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Blog Section Functions
function showBlogSection() {
    console.log('showBlogSection called');
    
    try {
        // Hide other sections
        const hero = document.querySelector('.hero');
        const services = document.querySelector('.most-used-services');
        const detailedServices = document.querySelector('.services-section');
        const featuredBlog = document.querySelector('.featured-blog');
        const partners = document.querySelector('.partners');
        const mailing = document.querySelector('.mailing-list');
        const contact = document.querySelector('.contact-form');
        
        if (hero) hero.style.display = 'none';
        if (services) services.style.display = 'none';
        if (detailedServices) detailedServices.style.display = 'none';
        if (featuredBlog) featuredBlog.style.display = 'none';
        if (partners) partners.style.display = 'none';
        if (mailing) mailing.style.display = 'none';
        if (contact) contact.style.display = 'none';
        
        // Show blog section
        const blogSection = document.querySelector('.blog-section');
        if (blogSection) {
            blogSection.style.display = 'block';
            console.log('Blog section displayed');
            blogSection.scrollIntoView({ behavior: 'smooth' });
            
            // Load blog posts
            loadBlogPosts();
        } else {
            console.error('Blog section not found');
        }
    } catch (error) {
        console.error('Error in showBlogSection:', error);
    }
}

function hideBlogSection() {
    // Show other sections
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.most-used-services').style.display = 'block';
    document.querySelector('.services-section').style.display = 'none'; // Keep detailed services hidden
    document.querySelector('.featured-blog').style.display = 'block';
    document.querySelector('.partners').style.display = 'block';
    document.querySelector('.mailing-list').style.display = 'block';
    document.querySelector('.contact-form').style.display = 'block';
    
    // Hide blog section
    document.querySelector('.blog-section').style.display = 'none';
    document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
}

// Blog pagination variables
let currentBlogPage = 1;
let lastBlogDoc = null;
const BLOG_POSTS_PER_PAGE = 6;

// Load Blog Posts for Main Website
function loadBlogPosts() {
    const blogPosts = document.getElementById('blogPosts');
    blogPosts.innerHTML = '<div class="loading-animation">Loading blog posts...</div>';
    
    // Reset pagination
    currentBlogPage = 1;
    lastBlogDoc = null;
    
    db.collection('posts')
        .orderBy('createdAt', 'desc')
        .limit(BLOG_POSTS_PER_PAGE)
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                blogPosts.innerHTML = `
                    <div class="no-data" style="text-align: center; padding: 3rem; color: #666;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">📝</div>
                        <h3 style="color: #059669; margin-bottom: 1rem;">No Blog Posts Yet</h3>
                        <p>Our team is working on creating amazing content for you. Check back soon!</p>
                    </div>
                `;
                return;
            }

            // Store last document for pagination
            lastBlogDoc = snapshot.docs[snapshot.docs.length - 1];
            
            let html = '<div class="blog-grid">';
            snapshot.forEach(doc => {
                const post = doc.data();
                const postId = doc.id;
                const createdDate = post.createdAt ? post.createdAt.toDate().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) : 'Unknown Date';
                
                // Extract featured image or first image for preview
                let previewImage = '';
                if (post.featuredImage && post.featuredImage.data) {
                    previewImage = `<div class="blog-preview-image">
                        <img src="${post.featuredImage.data}" alt="${post.title}" loading="lazy">
                    </div>`;
                } else if (post.images && post.images.length > 0) {
                    previewImage = `<div class="blog-preview-image">
                        <img src="${post.images[0].data}" alt="${post.title}" loading="lazy">
                    </div>`;
                }
                
                // Create excerpt from content (strip HTML and limit words)
                const excerpt = extractExcerpt(post.content, 30);
                
                const featuredBadge = post.featured ? 
                    '<div style="position: absolute; top: 10px; right: 10px; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600;">⭐ Featured</div>' : '';
                
                html += `
                    <article class="blog-card" onclick="openBlogPost('${postId}')" style="position: relative;">
                        ${featuredBadge}
                        ${previewImage}
                        <div class="blog-card-content">
                            <h4 class="blog-card-title">${post.title}</h4>
                            <div class="blog-card-meta">
                                <span class="blog-author">📝 ${post.author}</span>
                                <span class="blog-date">📅 ${createdDate}</span>
                            </div>
                            <p class="blog-excerpt">${excerpt}</p>
                            <button class="read-more-btn">Read More →</button>
                        </div>
                    </article>
                `;
            });
            html += '</div>';
            
            blogPosts.innerHTML = html;
            
            // Show/hide load more button
            if (snapshot.docs.length === BLOG_POSTS_PER_PAGE) {
                document.getElementById('loadMoreBtn').style.display = 'inline-block';
            } else {
                document.getElementById('loadMoreBtn').style.display = 'none';
            }
            
        }).catch(error => {
            console.error('Error loading blog posts:', error);
            blogPosts.innerHTML = `
                <div class="error-state" style="text-align: center; padding: 3rem; color: #dc2626;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
                    <h3>Error Loading Blog Posts</h3>
                    <p>Something went wrong. Please try again later.</p>
                    <button class="btn btn-primary" onclick="loadBlogPosts()" style="margin-top: 1rem;">Try Again</button>
                </div>
            `;
        });
}

// Load more blog posts
function loadMoreBlogs() {
    if (!lastBlogDoc) return;
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.innerHTML = 'Loading...';
    loadMoreBtn.disabled = true;
    
    db.collection('posts')
        .orderBy('createdAt', 'desc')
        .startAfter(lastBlogDoc)
        .limit(BLOG_POSTS_PER_PAGE)
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                loadMoreBtn.style.display = 'none';
                return;
            }
            
            // Update last document
            lastBlogDoc = snapshot.docs[snapshot.docs.length - 1];
            
            const blogGrid = document.querySelector('.blog-grid');
            snapshot.forEach(doc => {
                const post = doc.data();
                const postId = doc.id;
                const createdDate = post.createdAt ? post.createdAt.toDate().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) : 'Unknown Date';
                
                let previewImage = '';
                if (post.images && post.images.length > 0) {
                    previewImage = `<div class="blog-preview-image">
                        <img src="${post.images[0].data}" alt="${post.title}" loading="lazy">
                    </div>`;
                }
                
                const excerpt = extractExcerpt(post.content, 30);
                
                const blogCard = document.createElement('article');
                blogCard.className = 'blog-card';
                blogCard.onclick = () => openBlogPost(postId);
                blogCard.innerHTML = `
                    ${previewImage}
                    <div class="blog-card-content">
                        <h4 class="blog-card-title">${post.title}</h4>
                        <div class="blog-card-meta">
                            <span class="blog-author">📝 ${post.author}</span>
                            <span class="blog-date">📅 ${createdDate}</span>
                        </div>
                        <p class="blog-excerpt">${excerpt}</p>
                        <button class="read-more-btn">Read More →</button>
                    </div>
                `;
                
                blogGrid.appendChild(blogCard);
            });
            
            // Show/hide load more button
            if (snapshot.docs.length < BLOG_POSTS_PER_PAGE) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.innerHTML = 'Load More Posts';
                loadMoreBtn.disabled = false;
            }
            
        }).catch(error => {
            console.error('Error loading more posts:', error);
            loadMoreBtn.innerHTML = 'Error - Try Again';
            loadMoreBtn.disabled = false;
        });
}

// Extract excerpt from HTML content
function extractExcerpt(content, wordLimit = 30) {
    // Strip HTML tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content || '';
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    // Split into words and limit
    const words = textContent.trim().split(/\s+/);
    if (words.length <= wordLimit) {
        return textContent;
    }
    
    return words.slice(0, wordLimit).join(' ') + '...';
}

// Open individual blog post
function openBlogPost(postId) {
    // First ensure the blog section is visible
    showBlogSection();
    
    // Small delay to ensure the blog section is rendered
    setTimeout(() => {
        db.collection('posts').doc(postId).get().then(doc => {
            if (!doc.exists) {
                alert('Blog post not found');
                return;
            }
            
            const post = doc.data();
            const createdDate = post.createdAt ? post.createdAt.toDate().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }) : 'Unknown Date';
            
            // Display images if available
            let imagesHtml = '';
            if (post.images && post.images.length > 0) {
                imagesHtml = '<div class="blog-post-images">';
                post.images.forEach(image => {
                    imagesHtml += `<img src="${image.data}" alt="${image.name}" style="max-width: 100%; height: auto; margin: 1rem 0; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">`;
                });
                imagesHtml += '</div>';
            }
            
            // Create full blog post view
            const blogPosts = document.getElementById('blogPosts');
        blogPosts.innerHTML = `
            <div class="single-blog-post">
                <button class="btn btn-secondary" onclick="loadBlogPosts()" style="margin-bottom: 2rem;">← Back to All Posts</button>
                
                <article class="full-blog-post">
                    <header class="blog-post-header">
                        <h1 class="blog-post-title">${post.title}</h1>
                        <div class="blog-post-meta">
                            <span class="blog-author">📝 By ${post.author}</span>
                            <span class="blog-date">📅 ${createdDate}</span>
                        </div>
                    </header>
                    
                    ${imagesHtml}
                    
                    <div class="blog-post-content">
                        ${post.content}
                    </div>
                    
                    <footer class="blog-post-footer">
                        <div class="blog-actions">
                            <button class="btn btn-primary" onclick="loadBlogPosts()">← Read More Posts</button>
                            <button class="btn btn-secondary" onclick="shareBlogPost('${post.title}', '${postId}')">📤 Share</button>
                        </div>
                    </footer>
                </article>
            </div>
        `;
            
            // Hide load more button
            document.getElementById('loadMoreBtn').style.display = 'none';
            
        }).catch(error => {
            console.error('Error loading blog post:', error);
            alert('Error loading blog post');
        });
    }, 100);
}

// Share blog post
function shareBlogPost(title, postId) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: `Check out this blog post: ${title}`,
            url: window.location.href + '#blog-' + postId
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href + '#blog-' + postId;
        navigator.clipboard.writeText(url).then(() => {
            showMessage('Blog post link copied to clipboard!', 'success');
        }).catch(() => {
            prompt('Copy this link to share:', url);
        });
    }
}

// Load Featured Posts for Homepage
function loadFeaturedPosts() {
    const featuredPosts = document.getElementById('featuredPosts');
    featuredPosts.innerHTML = '<div class="loading-animation">Loading featured posts...</div>';
    
    // Query for featured posts or latest 5 posts
    db.collection('posts')
        .where('featured', '==', true)  // First try featured posts
        .orderBy('createdAt', 'desc')
        .limit(5)
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                // If no featured posts, get latest 5 posts
                return db.collection('posts')
                    .orderBy('createdAt', 'desc')
                    .limit(5)
                    .get();
            }
            return snapshot;
        })
        .then(snapshot => {
            if (snapshot.empty) {
                featuredPosts.innerHTML = `
                    <div class="no-data" style="text-align: center; padding: 2rem; color: #666;">
                        <div style="font-size: 2rem; margin-bottom: 1rem;">📝</div>
                        <h4 style="color: #059669; margin-bottom: 0.5rem;">No Posts Yet</h4>
                        <p>Check back soon for updates!</p>
                    </div>
                `;
                return;
            }
            
            let featuredHTML = '';
            snapshot.forEach(doc => {
                const post = doc.data();
                const truncatedContent = post.content ? 
                    post.content.substring(0, 100) + (post.content.length > 100 ? '...' : '') : 
                    'No content available';
                
                const formattedDate = post.createdAt ? 
                    new Date(post.createdAt.seconds * 1000).toLocaleDateString() : 
                    'Unknown date';
                
                // Check for featured image first, then fall back to first image in images array
                let featuredImageHtml = '📝'; // Default emoji
                
                // Debug logging
                console.log('Post data for featured image check:', {
                    postId: doc.id,
                    title: post.title,
                    hasFeaturedImage: !!(post.featuredImage && post.featuredImage.data),
                    hasImages: !!(post.images && post.images.length > 0),
                    imagesCount: post.images ? post.images.length : 0
                });
                
                if (post.featuredImage && post.featuredImage.data) {
                    console.log('Using featured image for post:', post.title);
                    featuredImageHtml = `<img src="${post.featuredImage.data}" alt="${post.title}" 
                        style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"
                        onload="console.log('Featured image loaded successfully for:', '${post.title}')"
                        onerror="console.error('Failed to load featured image for:', '${post.title}')">`;
                } else if (post.images && post.images.length > 0 && post.images[0].data) {
                    console.log('Using first image from images array for post:', post.title);
                    featuredImageHtml = `<img src="${post.images[0].data}" alt="${post.title}" 
                        style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"
                        onload="console.log('First image loaded successfully for:', '${post.title}')"
                        onerror="console.error('Failed to load first image for:', '${post.title}')">`;
                } else {
                    console.log('No images found for post:', post.title, 'Using default emoji');
                }
                
                featuredHTML += `
                    <div class="featured-post-card" onclick="openBlogPost('${doc.id}')">
                        <div class="featured-post-image">
                            ${featuredImageHtml}
                        </div>
                        <div class="featured-post-content">
                            <h4 class="featured-post-title">${post.title || 'Untitled'}</h4>
                            <p class="featured-post-excerpt">${truncatedContent}</p>
                            <div class="featured-post-meta">
                                ${formattedDate} • ${post.author || 'Admin'}
                            </div>
                        </div>
                    </div>
                `;
            });
            
            featuredPosts.innerHTML = featuredHTML;
        })
        .catch(error => {
            console.error('Error loading featured posts:', error);
            featuredPosts.innerHTML = `
                <div class="no-data" style="text-align: center; padding: 2rem; color: #666;">
                    <p>Error loading posts. Please try again later.</p>
                </div>
            `;
        });
}

// Convert file to base64
function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Compress image if it's too large
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                // Calculate new dimensions (max 800px width)
                let { width, height } = img;
                const maxWidth = 800;
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }
                
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                
                resolve(canvas.toDataURL('image/jpeg', 0.7));
            };
            img.onerror = function() {
                // If it's not an image, just return the original data
                resolve(e.target.result);
            };
            img.src = e.target.result;
        };
        reader.onerror = function() {
            reject(new Error('Failed to read file'));
        };
        reader.readAsDataURL(file);
    });
}

// Banner Carousel Functions
let currentSlide = 0;
let bannerInterval;

function initBannerCarousel() {
    const slides = document.querySelectorAll('.banner-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Start auto-rotation
    startBannerAutoRotation();
    
    // Add click handlers to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Pause on hover
    const bannerCarousel = document.querySelector('.banner-carousel');
    if (bannerCarousel) {
        bannerCarousel.addEventListener('mouseenter', stopBannerAutoRotation);
        bannerCarousel.addEventListener('mouseleave', startBannerAutoRotation);
    }
}

function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.banner-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length === 0) return;
    
    // Remove active class from current slide and indicator
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // Update current slide
    currentSlide = slideIndex;
    
    // Add active class to new slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    if (slides.length === 0) return;
    
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.banner-slide');
    if (slides.length === 0) return;
    
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(prevIndex);
}

function startBannerAutoRotation() {
    stopBannerAutoRotation(); // Clear any existing interval
    bannerInterval = setInterval(nextSlide, 3000); // Change slide every 2 seconds
}

function stopBannerAutoRotation() {
    if (bannerInterval) {
        clearInterval(bannerInterval);
        bannerInterval = null;
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
    loadFeaturedPosts(); // Load featured posts on page load
    initBannerCarousel(); // Initialize banner carousel
});

// Service Worker for PWA (optional - for even faster loading)
// Commented out until sw.js file is created
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('/sw.js')
//             .then(function(registration) {
//                 console.log('ServiceWorker registration successful');
//             })
//             .catch(function(err) {
//                 console.log('ServiceWorker registration failed');
//             });
//     });
// }
