// Tab Switching Router Function
function switchTab(targetId) {
  const tabs = document.querySelectorAll('.tab-view');
  const buttons = document.querySelectorAll('.nav-btn');

  // Hide all tabs
  tabs.forEach(tab => tab.classList.remove('active'));
  
  // Remove active state from buttons
  buttons.forEach(btn => btn.classList.remove('active'));

  // Activate target tab
  const activeTab = document.getElementById(targetId);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // Activate matching nav button
  const activeBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  // Smooth scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners for Nav Buttons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      switchTab(target);
    });
  });
});
