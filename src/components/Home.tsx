import axios from "axios";
import { useState } from "react";
import { Result } from "./interface/api";
import QuestionCar from "./QuestionCar";

export default function Home() {
  const [data, setData] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [answers, setanswers] = useState<string[]>([]);
  const [score, setscore] = useState(0);
  const [questionnum, setQuestionnum] = useState<number>(0);
  const randomP:number = Math.floor(Math.random() * 4);

 
  async function getApi() {
    
    setLoading(true);
    setData([]);
    let result = await axios.get(
      `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`
    );
    setLoading(false);
    setData(result.data.results);
    let asners:Result=result.data.results[0]
    asners.incorrect_answers.splice(randomP,0,asners.correct_answer)
    
    setanswers([...asners.incorrect_answers])

  }
  

 
 

  return (
    <>
     <div className="container catamaran pt-16">
     
      <h1 className=" text-gray-900 text-6xl  font-bold  quiz ">start QUIZ</h1>
      <h2 className="mt-3">
        <button  onClick={() => getApi()} className=" cursor-pointer bg-slate-500 text-white text-2xl font-bold p-3 rounded-2xl ">
          start
        </button>
      </h2>
      {loading ? <h3>loading question ....</h3> : ""}
      {data.length > 0 && (
       
        <div className=" game font-bold">
           <QuestionCar  setData={setData} randomP={randomP}  setQuestionnum={setQuestionnum} data={data} score={score} setscore={setscore} setanswers={setanswers} answers={answers}  questionnum={questionnum} />
          
         
        </div>
      )}
    </div>
    </>
  );
}
