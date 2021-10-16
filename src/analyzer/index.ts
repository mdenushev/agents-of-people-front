import {getTokensFromRecord} from "./tokens";

export enum RecordType {
  Person = "person",
  Organization = "organization"
}

export enum RecordReason {
  ForeignAgent = "foreign_agent",
  Extremist = "extremist",
  Unwelcome = "unwelcome"
}

export const reasonTypeText = {
  "person:foreign_agent": 'признан(а) иноагентом',
  "person:extremist": 'признан(а) экстремистом',
  "organization:foreign_agent": 'признано(а) организацией-иноагентом',
  "organization:extremist": 'признано(а) экстремистской организацией',
  "organization:unwelcome": 'признано(а) нежелательной организацией',
}

export function getReasonByRecord(r: Record): string {
  // @ts-ignore
  return reasonTypeText[`${r.type}:${r.reason}`]
}

export interface Record {
  full_name: string;
  reason: RecordReason
  type: RecordType,
  date: string,
  aliases: string[],
  description?: string
}

export interface Match {
  start: number,
  end: number,
  record: Record
}

export class Analyzer {
  tokens: { [token: string]: Record } = {}

  constructor(records: Record[]) {
    for (const record of records) {
      for (const token of getTokensFromRecord(record)) {
        this.tokens[token] = record;
      }
    }
  }

  FindMatches(text: string, firstOccurrence: boolean = false): Match[] {
    let matches: Match[] = []
    let matchesMap: { [matchKey: string]: boolean } = {}
    let recordsMap: { [fullName: string]: boolean } = {}
    text = ' ' + text // ugly hack, but match all won't work otherwise
    for (const [token, record] of Object.entries(this.tokens)) {
      for (const tokenMatch of text.matchAll(RegExp(token, 'gmi'))) {
        if (tokenMatch.index && tokenMatch[0]) {
          const matchKey = tokenMatch.index.toString() + ":" + tokenMatch.index + tokenMatch[0].length;
          console.log(tokenMatch[0], firstOccurrence, recordsMap[record.full_name], recordsMap, record)
          if (
            matchesMap[matchKey] !== undefined ||
            (firstOccurrence && recordsMap[record.full_name] !== undefined)
          ) continue;

          matches.push({end: tokenMatch.index -1 + tokenMatch[0].length, start: tokenMatch.index -1, record});
          matchesMap[matchKey] = true;
          recordsMap[record.full_name] = true;
        }
      }
    }
    return matches.sort((a, b) => a.start - b.start)
  }
}

