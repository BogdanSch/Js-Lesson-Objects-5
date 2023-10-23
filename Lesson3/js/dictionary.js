class Word {
  constructor(userWord, translations) {
    this.userWord = userWord;
    this.translations = translations;
  }
  checkWord(userTranslation) {
    return this.translations.find(
      (translation) => translation === userTranslation
    );
  }
}

class Dictionary {
  constructor(word, language) {
    this.word = word;
    this.correctGuesses = 0;
    this.mistakeCount = 0;
    this.targetLanguage = language;
  }

  getWords() {
    return this.word.translations;
  }

  getMistakenCount() {
    return this.mistakeCount;
  }

  getCorrectGuesses() {
    return this.correctGuesses;
  }

  checkWord(translation) {
    const found = this.word.checkWord(translation);
    if (found) {
      this.correctGuesses++;
      return true;
    } else {
      this.mistakeCount++;
      return false;
    }
  }

  setUserWord(userWord) {
    this.userWord = userWord;
  }

  getUserWord() {
    return this.userWord;
  }

  setLanguage(language) {
    this.targetLanguage = language;
  }

  getLanguage() {
    return this.targetLanguage;
  }
}

const dictionary = new Dictionary(
  new Word("apple", ["яблуко", "apfel", "pomme"]),
  "ukrainian"
);

console.log(dictionary.checkWord("яблуко")); // Returns true
console.log(dictionary.checkWord("banana")); // Returns false
console.log(dictionary.getCorrectGuesses()); // Returns 1
console.log(dictionary.getMistakenCount()); // Returns 1
