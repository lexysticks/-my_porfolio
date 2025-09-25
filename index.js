function showTab(tabId, el) {
      document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.getElementById(tabId).style.display = 'block';
      el.classList.add('active');
    }

    document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("message").textContent = "Thanks for reaching out!";
      this.reset();
    });
    // Scroll animation
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    ".hero, .about-section, .services, .tools-section, .contact-section"
  );

  const revealOnScroll = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once on page load
});
