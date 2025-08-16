export interface LineUpAct {
  artistName: string;
  timeBeginn: string; // "18:30" oder ISO-Format
  timeEnd: string; // "18:30" oder ISO-Format
  stage: string;
  date: string; // ISO-Format oder "YYYY-MM-DD"
}

export interface Festival {
  name: string;
  location: string;
  startDate: string; // ISO-Format "YYYY-MM-DD"
  endDate: string; // ISO-Format "YYYY-MM-DD"
  emoji: string;
  lineUp: LineUpAct[];
  stages: string[];
}
