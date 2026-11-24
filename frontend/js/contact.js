document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    status.classList.remove("error");
    button.disabled = true;
    button.textContent = "Sending...";

    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Message could not be sent.");
      status.textContent = result.message;
      form.reset();
    } catch (error) {
      status.textContent = error.message || "Something went wrong. Please try again.";
      status.classList.add("error");
    } finally {
      button.disabled = false;
      button.innerHTML = 'Send message <span>↗</span>';
    }
  });
});
