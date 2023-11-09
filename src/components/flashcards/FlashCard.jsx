import "./Flashcard.scss";
import { useState } from "react";

function FlashCard({ question, answer }) {
  const [isReveal, setIsReveal] = useState(false);

  return (
    <>
      <div
        className={`flip-card ${isReveal && "flip-card-reveal"}`}
        onClick={() => setIsReveal(!isReveal)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{question}</p>
          </div>
          <div className="flip-card-back">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlashCard;