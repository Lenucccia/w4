const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は摂氏94度だった、だから :insertx: は散歩に出かけた。彼女が :inserty:に到着した時, しばらくの間風景を眺めていた。そして、 :insertz: 私はすべてを見ていたが、驚くことはなかった- insertx: は体重300キログラムで、その日は暑い日だった。';
const insertX = ['梅子さん', '津田さん', '梅子先生'];
const insertY = ['津田塾大学', 'ディズニーランド', 'さいたまスーパーアリーナ'];
const insertZ = ['嬉しくてジャンプした', 'ジェットコースターの上で歌っていた', 'ドアを壊して走り出した'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
