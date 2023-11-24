type sectionID = "about" | "skills" | "experience" | "projects" | "contact";

export const scrollToSection = (section: sectionID) => {
  const selectedItem = document?.getElementById(section);
  if (selectedItem) {
    const yOffset = -60; // scroll above the top by 60 pixels
    window.scrollTo({
      top: selectedItem.offsetTop + yOffset,
      behavior: "smooth",
    });
  }
};
