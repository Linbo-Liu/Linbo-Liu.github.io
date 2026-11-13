/**
 * Main JavaScript file for rendering site content.
 */

let detailIdCounter = 0;
const detailToggleRegistry = [];

function closeOtherDetails(activeToggle) {
  detailToggleRegistry.forEach(({ toggle, content, label }) => {
    if (toggle !== activeToggle && toggle.getAttribute('aria-expanded') === 'true') {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = label;
      content.hidden = true;
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('news-list')) {
    populateNews();
  }

  if (document.getElementById('selected-papers-list')) {
    const selected = [...getSelectedPreprints(), ...getSelectedPublications()];
    populatePublications(selected, 'selected-papers-list');
  }

  if (document.getElementById('preprints-list')) {
    populatePublications(getPreprints(), 'preprints-list');
  }

  if (document.getElementById('conference-papers-list')) {
    populatePublications(getConferencePublications(), 'conference-papers-list');
  }

  if (document.getElementById('journal-papers-list')) {
    populatePublications(getJournalPublications(), 'journal-papers-list');
  }

  if (document.getElementById('projects-list')) {
    const list = document.getElementById('projects-list');
    const showAll = list.dataset.scope === 'all';
    populateProjects(showAll ? getAllProjects() : getSelectedProjects(), 'projects-list');
  }

  if (document.getElementById('blog-posts-list')) {
    populateBlogs();
  }

  populateEducation();
  populateResearchExperience();
  populateAcademicServices();
  populateTeaching();
  populateTalks();
  populateHonors();

  initializeDarkMode();
  initializeBackToTop();
});

function populateNews() {
  const list = document.getElementById('news-list');
  if (!list) return;

  newsItems.slice(0, 5).forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="news-date">${item.date}</span><span>${item.text}</span>`;
    list.appendChild(li);
  });
}

function populatePublications(publications, listId) {
  const list = document.getElementById(listId);
  if (!list) return;

  publications.forEach(pub => {
    const li = document.createElement('li');

    const titleDiv = document.createElement('div');
    titleDiv.className = 'papertitle';
    titleDiv.innerHTML = pub.title;

    const restDiv = document.createElement('div');
    restDiv.className = 'paper_rest';
    restDiv.innerHTML = `${pub.authors}<br />`;

    const venueSpan = document.createElement('span');
    venueSpan.className = 'paper-venue';
    venueSpan.innerHTML = `<i>${pub.venue}</i>`;
    restDiv.appendChild(venueSpan);

    const interactiveItems = [];
    (pub.links || []).forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.text;
      if (/^https?:\/\//i.test(link.url)) {
        anchor.target = '_blank';
        anchor.rel = 'noopener';
      }
      interactiveItems.push(anchor);
    });

    const abstract = createDetailToggle('Abstract', pub.abstract, pub.title, 'abstract');
    if (abstract) interactiveItems.push(abstract.toggle);

    const citation = createDetailToggle('Citation', pub.citation, pub.title, 'citation');
    if (citation) interactiveItems.push(citation.toggle);

    if (interactiveItems.length > 0) {
      const linksWrapper = document.createElement('span');
      linksWrapper.className = 'paper-links';
      linksWrapper.appendChild(document.createTextNode('[ '));
      interactiveItems.forEach((item, index) => {
        if (index > 0) {
          linksWrapper.appendChild(document.createTextNode(' | '));
        }
        linksWrapper.appendChild(item);
      });
      linksWrapper.appendChild(document.createTextNode(' ]'));

      restDiv.appendChild(document.createTextNode(' '));
      restDiv.appendChild(linksWrapper);
    }

    li.appendChild(titleDiv);
    li.appendChild(restDiv);
    if (abstract) li.appendChild(abstract.container);
    if (citation) li.appendChild(citation.container);

    const bottomSpaceDiv = document.createElement('div');
    bottomSpaceDiv.className = 'paper_bottom_space';
    li.appendChild(bottomSpaceDiv);
    list.appendChild(li);
  });
}

function createDetailToggle(label, contentValue, title, baseClass) {
  if (typeof contentValue !== 'string' || contentValue.trim().length === 0) {
    return null;
  }

  const container = document.createElement('div');
  container.className = `${baseClass}-container detail-container`;

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = `${baseClass}-toggle detail-toggle`;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = label;

  const content = document.createElement('div');
  content.className = `${baseClass}-content detail-content`;
  content.innerHTML = contentValue;
  content.hidden = true;
  const contentId = `detail-content-${detailIdCounter++}`;
  content.id = contentId;
  content.setAttribute('role', 'region');
  content.setAttribute('aria-label', `${title} ${label.toLowerCase()}`);
  toggle.setAttribute('aria-controls', contentId);

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    if (!isExpanded) {
      closeOtherDetails(toggle);
    }
    const nextState = !isExpanded;
    toggle.setAttribute('aria-expanded', String(nextState));
    content.hidden = !nextState;
    toggle.textContent = nextState ? `Hide ${label}` : label;
  });

  container.appendChild(content);
  detailToggleRegistry.push({ toggle, content, label });
  return { container, toggle };
}

function populateProjects(projects, containerId) {
  const list = document.getElementById(containerId);
  if (!list) return;

  projects.forEach(project => {
    const li = document.createElement('li');
    li.className = 'project-item';

    if (project.image) {
      const image = document.createElement('img');
      image.className = 'project-thumbnail';
      image.src = project.image;
      image.alt = `${project.title} thumbnail`;
      image.loading = 'lazy';

      const imageButton = document.createElement('button');
      imageButton.type = 'button';
      imageButton.className = 'project-thumbnail-button';
      imageButton.setAttribute('aria-label', `Open larger image for ${project.title}`);
      imageButton.appendChild(image);
      imageButton.addEventListener('click', () => {
        openProjectImage(project.image, project.title);
      });
      li.appendChild(imageButton);
    }

    const content = document.createElement('div');
    content.className = 'project-content';

    const title = document.createElement('div');
    title.className = 'project-title';
    title.textContent = project.title;

    const description = document.createElement('div');
    description.className = 'project-description';
    description.innerHTML = project.description;

    const links = document.createElement('div');
    links.className = 'project-links';
    (project.links || []).forEach((link, index) => {
      if (index > 0) links.appendChild(document.createTextNode(' / '));
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.text;
      anchor.target = '_blank';
      anchor.rel = 'noopener';
      links.appendChild(anchor);
    });

    content.appendChild(title);
    content.appendChild(description);
    if ((project.links || []).length > 0) content.appendChild(links);
    li.appendChild(content);
    list.appendChild(li);
  });
}

function getProjectImageLightbox() {
  let lightbox = document.getElementById('project-image-lightbox');
  if (lightbox) return lightbox;

  lightbox = document.createElement('div');
  lightbox.id = 'project-image-lightbox';
  lightbox.className = 'project-image-lightbox';
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <div class="project-image-lightbox-panel" role="dialog" aria-modal="true" aria-label="Project image preview">
      <button type="button" class="project-image-lightbox-close" aria-label="Close image preview">Close</button>
      <img class="project-image-lightbox-image" alt="">
      <div class="project-image-lightbox-title"></div>
    </div>
  `;

  const close = () => closeProjectImage();
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) close();
  });
  lightbox.querySelector('.project-image-lightbox-close').addEventListener('click', close);
  document.body.appendChild(lightbox);
  return lightbox;
}

function openProjectImage(src, title) {
  const lightbox = getProjectImageLightbox();
  const image = lightbox.querySelector('.project-image-lightbox-image');
  const titleNode = lightbox.querySelector('.project-image-lightbox-title');
  image.src = src;
  image.alt = title;
  titleNode.textContent = title;
  lightbox.hidden = false;
  document.body.classList.add('image-lightbox-open');
  lightbox.querySelector('.project-image-lightbox-close').focus();
}

function closeProjectImage() {
  const lightbox = document.getElementById('project-image-lightbox');
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.classList.remove('image-lightbox-open');
}

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeProjectImage();
  }
});

function populateBlogs() {
  const list = document.getElementById('blog-posts-list');
  if (!list) return;

  blogPosts.forEach(post => {
    const li = document.createElement('li');
    li.className = 'blog-list-item';
    li.innerHTML = `
      <div class="blog-date">${post.source} · ${post.date}</div>
      <h2><a href="${post.url}" target="_blank" rel="noopener">${post.title}</a></h2>
      <p>${post.excerpt}</p>
    `;
    list.appendChild(li);
  });
}

function populateEducation() {
  const list = document.getElementById('education-list');
  if (!list) return;

  education.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function populateResearchExperience() {
  const list = document.getElementById('research-experience-list');
  if (!list) return;

  researchExperience.forEach(exp => {
    const li = document.createElement('li');
    const role = exp.role ? `${exp.role}, ` : '';
    li.innerHTML = `<p><strong>${exp.period}, ${role}${exp.institution}</strong><br>${exp.description}</p>`;
    list.appendChild(li);
  });
}

function populateAcademicServices() {
  const list = document.getElementById('academic-services-list');
  if (!list) return;

  academicServices.forEach(service => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${service}</p>`;
    list.appendChild(li);
  });
}

function populateTeaching() {
  const list = document.getElementById('teaching-list');
  if (!list) return;

  teaching.forEach(teachingItem => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${teachingItem}</p>`;
    list.appendChild(li);
  });
}

function populateTalks() {
  const list = document.getElementById('talks-list');
  if (!list) return;

  talks.forEach(talk => {
    const li = document.createElement('li');
    const attachmentLinks = (talk.attachments || []).map(attachment =>
      `<a href="${attachment.url}" target="_blank" rel="noopener">${attachment.text}</a>`
    ).join(' | ');
    const suffix = attachmentLinks ? ` [ ${attachmentLinks} ]` : '';
    li.innerHTML = `<p>${talk.title}, ${talk.venue}, ${talk.date}${suffix}</p>`;
    list.appendChild(li);
  });
}

function populateHonors() {
  const list = document.getElementById('honors-list');
  if (!list) return;

  honors.forEach(honor => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${honor}</p>`;
    list.appendChild(li);
  });
}
