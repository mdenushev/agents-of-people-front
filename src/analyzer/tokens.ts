import {Record} from "./index";
let Snowball = require('snowball');
let stemmer = new Snowball('Russian')
const suffixRegexp = "[а-яa-z']{0,2}"

export function tokenize(text: string): string[] {
  return text.split(/\W+/).map(token => token.toLowerCase());
}
export function stem(str: string) : string {
  stemmer.setCurrent(str);
  stemmer.stem();
  return stemmer.getCurrent();
}

export function makeToken(text: string): string {
  return text.split(/[^a-zа-я]+/i).map(token => {
    return stem(token.toLowerCase()) + suffixRegexp;
  }).join("\\s+")
}

export function getTokensFromRecord(record: Record): string[] {
  let res: string[]  = []
  record.aliases.forEach(alias => {
    res.push(makeToken(alias))
  })
  return res
}
