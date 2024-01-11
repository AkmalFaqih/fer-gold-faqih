function HeaderNav() {
  return (
    <nav ClassName="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
      <div ClassName="container">
        <a ClassName="navbar-brand" href="#">
          Akmal Faqih
        </a>
        <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span ClassName="navbar-toggler-icon"></span>
        </button>
        <div ClassName="collapse navbar-collapse" id="navbarNav">
          <ul ClassName="navbar-nav ms-auto">
            <li ClassName="nav-item">
              <a ClassName="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li ClassName="nav-item">
              <a ClassName="nav-link" href="#about">
                AboutMe
              </a>
            </li>
            <li ClassName="nav-item">
              <a ClassName="nav-link" href="#projects">
                Project
              </a>
            </li>
            <li ClassName="nav-item">
              <a ClassName="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNav;
