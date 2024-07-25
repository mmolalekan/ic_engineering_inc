const Project = ({ setVisible }) => {
  return (
    <div class="project-card">
      <img src="https://via.placeholder.com/800x400" alt="Project Image" class="project-image" />
      <div class="project-content">
        <h1 class="project-title">Project Title</h1>
        <div class="project-meta">
          <p class="project-date"><i class="fas fa-calendar-alt"></i> <span>2024-05-19</span></p>
          <p class="project-client"><i class="fas fa-user"></i> <span>Client Name</span></p>
        </div>
        <p class="project-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus eu nulla vestibulum pharetra. Nullam scelerisque orci non metus facilisis, vel tristique erat blandit. Sed at erat eget neque facilisis elementum.
        </p>
      </div>
      <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
      <button onClick={() => setVisible(false)}>Close Model</button>
    </div>

  );
}

export default Project;
