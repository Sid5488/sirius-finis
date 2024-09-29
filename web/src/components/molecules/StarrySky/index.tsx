import { useEffect } from "react";
import { Container } from "./styles";

const StarrySky = () => {
  useEffect(() => {
    const sky = document.querySelector(".sky") as HTMLElement;

    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');

      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;

      sky.appendChild(star);

      setTimeout(() => {
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
      }, 2000);
    }

    for (let i = 0; i < 100; i++) {
      createStar();
    }
  }, []);

  return (
    <Container className="sky" />
  );
};

export { StarrySky };
