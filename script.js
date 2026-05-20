function toggleCard(dot) {

  const card = dot.nextElementSibling;

  card.classList.toggle("show");
  // mark the dot as clicked so its color changes
  dot.classList.toggle('clicked');

  // hide the initial callout (do not persist across visits)
  const callout = document.getElementById('callout');
  if (callout) {
    callout.classList.add('hidden');
  }

}

// initialize callout visibility and hint pulse on first dot
document.addEventListener('DOMContentLoaded', () => {
  const callout = document.getElementById('callout');
  if (callout) {
    // always show the callout on page load until user clicks
    const firstDot = document.querySelector('.timeline .timeline-item .dot');
    if (firstDot) firstDot.classList.add('pulse');

    // do not auto-remove pulse; leave it until user clicks
  }
});