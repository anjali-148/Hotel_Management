function toggleBio(card) {
  const bio = card.querySelector('.bio');

  // Hide all bios first
  document.querySelectorAll('.bio').forEach(b => {
    if (b !== bio) b.style.display = 'none';
  });

  // Toggle the selected one
  const isVisible = bio.style.display === 'block';
  bio.style.display = isVisible ? 'none' : 'block';
}