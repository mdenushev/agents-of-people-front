import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {Analyzer, getReasonByRecord, Match, RecordType} from "./analyzer";

const dataUrl = "https://raw.githubusercontent.com/mdenushev/agent-of-people-data/master/foreign_agents.json"

function insertInString(text: string, part: string, position: number): string {
  return [text.slice(0, position), part, text.slice(position)].join('')
}

function highlightMatches(text: string, matches: Match[]): string {
  console.log(matches);
  text = `<p class="result">${text}</p>`;

  let offset = 18
  for (const match of matches) {
    text = insertInString(text, '<span class="highlight">', match.start + offset)
    offset += 24
    text = insertInString(text, '</span>', match.end + offset)
    offset += 7
  }
  return text
}

function App() {
  const [analyzer, setAnalyzer] = useState(new Analyzer([]))

  async function loadData() {
    setLoading(true);
    let data = (await axios.get(dataUrl)).data
    console.log(data);
    // @ts-ignore
    setAnalyzer(new Analyzer(data));
    setLoading(false)
  }

  useEffect(() => {
    loadData();
  }, [])

  let [matches, setMatches] = useState<Match[]>([])
  let [textChangedFlag, setTextChangedFlag] = useState(false)
  let [inputText, setInputText] = useState("");
  let [loading, setLoading] = useState(true);

  function textChanged(e: React.FormEvent<HTMLTextAreaElement>) {
    setInputText(e.currentTarget.value);
    setTextChangedFlag(true);
  }

  function analyze() {
    setLoading(true);
    console.log(inputText)
    let newMatches = analyzer.FindMatches(inputText, true)
    setMatches(newMatches);
    let element = document.getElementById("result-text")
    if (element !== null) {
      element.innerHTML = highlightMatches(inputText, newMatches)
    }

    setLoading(false);
    setTextChangedFlag(false);
  }

  return (
    <div className="mt-5">
      <div className="spinner-border" role="status" hidden={!loading}>
        <span className="visually-hidden">Загрузка</span>
      </div>
      <div className="container" hidden={loading}>
        <div className="menu row mb-3">
          <div className="col">
            <button type="button" className="btn btn-light" onClick={analyze}>Анализировать</button>
            {textChangedFlag ? <span>Текст изменился, нажмите кнопку "Анализировать"</span> : null}
          </div>

        </div>
        <textarea className="text form-control row mb-3" placeholder="Вставьте ваш текст" onInput={textChanged}/>
        <p id="result-text" className="mx-3"/>
        {matches.length === 0 ? <p>В тексте не найдены упоминания иноагентов</p> :
          <ul className="list-group list-group-flush">
            {matches.map((m, i) => <li key={i}
                                       className="list-group-item">{m.record.full_name}{m.record.type === RecordType.Organization && m.record.aliases.length !== 0 ? ` (${m.record.aliases[0]})` : null} {getReasonByRecord(m.record)} от {m.record.date}</li>)}
          </ul>}
      </div>
    </div>
  );
}

export default App;
