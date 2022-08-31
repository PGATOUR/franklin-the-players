import { decorateBlock, loadBlock } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const btns = block.querySelector('.button-container');
  if (btns) block.classList.add('hero-buttons');
  const video = block.querySelector('.video');
  if (video) {
    block.classList.add('hero-video');
    video.classList.add(`${video.className}-hero`);
    decorateBlock(video);
    await loadBlock(video);
  }
  const em = block.querySelector('em');
  if (em) {
    const caption = document.createElement('div');
    caption.className = 'section';
    caption.innerHTML = `<p class="hero-caption">
      ${em.innerHTML}
    </p>`;
    em.remove();
    block.parentNode.append(caption);
  }
}
