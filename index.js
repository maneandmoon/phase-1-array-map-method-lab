const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const mySentence = tutorials [0];

//const capFirstLetter = mySentence.split(" ").map((word) => {

//  return (word [0].toUpperCase() + word.slice(1))

//}).join(" ");


//function titleCased () {

 // return array.map(mySentence => mySentence.split(" ").map((word))); {

 // return (word [0].toUpperCase() + word.slice(1));

//  return mySentence.join (" ");

//  const titleCased = () => {


  //  return tutorials
  //}
//pseudo code
//tutorials is global scope
//split sentences in tutorials
//capitalize each word
//join sentences

//function titleCased(){
  //const capTutorials = tutorials.map(t => {
    //const words = t.split(" ").map(w => {
      //return w.charAt(0).toUpperCase() + w.slice(1);
    //}).join(" ");
    //console.log(words);
    //return words; 
  //})
  //return capTutorials;
  //return tutorials


const titleCased = () => {

  return tutorials.map((curTutorial) => {

    const wordArray = curTutorial.split (' ')

    let capitalizedArray = wordArray.map((curWord) => {

      return curWord = curWord[0].toUpperCase() + curWord.slice(1)

      })
      let capitalizedTutorial = capitalizedArray.join(' ')

      return capitalizedTutorial
   })

 }

 

  
 


  

    
  
 


