// 🌙 Dark Mode Toggle
const modeToggle = document.querySelector('.mode input');
const body = document.body;
const moonIcon = document.querySelector('.mode .fa-moon');
const sunIcon = document.querySelector('.mode .fa-sun');

function updateIcons() {
  if (body.classList.contains('dark-mode')) {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  } else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  }
}

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  modeToggle.checked = true;
}
updateIcons();

// Toggle listener
modeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  updateIcons();
});


// ✨ Typing Animation
const roles = ["Web Developer", "Designer", "AI Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const roleElement = document.getElementById("animated-roles");
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 1500;

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, delayBetweenWords);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, typingSpeed);
  }
}

// Start animation on page load
document.addEventListener("DOMContentLoaded", () => {
  roleElement.textContent = "";
  typeRole();
});


// Accordion for skills headers
const headers = document.querySelectorAll('.skills_header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // Close all other contents
    document.querySelectorAll('.skills_group').forEach(c => c.classList.remove('skills_active'));
    document.querySelectorAll('.skills_header').forEach(h => h.classList.remove('skills_active'));

    // Toggle current
    header.classList.add('skills_active');
    content.classList.add('skills_active');
  });
});

// Tabs
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tc => tc.classList.remove('skills_active'));
    target.classList.add('skills_active');

    tabs.forEach(t => t.classList.remove('skills_active'));
    tab.classList.add('skills_active');
  });
});

// Animate skill percentages
const percentages = document.querySelectorAll(".skills_percentage");

percentages.forEach(span => {
  const widthMatch = span.getAttribute("style").match(/(\d+)%/);
  if (widthMatch) {
    const width = widthMatch[1];
    // Timeout to allow CSS transition to animate
    setTimeout(() => {
      span.style.width = width + "%";
    }, 100);
  }
});


// Qualification Tabs
const qualificationTabs = document.querySelectorAll('.qualification_tab');
const educationSection = document.querySelector('.education');
const experienceSection = document.querySelector('.experience');

qualificationTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    qualificationTabs.forEach(t => t.classList.remove('qualification_active'));
    tab.classList.add('qualification_active');

    // Show/hide sections
    if (tab.dataset.target === '.education') {
      educationSection.style.display = 'block';
      experienceSection.style.display = 'none';
    } else {
      educationSection.style.display = 'none';
      experienceSection.style.display = 'block';
    }
  });
});

// Set default view
educationSection.style.display = 'block';
experienceSection.style.display = 'none';
