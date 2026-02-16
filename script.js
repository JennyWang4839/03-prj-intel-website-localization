const cards = document.querySelectorAll(".cards");

cards.forEach(card => {
  const paragraph = card.querySelector("p.cardInfo");
  
  const h2 = card.querySelector("h2.cardInfo");
  
  const h3 = card.querySelector("h3.cardInfo");
  
  const img = card.querySelector("img.cardInfo");

  const fullHeight = paragraph.scrollHeight + h2.scrollHeight + h3.scrollHeight + img.scrollHeight + 150; // 100px for padding and spacing

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    if (img.scrollHeight > 64) {
      card.style.height = (fullHeight + 50) + "px";
    }

    else {
      card.style.height = fullHeight + "px";
    }

    card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.25)";
    
    card.style.zIndex = "2";
    
    card.style.transition = "box-shadow 0.3s ease, transform 0.3s ease";
    
    console.log("cardHeight:", card.scrollHeight);
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    
    card.style.transform = "translateY(0)";
    
    card.style.height = "260px";
    
    card.style.zIndex = "1";
    
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease, max-height 0.35s ease";
  });
});
