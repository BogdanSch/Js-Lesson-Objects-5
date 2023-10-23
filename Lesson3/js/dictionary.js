class Dictionary {
  constructor(userWord, translations, language) {
    this.userWord = userWord;
    this.translations = translations;
    this.correctGuesses = 0;
    this.mistakeCount = 0;
    this.targetLanguage = language;
  }

  getWords() {
    return this.translations;
  }

  getMistakenCount() {
    return this.mistakeCount;
  }

  getCorrectGuesses() {
    return this.correctGuesses;
  }

  checkWord(word) {
    const found = this.translations.find((translation) => translation === word);
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
  "apple",
  ["яблуко", "apfel", "pomme"],
  "ukrainian"
);

dictionary.checkWord("яблуко"); // Returns true
dictionary.checkWord("banana"); // Returns false
dictionary.getCorrectGuesses(); // Returns 1
dictionary.getMistakenCount(); // Returns 1
