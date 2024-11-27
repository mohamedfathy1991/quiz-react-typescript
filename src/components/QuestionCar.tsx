import React, { useState } from "react";
import { Result } from "./interface/api";

// Define the props type
interface QuestionCarProps {
  data: Result[];
  setData: (data: Result[]) => void;
  score: number;
  setscore: (score: number) => void;
  setQuestionnum: (questionnum: number) => void;
  answers: string[];
  setanswers: (answers: string[]) => void;
  questionnum: number;
  randomP: number;

  // Required prop

  // 'sat' is a required prop of type number
}

export default function QuestionCar({
  randomP,
  data,
  score,
  setscore,
   
  setData,
  questionnum,
  setanswers,
  setQuestionnum,
}: QuestionCarProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  function nextquestion() {
    setSelectedAnswer(null);
    
    if (questionnum == 9) {
      
      setData([]);
      setQuestionnum(0);
      
    }else{
      setQuestionnum(questionnum + 1);

    data[questionnum + 1]?.incorrect_answers.splice(
      randomP,
      0,
      data[questionnum + 1]?.correct_answer
    );
    setanswers([...data[questionnum + 1].incorrect_answers]);

    }
    
  }
  function handelAnser(
    e: React.MouseEvent<HTMLButtonElement>,
    corectanser: string,
    selected: string
  ) {
    let anser = (e.target as HTMLButtonElement).innerHTML;

    setSelectedAnswer(selected);
    if (anser == corectanser) {
      setscore(score + 1);
    }
  }
 
 
  return (
    <div>
       
      <p>score:{score}</p>
      <span>Question no:{questionnum + 1}</span>
      <p>
        <h2>question:</h2>
        <h3 className="mb-6"> {data ? data[0 + questionnum]?.question : ""}</h3>
      </p>

      <div>
        {data[0 + questionnum]?.incorrect_answers.map((item) => (
          <button
            key={item}
            className={`mx-2 p-2 border rounded-xl border-gray-700 transition-all ${
              selectedAnswer
                ? selectedAnswer == item
                  ? "bg-orange-400 text-black" // Highlight selected button
                  : "hover:bg-transparent cursor-not-allowed" // Disable hover and click for others
                : "hover:bg-slate-800 hover:text-white hover:scale-x-[1.2]"
            }`}
            onClick={(e) =>
              handelAnser(e, data[0 + questionnum].correct_answer, item)
            }
            disabled={!!selectedAnswer} // Disable all buttons after one is clicked
          >
            {item}
          </button>
        ))}
      </div>
      <p className="">
        {" "}
        <button
          className="bg-blue-700 mt-6 hover:bg-blue-500
            p-3 px-4 rounded aspect-auto  text-white font-semibold"
          onClick={nextquestion}
        >
          next
        </button>
      </p>
    </div>
  );
}
