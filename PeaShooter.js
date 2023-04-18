const blocksEl = document.querySelector(".blocks");

blocksEl.style.width = `${750}px`;
blocksEl.style.height = `${480}px`;
blocksEl.style.left = `${240}px`;
blocksEl.style.top = `${80}px`;

const positionXMap = [
  [6, 0, -2, -2, -6, -10, -16, -20, -26],
  [6, 0, -2, -2, -6, -10, -16, -20, -26],
  [6, 0, -2, -2, -6, -10, -16, -20, -26],
  [6, 0, -2, -2, -6, -10, -16, -20, -26],
  [6, 0, -2, -2, -6, -10, -16, -20, -26],
];

const random = () => {
  return Math.random().toFixed(2);
};

for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 9; col++) {
    const blockEl = document.createElement("div");
    blockEl.className = "block";
    blockEl.style.width = `${82}px`;
    blockEl.style.height = `${92}px`;
    blockEl.style.left = `${col * 85 + (positionXMap[row][col] || 0)}px`;
    blockEl.style.top = `${row * 100}px`;
    blocksEl.appendChild(blockEl);
    const delay = random();
    blockEl.innerHTML = `<div class="PeaShooter">
    <div class="PeaShooter_Head" style="animation-delay:${delay}s">
      <div class="PeaShooter_head"></div>
      <div class="PeaShooter_mouth"></div>
      <div class="PeaShooter_sprout"></div>
      <div class="PeaShooter_stalk_top"></div>
      <div class="PeaShooter_stalk_bottom"></div>

    </div>
    <div class="PeaShooter_backleaf">
      <div class="PeaShooter_backleaf_lefttip"></div>
      <div class="PeaShooter_backleaf_righttip"></div>
    </div>
    <div class="PeaShooter_frontleaf">
      <div class="PeaShooter_frontleaf_lefttip"></div>
      <div class="PeaShooter_frontleaf_righttip"></div>
    </div>
  </div>`;
  }
}
