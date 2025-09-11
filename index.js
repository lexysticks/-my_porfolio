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