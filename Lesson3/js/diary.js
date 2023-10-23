"use strict";

class Record {
  constructor(date = new Date(), recording) {
    this.date = date;
    this.recording = recording;
  }

  showDiary() {
    return `Date: ${this.date.toDateString()}\n${this.recording}`;
  }

  toString() {
    return this.showDiary();
  }
}

class Diary {
  constructor(diary = []) {
    this.diary = diary;
  }

  showDiary() {
    this.diary.forEach((record) => {
      console.log(record.showDiary());
    });
  }

  addRecord(date = new Date(), recording) {
    const record = new Record(date, recording);
    this.diary.push(record);
  }
  addRecord(record) {
    this.diary.push(record);
  }

  filterByKeyword(keyword) {
    const filteredRecords = this.diary.filter((record) =>
      record.recording.includes(keyword)
    );
    if (filteredRecords.length > 0) {
      filteredRecords.forEach((record) => {
        console.log(record.showDiary());
      });
    } else {
      console.log("Sorry, there is no such a note like this.");
    }
  }

  filterByWeekend() {
    const filteredRecords = this.diary.filter(
      (record) => record.date.getDay() === 0 || record.date.getDay() === 6
    );
    if (filteredRecords.length > 0) {
      filteredRecords.forEach((record) => {
        console.log(record.showDiary());
      });
    } else {
      console.log("Sorry, there is no such a note like this.");
    }
  }
}

// Example usage
const myDiary = new Diary();

const record1 = new Record(new Date(2023, 8, 18), "Had a great day!");
const record2 = new Record(new Date(2023, 8, 19), "Meeting with friends.");
const record3 = new Record(new Date(2023, 8, 20), "Worked on a project.");
myDiary.addRecord(record1);
myDiary.addRecord(record2);
myDiary.addRecord(record3);

myDiary.showDiary();
console.log("\nFiltering by keyword 'friends':");
myDiary.filterByKeyword("friends");
console.log("\nFiltering by weekend records:");
myDiary.filterByWeekend();
