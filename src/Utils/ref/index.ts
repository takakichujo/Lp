export const Scroll = (id: string) => {
  const targetId = document.getElementById(id);
  if (targetId) {
    targetId.scrollIntoView({ behavior: 'smooth' });
    console.log(targetId);
  }
};
